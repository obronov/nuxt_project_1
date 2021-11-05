<template>
  <ul class="news-list">
    <li class="news-list__item" v-for="(item, index) in newsList" :key="index">
      <NewsPreview :item="item"/>
    </li>
  </ul>
</template>

<script>
export default {
  props:{
    newsList: []
  }
}

</script>

<style lang='scss' scoped>

.news-list{
  font-size: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4.8em 2.1em;
  margin: 0;
}
.news-list__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}

@media screen and (max-width: 1100px) {
  .news-list{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .news-list{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .news-list{
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 600px) {
  .news-list{
    font-size: 0.5rem;
    grid-gap: 6em 4em;
  }
}
</style>