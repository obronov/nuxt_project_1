<template>
<div>
  <div class="main-screen">
    <MainScreenVideo v-if="!emptyAbout" :info="about.main_screen"/>
  </div>
  <History v-if="!emptyAbout" :history="about.history"/>  
  <hr class="block-delimeter">  
  <Team v-if="!emptyAbout" :team="about.team"/>
  <hr class="block-delimeter">  
  <BlockNews v-if="!emptyAbout" :news="about.news"/>
  <Work v-if="!emptyAbout" :job="about.job"/>
  <Awards v-if="!emptyAbout" :awards="about.awards"/>
  <hr class="block-delimeter">  
  <Partners class="partners_about" v-if="!emptyPartners" :partners="partners"/>
</div>
</template>

<script>
import BlockNews from '@/components/news/BlockNews'
export default {
  components:{
    BlockNews
  },
  data(){
    return{
      about: {},
      partners: {},
      meta: {}
    }
  },
  head(){
    try {
      return{      
        title: `${this.meta.about.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.meta.about.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.meta.about.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.meta.about.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.meta.about.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.meta.about.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }
  },
  async fetch() {
    let lang = this.$store.state.lang;
    try {
      this.meta = await fetch(process.env.baseUrl + `meta_page?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      /* this.about = await fetch(process.env.fakeUrl + 'about') */
      this.about = await fetch(process.env.baseUrl + `about?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      /* this.partners = await fetch(process.env.fakeUrl + 'our_partners') */
      this.partners = await fetch(process.env.baseUrl + `our_partners?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

  },
  computed:{
    emptyAbout(){
      for (let key in this.about) {
        return false;
      }
      return true;
    },
    emptyPartners(){
      for (let key in this.partners) {
        return false;
      }
      return true;
    }
  }

}

</script>

<style lang='scss' scoped>
  .main-screen{
    background: linear-gradient(359.73deg, rgba(16, 16, 16, 0.5) 34.53%, rgba(65, 63, 62, 0) 85.79%), var(--color-4);
  }
  .partners_about{
    padding: 5.1em 0 12em;
  }
  @media screen and (max-width: 600px) {
  .partners_about{
    padding: 4.8em 0 8.5em;
  }
}
</style>