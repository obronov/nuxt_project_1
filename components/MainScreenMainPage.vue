<template>
  <div class="main-screen">
    <img class="main-screen__img" :src="info.img" :alt="info.alt" :style="{'--offsetWindow': `${offsetWindow}px`}">
    <div class="info">
      <div class="container">
        <h1 class="title" v-html="title"></h1>
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
  data(){
    return{
      offsetWindow: 0
    }
  },
  computed:{
    title(){
      let arr = this.info.title.split(' ');

      arr[arr.length - 2] = `<span class='dedicated'>${arr[arr.length - 2]}</span>`;

      let string = arr.join(' ');
      return string;
    }
  },
  methods:{
    parallax(){
      let self = this;
      window.addEventListener('scroll', function(){
        self.offsetWindow = window.pageYOffset;
      });
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.parallax();
    });
  }
}

</script>

<style lang='scss' scoped>
.main-screen__img{
  --offset: calc(var(--offsetWindow) / 3 * (1));
  display: block;
  max-width: 99.6em;
  width: 100%;
  object-fit: cover;
  margin: 0 0 0 auto;
  transition: .7s ease;
  will-change: transform;
  transform: translate3d(0, var(--offset), 0);
  position: absolute;
  bottom: 5.4em;
  right: 0;
}
.main-screen{  
  max-width: 1440px;
  height: 83em;
  margin: -131px auto 0;
  position: relative;
  font-size: 1rem;
  padding: 131px 0 0;
}
.info{
  position: relative;
  height: 100%;
}
.info .container{
  display: grid;
  align-content: start;
  justify-items: start;
  height: 100%;  
}
.title{
  font-weight: 600;
  color: var(--color-7);
  margin: .62em 0 .56em;
  max-width: 7.81em;
  text-shadow: 11px 6px 12px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
  font-size: 9em;
  line-height: 1;
}
.description{
  color: var(--color-7);
  max-width: 22.25em;
  margin: 0;
}
.btnCall{
  margin: 2.5em 0 0;
}
@media screen and (max-width: 1200px) {
  .main-screen{
    font-size: .8rem;
    margin: -118px auto 0;
    padding: 118px 0 0;
  }
}
@media screen and (max-width: 1100px) {
  .main-screen{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .main-screen{
    font-size: .7rem;
    margin: -105px auto 0;
    padding: 105px 0 0;
  }
  .main-screen__img{
    max-width: 93.6em;
  }
}
@media screen and (max-width: 768px) {
  .main-screen{
    font-size: 0.6rem;
    height: auto;
    margin: -60px auto 0;
    padding: 97px 0 0;
  }
  .info{
    padding: 0 0 16.4em;
    margin: -13.2em 0 0;
  }
  .main-screen__img{
    position: static;
    margin: 0 auto;
    --offset: calc(var(--offsetWindow) / 20 * (1));
  }
  .title{
    margin: 0 0 0.56em;
  }
}
@media screen and (max-width: 600px) {
  .main-screen{
    font-size: 0.5rem;
    max-height: none;
  }
  .btnCall{
    margin: 2em 0 0;
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