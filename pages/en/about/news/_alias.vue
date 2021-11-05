<template>
  <div>
    <div class="container" v-if="!emptyMeta && !emptyNews">
      <Breadcrumbs class='breadcrumbs_news' v-if="!emptyMeta" :meta="meta" :titlePage="news.title"/>
    </div>

    <div class="container" v-if="!emptyNews">
      <NewsDetail :news="news" />
    </div>
    <div class="video-block">      
      <BlockVideo class="container" v-if="!emptyVideo" :video="video"/> 
    </div>
  </div>
</template>

<script>
import BlockVideo from "@/components/blog/BlockVideo"
export default {
  components:{
    BlockVideo
  },
  data() {
    return {  
      news: {},
      video: {},
      breadcrumbs: {},
      meta: {}
    }
  },
  head(){
    try {
      return{
        title: `${this.news.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.news.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.news.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.news.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.news.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.news.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }
  },
  async fetch() {
    
    try {
      this.video = await fetch(process.env.fakeUrl + `video_blog`)
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
      this.news = await fetch(process.env.fakeUrl + `news_detail`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

  },
  validate({store}) {
   return true;
  },
  computed:{
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
.breadcrumbs_news{
  margin: 7.1em 0;
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
  .breadcrumbs_news{
    margin: 3.75em 0;
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
}
</style>