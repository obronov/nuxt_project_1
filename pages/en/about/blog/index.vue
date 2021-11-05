<template> 
  <div class="container">
    <Breadcrumbs class='breadcrumbs_blog' v-if="!emptyMeta" :meta="meta" :titlePage="blog.title"/>
    <h1 class="blog-title" v-if="!emptyBlog">{{blog.title}}</h1>
    <div class="blog-description"  v-if="!emptyBlog" v-html="blog.description"></div>
    <BlogFilter v-if="!emptyBlog" :blog="blog"/>
    <PaginationPrev class="pagination-prev"  :url="`${$route.path + setHashPagination(blog.prev)}`" v-if="!emptyBlog && blog.prev" @clickPaginationPrev="loadPage('prev')">Предыдущая страница</PaginationPrev>
    <ul class="blog-list" v-if="!emptyBlog">
      <li class="blog-list__item" :class="{delimiter: index % 3 == 0}" v-for="(item, index) in blog.list" :key="index">
        <BlogVideoPreview v-if="item.type == 'video'" :video="item"/>
        <BlogNotImgPreview v-if="item.type == 'text' && item.img == ''" :text="item"/>
        <BlogTextPreview v-if="item.type == 'text' && item.img !== ''" :text="item"/>
      </li>
    </ul>
    <PaginationNext  class="pagination-next" :url="`${$route.path + setHashPagination(blog.next)}`" v-if="!emptyBlog && blog.next" @clickPaginationNext="loadPage('next')">Показать ещё</PaginationNext>
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
      blog: {},
      meta: {}
    }
  },
  head(){
    try {
      return{
        title: `${this.meta.blog.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.meta.blog.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.meta.blog.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.meta.blog.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.meta.blog.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.meta.blog.og_image}` },
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
      this.blog = await fetch(process.env.fakeUrl + 'blog')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

  },
  watch:{
    $route: async function(){
      this.blog = await fetch(process.env.fakeUrl + `blog`)
      .then(res => res.json())
    }
  },
  methods:{    
    setHashPagination(pageNumber){
      let query  = this.$route.query;
      let url = "?";

      if(pageNumber != null){
        query.page = pageNumber;
      }

      for (const key in query) {
        if (Object.hasOwnProperty.call(query, key)) {
          const element = query[key];
          url += key + '=' + query[key] + '&';
        }
      }
      url = url.slice(0, -1);

      return url;
    },
    getHashPage(){
      let query  = this.$route.query;
      let getParams = '?';
     

      for (const key in query) {
        if (Object.hasOwnProperty.call(query, key)) {
          const element = query[key];
          getParams += key + '=' + query[key] + '&';
        }
      }
      getParams = getParams.slice(0, -1);

      return getParams;
    },
    async loadPage(type){
      let self = this;
      let blog = {};

      
      if(type == 'prev'){
        try {          
          blog = await fetch(process.env.baseUrl + `blog${self.setHashPagination(self.blog.prev)}`)
          .then(res => res.json())

          blog.list.reverse().forEach(element => {
            self.blog.list.unshift(element);
          });
          
          self.blog.prev = blog.prev;

        } catch (error) {
          console.error(`Загрузка предыдущей страницы блога ${self.$route.fullPath}: `,  error)
        }

      }else{
        try {          
          
          blog = await fetch(process.env.baseUrl + `blog${self.setHashPagination(self.blog.next)}`)
          .then(res => res.json())

          blog.list.forEach(element => {
            self.blog.list.push(element);
          });
          
          self.blog.next = blog.next;

        } catch (error) {
          console.error(`Загрузка следующей страницы блога ${self.$route.fullPath}: `,  error)
        }
      }
    }
  },
  computed:{
    emptyBlog(){
      for (let key in this.blog) {
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
  }
}

</script>

<style lang='scss' scoped>
.breadcrumbs_blog{
  margin: 4.7em 0 8em;
}
.pagination-next{
  margin: 4.4em 0 7.7em;
}
.pagination-prev{
  margin: 4.4em 0;
}
.blog-title {
  margin: 0 0 .34em;
}
.blog-description{
  margin: 0 0 1.87em;
}
.blog-list{
  font-size: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10.3em 1.8em;
  position: relative;
  margin: 0 0 4.4em;
}
.blog-list__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.delimiter:after{
  content: '';
  display: block;
  position: absolute;
  top: -8em;
  left: 0;
  width: calc(300% + 4em);
  height: 1px;
  background: var(--color-5);
}
.delimiter:first-child:after{
  display: none;
}
@media screen and (max-width: 1100px) {
  .blog-list{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .blog-list{
    font-size: .7rem;
  }
  .breadcrumbs_blog{
    margin: 3.75em 0;
  }
}
@media screen and (max-width: 768px) {
  .blog-list {
    font-size: 0.6rem;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 4em 3em;
  }
  .delimiter:after{
    display: none;
  }
}
@media screen and (max-width: 480px) {
  .blog-list {
    grid-gap: 2em 1em;
  }
}
</style>