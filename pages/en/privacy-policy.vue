<template>
  <div class="container">
    <div v-if="!emptyPage" v-html="page.text"></div>
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  data(){
    return{
      page:{}
    }
  },
head(){
    try {
      return{
        title: `Политика конфиденциальности`,
        meta: [
          { hid: 'description', name: 'description', content: `` },
          { hid: 'keywords', name: 'keywords', content: `` },
          { hid: 'og:title', property: 'og:title', content: `` },
          { hid: 'og:description', property: 'og:description', content: `` },
          { hid: 'og:image', property: 'og:image', content: `` },
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
      this.page = await this.fetchLkAuth(process.env.baseUrl + `privacy_policy?lang=${lang}`);
      /* this.page = await fetch(process.env.fakeUrl + 'lk_info')
      .then(res => res.json()) */

    } catch (error) {
      console.error(`privacy_policy Страница ${this.$route.fullPath}: `,  error)
    }

  },
  computed:{
    emptyPage(){
      for (let key in this.page) {
        return false;
      }
      return true;
    }
  },
}

</script>

<style lang='scss' scoped>

</style>