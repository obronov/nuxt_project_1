<template>
  <div class="main-screen">
    <video class="video" preload="none" loop muted autoplay playsinline>
      <source :src="file" :type="type(file)" v-for="(file, index) in info.video_file" :key="index">
    </video>
    <div class="info">
      <div class="container">
        <h1 class="title" v-html="info.title"></h1>
        <p class="description">{{info.description}}</p>
        <button class="btnCall" type="button" @click="showModalApp()">{{info.btn_name}}</button>
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
  methods:{
    type(file){
      let type = null;

      if(file.endsWith('webm') ){
        type = 'video/webm';
      }

      if(file.endsWith('mp4') ){
        type = 'video/mp4';
      }

      return type;
    }
  }
}

</script>

<style lang='scss' scoped>
.video{
  width: 100%;
  height: auto;
  display: block;
  background: var(--color-4);
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
  margin: 0 0 .57em;
  text-transform: uppercase;
}
.description{
  color: var(--color-7);
  max-width: 469px;
  margin: 0;
}
.btnCall{
  margin: 5em 0 0;
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
  }
}
@media screen and (max-width: 600px) {
  .main-screen{
    font-size: 0.5rem;
    max-height: none;
  }
  .btnCall{
    margin: 3em 0 0;
  }
  .title{
    margin: 0 0 2.08em;
    font-size: 3.4rem;
  }
  .info{
    position: relative;
    padding: 0 0 16.8em;
    z-index: 10;
    margin: -17.8em 0 0;
  }
  .description{
    font-size: 1.4rem;
  }
}
</style>