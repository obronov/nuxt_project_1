<template>
<div>
  <MainScreenCatalog v-if="!emptyMainScreen" :info="mainScreen"/>
  <CatalogList  v-if="!emptyCatalogList" :catalogList="catalogList" />
  <CatalogAuth v-if="!emptyCatalogAuth" :catalogAuth="catalogAuth"/>
</div>
</template>

<script>
import MainScreenCatalog from '@/components/catalog/MainScreenCatalog'
import CatalogList from '@/components/catalog/CatalogList'
import CatalogAuth from '@/components/catalog/CatalogAuth'
export default {
  components:{
    MainScreenCatalog, CatalogList, CatalogAuth
  },
  data(){
    return{
      catalogAuth: {},
      mainScreen: {},
      catalogList: {},
      meta: {}
    }
  },
  head(){
    try {
      return{      
        title: `${this.meta.catalog.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.meta.catalog.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.meta.catalog.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.meta.catalog.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.meta.catalog.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.meta.catalog.og_image}` },
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
        /* this.catalogAuth = await fetch(process.env.fakeUrl + 'catalog_auth') */
      this.catalogAuth = await fetch(process.env.baseUrl + `catalog_auth?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {      
      /* this.mainScreen = await fetch(process.env.fakeUrl + 'catalog_main_screen') */
      this.mainScreen = await fetch(process.env.baseUrl + `catalog_main_screen?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      /* this.catalogList = await fetch(process.env.fakeUrl + 'catalog_list') */
      this.catalogList = await fetch(process.env.baseUrl + `catalog?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }
  },
  computed:{
    emptyCatalogAuth(){
      for (let key in this.catalogAuth) {
        return false;
      }
      return true;
    },
    emptyMainScreen(){
      for (let key in this.mainScreen) {
        return false;
      }
      return true;
    },
    emptyCatalogList(){
      for (let key in this.catalogList) {
        return false;
      }
      return true;
    }
  }
}

</script>

<style lang='scss' scoped>

</style>