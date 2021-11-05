<template>
<div class="container">
  <Breadcrumbs class='breadcrumbs_news' v-if="!emptyMeta" :meta="meta" :titlePage="news.title"/>
  <h1 class="page-title" v-if="!emptyNews">{{news.title}}</h1>
  <PaginationPrev  :url="`${$route.path}?page=${news.prev}`" v-if="!emptyNews && news.prev" @clickPaginationPrev="loadPage('prev')">Предыдущая страница</PaginationPrev>
  <div class="news-list-wrap" :class="{hiddenShadow: !news.next}" v-if="!emptyNews">
    <NewsList :newsList="news.list"/>
  </div>
  <PaginationNext  :url="`${$route.path}?page=${news.next}`" v-if="!emptyNews && news.next" @clickPaginationNext="loadPage('next')">Показать ещё</PaginationNext>
</div>
</template>

<script>
import PaginationNext from "@/components/utilities/PaginationNext"
import PaginationPrev from "@/components/utilities/PaginationPrev"
export default {
  components:{
    PaginationNext, PaginationPrev
  },
  data(){
    return{
      news: {},
      meta: {},
    }
  },
  head(){
    try {
      return{
        title: `${this.meta.news.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.meta.news.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.meta.news.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.meta.news.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.meta.news.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.meta.news.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }
  },
  async fetch() {
    
     try {
      this.meta = await fetch(process.env.fakeUrl + `meta_page`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {      
      this.news = await fetch(process.env.fakeUrl + 'news')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }


  },
  computed:{
    emptyNews(){
      for (let key in this.news) {
        return false;
      }
      return true;
    },
    emptyMeta(){
      for (let key in this.meta) {
        return false;
      }
      return true;
    }
  },
  methods:{
    getNumberPage(){
      let pageNumber= Number(this.$route.query.page);

      if(!pageNumber){
        pageNumber = 1;
      }

      return `page=${pageNumber}`;
    },
    async loadPage(type){
      let self = this;
      let news = {};
      
      if(type == 'prev'){
        try {          
          news = await fetch(process.env.baseUrl + `news?main=0&page=${self.news.prev}`)
          .then(res => res.json())

          news.list.reverse().forEach(element => {
            self.news.list.unshift(element);
          });
          
          self.news.prev = news.prev;

        } catch (error) {
          console.error(`Загрузка предыдущей страницы новостей ${self.$route.fullPath}: `,  error)
        }

      }else{
        try {          
          news = await fetch(process.env.baseUrl + `news?main=0&page=${self.news.next}`)
          .then(res => res.json())

          news.list.forEach(element => {
            self.news.list.push(element);
          });
          
          self.news.next = news.next;

        } catch (error) {
          console.error(`Загрузка следующей страницы новостей ${self.$route.fullPath}: `,  error)
        }
      }
    }
  }
}

</script>

<style lang='scss' scoped>
.breadcrumbs_news{
  margin: 7.1em 0;
}
.page-title{
  margin: 0em 0em 0.95em;
}
.news-list-wrap{
  position: relative;
  margin: 0 0 35px;
  &:before{
    content: '';
    display: block;
    width: 100%;
    height: 170px;
    background: linear-gradient(0deg, #FFFFFF 24.21%, rgba(255, 255, 255, 0) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
  }
  &.hiddenShadow{
    &:before{
      display: none;
    }
  }
}

@media screen and (max-width: 1100px) {
  .news-list-wrap{
    &:before{
      height: 132px;
    }
  }
}
@media screen and (max-width: 992px) {
  .news-list-wrap{
    &:before{
      height: 100px;
    }
  }
}

</style>