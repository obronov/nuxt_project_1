<template>
  <NuxtLink class="news"  :to="'/about/news/' +  item.alias">
    <div class="news__img-wrap">          
      <img class="news__img" :src="item.img" :alt="item.alt">
    </div>
    <p class="news__title">{{item.name}}</p>
    <time class="news__time" 
        :datetime="dateTimeFormat(item)">
        {{ new Date(item.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'}) }}
      </time>
  </NuxtLink>
</template>

<script>

export default {
props:{
    item: {}
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
.news, .news:visited{
  font-size: 1rem;
  color: var(--color-2);
  text-decoration: none;
  &:hover .news__img,
  &:focus .news__img{
    transform: scale(1.1);;
  }
}
.news__img-wrap{
  overflow: hidden;  
  border-radius: .4em;  
  margin: 0 0 1.7em;
}
.news__img{
  display: block;
  max-width: 100%;  
  transition: 0.7s ease;
  will-change: transform;
}
.news__title{
  font-size: 2.4em;
  line-height: 150%;
  margin: .7em 0em .3em;
  font-weight: normal;
}
.news__time{
  font-size: 1.6em;
  line-height: 118%;
  margin: 1em 0 0;
}
@media screen and (max-width: 1100px) {
  .news, .news:visited{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .news, .news:visited{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .news__time{
    font-size: 2em;
  }
  .news, .news:visited{
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 600px) {
  .news, .news:visited{
    font-size: 0.5rem;
  }
  .news__time{
    font-size: 2.4em;
    margin: .5em 0 0;
  }
  .news__title{
    margin: 1.4em 0em .5em;
  }
  .news__img-wrap{
    margin: 0 0 3.4em;
  }
}
</style>