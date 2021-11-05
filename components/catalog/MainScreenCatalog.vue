<template>
  <div class="main-screen">
    <div class="main-screen__inner">
      <div class="slider">
        <div class="slider__item" 
        :class="{active: item.show}" 
        v-for="(item, index) in imgList" 
        :key="index"
        >
          <img class="slider__img" :src="item.img" :alt="item.alt">
          <div class="curtain">
            <div class="curtain__item"></div>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="container">
          <h1 class="title" v-if="info.title" v-html="info.title"></h1>
          <p class="description" v-if="info.description">{{info.description}}</p>
          <button class="btnCall" type="button" v-if="info.link_name" @click="showModalApp()">{{info.link_name}}</button>
        </div>
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
      currentSliderIndex: 0
    }
  },
  computed:{
    imgList(){
      let imgList = [];
      for (const key in this.info.list) {
        if (Object.hasOwnProperty.call(this.info.list, key)) {
          const element = this.info.list[key];
          
          if(key == this.currentSliderIndex){
            element.show = true;
          }else{
            element.show = false;
          }
          imgList.push(element)
        }
      }

      return imgList;
    }
  },
  methods:{
    switchSlideTimeout(){
      let self = this;
      setTimeout(function run() {
        self.switchSlide();
        setTimeout(run, 5000);
      }, 5000);
    },
    switchSlide(){
      let self = this;
      let countElement = this.info.list.length;
      if(self.currentSliderIndex == countElement - 1){
        self.currentSliderIndex = 0;
      }else{
        self.currentSliderIndex = self.currentSliderIndex + 1;
      } 

    }
  },
  mounted(){
    this.$nextTick(()=>{
      setTimeout(this.switchSlide(), 2000);
      this.switchSlideTimeout();
    });
  }
}

</script>

<style lang='scss' scoped>
.main-screen__inner {
  max-width: 1440px;
  margin: 0 auto;
}
.main-screen{
  font-size: 1rem;
  position: relative;
  background: var(--color-4);
}
.slider{
  position: relative;
  height: 68.5em;
  max-width: 97.5em;
  margin: 0 0 0 auto;
}
.slider__item{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  &.active {
    z-index: 10;
  }
  &.active .slider__img{    
    opacity: 1;
  }
}
.slider__img{
  display: block;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: .0s .75s;
}
.curtain{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;
  &:before,
  &:after{
    content: '';
    display: block;
    background: var(--color-4);
    width: calc(100% / 3);
    flex: none;
    transform: translate3d(0, 100%, 0);
  }
   &:before{
     height: 160%;   
   }
   &:after{
     height: 150%;   
   }
  & .curtain__item{
    height: 140%;
    background: var(--color-4);
    width: calc(100% / 3);
    flex: none;
    transform: translate3d(0, 100%, 0);
  }
  
}
.active{
  .curtain{
    &:before{
      transform: translate3d(0, -100%, 0);
      transition: 1.5s ease-out;
    }
    & .curtain__item{
      transform: translate3d(0, -100%, 0);
      transition: 1.5s .1s ease-out;
    }
    &:after{
      transform: translate3d(0, -100%, 0);
      transition: 1.5s .15s ease-out;
    }
    
  }
}
.info{
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: linear-gradient(359.73deg, rgba(16, 16, 16, 0.5) 34.53%, rgba(65, 63, 62, 0) 85.79%); */
}
.info .container{
  display: grid;
  align-content: center;
  justify-items: start;
  height: 100%;
}
.title{
  color: var(--color-7);
  margin: 0 0 .34em;
  max-width: 506px;
  text-shadow: 11px 6px 12px rgba(0, 0, 0, 0.3);
  text-transform: uppercase;
}
.description{
  color: var(--color-7);
  max-width: 559px;
  margin: 0;
}
.btnCall{
  margin: 2.5em 0 0;
}
@media screen and (max-width: 1200px) {
  .main-screen{
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px) {
  .main-screen{
    font-size: .8rem;
  }
  .info{
    position: static;
    background: var(--color-4);
    padding: 0 0 16.6em;
  }
  .title{
    margin: 0 0 0.5em;
  }
}
@media screen and (max-width: 768px) {
  .main-screen{
    font-size: .7rem;
  }
  .slider__img{
    height: 100%;
    margin: 0 auto;
  }
  .slider{
    height: 48.5em;
    margin: 0 auto;
  }
}
@media screen and (max-width: 600px) {
  .main-screen{
    font-size: .6rem;
  }
}
@media screen and (max-width: 576px) {
  .title{
    font-size: 3.4rem;
  }
  .description{
    font-size: 1.4rem;
    line-height: 130%;
  }
  .btnCall{
    margin: 2.9em 0 0;
  }
  .slider{
    height: 38em;
  }
}
</style>