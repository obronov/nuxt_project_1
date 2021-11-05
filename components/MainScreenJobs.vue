<template>
  <div class="main-screen">
    <img class="main-screen__img" :src="info.img" :alt="info.alt">
    <div class="info">
      <div class="container">
        <h1 class="title" v-html="title"></h1>
        <p class="description">{{info.description}}</p>
        <button class="btnCall" type="button" @click="scrollToForm">{{info.link_name}}</button>
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global";

export default {
  mixins: [global],
  props:{
    info: Object
  },
  computed:{
    title(){
      let arr = this.info.title.split(' ');

      arr[arr.length - 1] = `<span class='dedicated'>${arr[arr.length - 1]}</span>`;

      let string = arr.join(' ');
      return string;
    }
  }
}

</script>

<style lang='scss' scoped>

.main-screen__img{
  display: block;
  max-width: 917px;
  width: 100%;
  object-fit: cover;
  margin: 0 0 0 auto;
}
.main-screen{  
  max-width: 1440px;    
  max-height: 68.4em;
  margin: 0 auto;
  position: relative;
  font-size: 1rem;
  background: var(--color-4);
  overflow: hidden;
}
.info{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(359.73deg, rgba(16, 16, 16, 0.5) 34.53%, rgba(65, 63, 62, 0) 85.79%);
}
.info .container{
  display: grid;
  align-content: center;
  justify-items: start;
  height: 100%;
}
.title{
  color: var(--color-7);
  margin: 0 0 .516em;
  max-width: 506px;
  text-shadow: 11px 6px 12px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
}
.description{
  color: var(--color-7);
  max-width: 374px;
  margin: 0;
}
.btnCall{
  margin: 3.65em 0 0;
}
@media screen and (max-width: 1100px) {
  .main-screen{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .main-screen{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .main-screen{
    font-size: 0.6rem;
    max-height: none;
  }
  .info{
    position: static;
    padding: 2.8em 0 13.6em;
  }
}
@media screen and (max-width: 600px) {
  .main-screen{
    font-size: 0.5rem;
    max-height: none;
  }
  .btnCall{
    margin: 3.9em 0 0;
  }
  .title{
    margin: 0 0 .41em;
    font-size: 3.4rem;
  }
  
  .description{
    font-size: 1.4rem;
  }
}
</style>