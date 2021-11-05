<template>
  <div class="blog" itemscope itemtype="https://schema.org/Article">  
    <time class="blog__time" 
      itemprop="datePublished"
      :datetime="dateTimeFormat(blogDetail)">
      {{ new Date(blogDetail.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'}) }}
    </time>
    <h1 class="blog__title" itemprop="headline">{{blogDetail.title}}</h1>
    <iframe v-if="blogDetail.video_id" class="blog__video" width="100%" height="100%" :src="`https://www.youtube.com/embed/${blogDetail.video_id}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <img v-if="blogDetail.img" class="blog__img" itemprop="image" :src="blogDetail.img" :alt="blogDetail.alt">
    <div class="blog__text" v-html="blogDetail.text" itemprop="articleBody"></div>
    <Link :routeName="'about-blog'" class="blog__link">читать еще</Link>
  </div>  
</template>

<script>
import Link from "@/components/utilities/Link"
export default {
  props:{
    blogDetail: Object
  },
  components:{
    Link
  },
  methods:{
    dateTimeFormat(item){
      let date = new Date(item.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'});
      let arrDate = date.split(".");

      return arrDate[2] + '-' + arrDate[1] + '-' + arrDate[0];
    }
  }
}

</script>

<style lang='scss' scoped>
.blog{
  font-size: 1rem;
  padding: 0 0 8.9em;
}
.blog__link{
  margin: 4.6em  0 0;
}
.blog__time{
  font-size: 2.4em;
  line-height: 150%;
  opacity: 0.5;
  margin: 0 0 .83em;
}
.blog__title{
  font-weight: 600;
  font-size: 3.4em;
  line-height: 120%;
  margin: 0 0 .91em;
}
.blog__video{
  overflow: hidden;
  border-radius: .4em;
  margin: 0 0 6.7em;
  max-width: 1011px;
  height: 45vh;
  max-height: 800px;
}
.blog__img{
  display: block;
  max-width: 100%;
  margin: 0 0 6.7em;
}
@media screen and (max-width: 1100px) {
  .blog{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .blog{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .blog{
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 600px) {
  .blog{
    font-size: 0.5rem;
    padding: 0 0 8em;
  }
  .blog__time{
    margin: 0 0 1.3em;
  }
  .blog__img {
    margin: 0 0 7.8em;
  }
  .blog__link{
    margin: 6.4em  0 0;
  }
}
</style>