<template>
  <NuxtLink class="text" :to="urlDetail(text)">
    <div class="text__title">
        <div>{{text.title}}</div>
        <div >{{text.subtitle}}</div>
    </div>
    <div class="text__info">
      <NuxtLink class="text__hashtag" :to="`/about/blog/?handle=${item.alias}`" v-for="(item, index) in text.hashtag_list" :key="index">
        {{item.title}}
      </NuxtLink>
      <time class="text__time" 
        :datetime="dateTimeFormat(text)">
        {{ new Date(text.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'long', day:'numeric'}) }}
      </time>
    </div>    
  </NuxtLink>
</template>

<script>

export default {
  props:{
    text: Object
  },
  methods:{
    dateTimeFormat(item){
      let date = new Date(item.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'});
      let arrDate = date.split(".");

      return arrDate[2] + '-' + arrDate[1] + '-' + arrDate[0];
    },
    urlDetail(text){
      return '/about/blog/' + text.alias;
    }
  }
}

</script>

<style lang='scss' scoped>
.text{
  text-decoration: none;
  background: var(--color-4);
  font-size: 1rem;
  padding: 3.2em 3.2em 1.7em;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
  align-items: center;
}
.text__img{
  display: block;
  width: 100%;
  border-radius: 0.4em;
}
.text__hashtag, .text__hashtag:visited{
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-1);
  margin: 0 .6em;
  text-decoration: none;
}
.text__time{
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-7);
  margin: 0 .6em;
  opacity: 0.5;
}
.text__title, .text__title:visited{
  text-decoration: none;
  font-size: 2.4em;
  line-height: 150%;
  color: var( --color-7);
  text-transform: uppercase;
}
.text__info{
  display: flex;
  flex-flow: row wrap;  
  margin: 0 -1em;
}
@media screen and (max-width: 1100px) {
  .text{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .text, .text__btn{
    font-size: .7rem;
  }
  .text__hashtag, .text__hashtag:visited, .text__time {
    font-size: 2em;
    line-height: 140%;
  }
}
@media screen and (max-width: 768px) {
  .text{
    font-size: 0.6rem;
  }
  .text__info{
    margin: 1.9em -1em 2.3em;
  }

}
@media screen and (max-width: 600px) {
  .text__hashtag, .text__hashtag:visited, .text__time {
    font-size: 2.4em;
  }
  .text{
    font-size: 0.5rem;
  }
}
</style>