<template>
  <div class="news" itemscope itemtype="https://schema.org/Article">  
    <time class="news__time" 
      itemprop="datePublished"
      :datetime="dateTimeFormat(news)">
      {{ new Date(news.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'}) }}
    </time>
    <h1 class="news__title" itemprop="headline">{{news.title}}</h1>
    <img class="news__img" itemprop="image" v-if="news.img" :src="news.img" :alt="news.alt">
    <div class="news__text" v-html="news.text" itemprop="articleBody"></div>
    <Link :routeName="'about-news'" class="news__link">другие новости</Link>
  </div>  
</template>

<script>
import Link from "@/components/utilities/Link"
export default {
  props:{
    news: Object
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
.news{
  font-size: 1rem;
  padding: 0 0 8.9em;
}
.news__link{
  margin: 4.6em  0 0;
}
.news__time{
  font-size: 2.4em;
  line-height: 150%;
  opacity: 0.5;
  margin: 0 0 .83em;
}
.news__title{
  font-weight: 600;
  font-size: 3.4em;
  line-height: 120%;
  margin: 0 0 1.47em;
}
.news__img{
  display: block;
  max-width: 100%;
  border-radius: .4em;
  margin: 0 0 5em;
}
@media screen and (max-width: 1100px) {
  .news{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .news{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .news{
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 600px) {
  .news{
    font-size: 0.5rem;
    padding: 0 0 8em;
  }
  .news__time{
    margin: 0 0 1.3em;
  }
  .news__img {
    margin: 0 0 7.8em;
  }
  .news__link{
    margin: 6.4em  0 0;
  }
}
</style>