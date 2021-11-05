<template>
  <section class="block-news container">
    <h2 class='section__title' v-html="news.title"></h2>
    <div class="block-news-list-wrap">
      <ul class="block-news-list">
        <li class="block-news-list__item" v-for="(item, index) in news.list" :key="index">
          <NewsPreview :item="item"/>
        </li>
      </ul>
    </div>
    <Link :routeName="'about-news'" class="block-news__link">еще новости</Link>
  </section>
</template>

<script>
import Link from "@/components/utilities/Link"
export default {
  props:{
    news: Object
  },
  components:{
    Link
  }
}

</script>

<style lang='scss' scoped>
.block-news-list{
  font-size: 1rem;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 -1.1em;
}
.block-news-list__item{
  width: 50%;
  flex: none;
  padding: 0 1.1em;
  margin: 0;
  &:before{
    display: none;
  }
}

.block-news{
  font-size: 1rem;
  padding: 10.8em 15px 8.9em;
}
.block-news__link{
  margin: 4em 0 0;
}
@media screen and (max-width: 1100px) {
  .block-news{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .block-news{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .block-news{
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 600px) {
  .block-news{
    font-size: 0.5rem;
    padding: 6em 15px 8em;
  }
  .block-news-list-wrap{  
    overflow-x: auto;
    scrollbar-width: none;
  }
  .block-news-list-wrap::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
  .block-news{
    overflow: hidden;
  }
  .block-news-list__item{
    width: 66%;
  }
}
</style>