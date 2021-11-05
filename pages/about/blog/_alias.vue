<template>
<div class="container">
  <Breadcrumbs class='breadcrumbs_blog' v-if="!emptyMeta" :meta="meta" :titlePage="blogDetail.title"/>
  <h1 class="blog-title" v-if="!emptyBlog">{{blog.title}}</h1>
  <div class="blog-description"  v-if="!emptyBlog" v-html="blog.description"></div>
  <BlogFilter v-if="!emptyBlog" :blog="blog"/>
  <BlogDetail v-if="!emptyBlogDetail" :blogDetail="blogDetail"/>
</div>
</template>

<script>

export default {

  data() {
    return {  
      blog: {},
      blogDetail: {},
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
      this.blog = await fetch(process.env.fakeUrl + `blog`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.blogDetail = await fetch(process.env.fakeUrl + `blog_detail`)
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
  },
  validate({store}) {
   return true;
  },
  computed:{
    emptyBlog(){
      for (let key in this.blog) {
        return false;
      }
      return true;
    },
    emptyBlogDetail(){
      for (let key in this.blogDetail) {
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
@media screen and (max-width: 992px) {
  .breadcrumbs_blog{
    margin: 3.75em 0;
  }
}
</style>