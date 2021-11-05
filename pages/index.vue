<template>
  <div>
    <div class="first-screen">
      <Header class="mainPage"/>
      <MainScreenMainPage v-if="!emptyMainScreenMainPage" :info="mainScreenMainPage"/>
      <Advantage v-if="!emptyMainScreenMainPage" :advantages="mainScreenMainPage.advantage"/>
    </div>
    <SliderProduct v-if="!emptyProducts" :products="products"/>
    <hr class="block-delimeter">
    <WhyBuy v-if="!emptyWhyBuy" :info="whyBuy"/>
    <Franchise  :franchise="franchise"/>
    <VideoBox v-if="!emptyVideoBox && videoBox.video_id" :video="videoBox"/>
    <Leasing  v-if="!emptyLeasing" :leasing="leasing"/>
    <ScopeApplication v-if="!emptyScope" :scope="scope"/> 
    <Partners v-if="!emptyPartners" :partners="partners"/> 
    <hr class="block-delimeter hidden">
    <BlockNews v-if="!emptyNews" :news="news"/>
    <div class="video-block">
      <BlockVideo class="container" v-if="!emptyVideo" :video="video"/> 
    </div>
    
    <Map v-if="!emptyMap" :map="map"/>
  </div>
</template>

<script>
import BlockNews from '@/components/news/BlockNews'
import BlockVideo from '@/components/blog/BlockVideo'

export default {
  components:{
    BlockNews, BlockVideo
  },
  data(){
    return{
      videoBox: {},
      map: {},
      news: {},
      video: {},
      partners: {},
      whyBuy: {},
      scope: {},
      leasing: {},
      products: {},
      mainScreenMainPage: {},
      meta: {},
      franchise: {}
    }
  },
  head(){
    try {
      return{
        title: `${this.meta.main.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.meta.main.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.meta.main.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.meta.main.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.meta.main.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.meta.main.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }

  },
  async fetch() {

    try {
      this.videoBox = await fetch(process.env.fakeUrl + 'video_franchise_1')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.franchise = await fetch(process.env.fakeUrl + 'franchise_main')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.meta = await fetch(process.env.fakeUrl + `meta_page`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.map = await fetch(process.env.fakeUrl + `contact_main`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.news = await fetch(process.env.fakeUrl + `news`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.video = await fetch(process.env.fakeUrl +  `video_blog`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.partners = await fetch(process.env.fakeUrl + `our_partners`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.whyBuy = await fetch(process.env.fakeUrl + `why_buy`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.scope = await fetch(process.env.fakeUrl + `scope_application`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.leasing = await fetch(process.env.fakeUrl + `leasing`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.products = await fetch(process.env.fakeUrl + `catalog_list`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.mainScreenMainPage = await fetch(process.env.fakeUrl + `main_screen_main_page`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

  },
  computed:{
    emptyVideoBox(){
      for (let key in this.videoBox) {
        return false;
      }
      return true;
    },
    emptyMap(){
      for (let key in this.map) {
        return false;
      }
      return true;
    },
    emptyNews(){
      for (let key in this.news) {
        return false;
      }
      return true;
    },
    emptyVideo(){
      for (let key in this.video) {
        return false;
      }
      return true;
    },
    emptyPartners(){
      for (let key in this.partners) {
        return false;
      }
      return true;
    },
    emptyWhyBuy(){
      for (let key in this.whyBuy) {
        return false;
      }
      return true;
    },
    emptyScope(){
      for (let key in this.scope) {
        return false;
      }
      return true;
    },
    emptyLeasing(){
      for (let key in this.leasing) {
        return false;
      }
      return true;
    },
    emptyProducts(){
      for (let key in this.products) {
        return false;
      }
      return true;
    },
    emptyMainScreenMainPage(){
      for (let key in this.mainScreenMainPage) {
        return false;
      }
      return true;
    },
    emptyFranchise(){
      for (let key in this.franchise) {
        return false;
      }
      return true;
    }
  }
}
</script>
<style lang='scss' scoped>
  .mainPage {
    position: relative;
    z-index: 10;
    background: none;
  }
  .first-screen{
    overflow: hidden;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 18.42%, rgba(0, 0, 0, 0.5) 60.04%), linear-gradient(54.75deg, rgba(0, 0, 0, 0.5) 0.61%, rgba(0, 0, 0, 0) 75.05%), #767A7D;
  }
  .video-block{
    background: var(--color-10);
    font-size: 1rem;
    padding: 8.1em 0 12.1em;
  }
  @media screen and (max-width: 1100px) {
    .video-block{
      font-size: .8rem;
    }
  }
  @media screen and (max-width: 992px) {
    .video-block{
      font-size: .7rem;
    }
  }
  @media screen and (max-width: 768px) {
    .video-block{
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 600px) {

    .video-block{
      font-size: 0.5rem;
      padding: 4em 0 12em;
    }
    .block-delimeter.hidden{
      display: none;
    }
  }
</style>