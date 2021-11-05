<template>
  <section class="steps">
    <div class="container">
      <h2 class="section__title" v-html="advantages.title"></h2>
      <div class="steps__slider-wrap" v-swiper:mySwiper="swiperOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(advantage, index) in advantages.list" :key="index">
            <div class="advantage">
              <div class="advantage__number">{{index + 1}}</div>
              <div class="advantage__text">{{advantage}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props:{
    advantages: Object
  },
  data() {
    return {
    swiperOptions: {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 0,
      freemode: true,
      speed: 400,
      direction: 'vertical',
      breakpoints: {
        100: {
          slidesPerView: 'auto',
          spaceBetween: 0
        },
        769: {
          slidesPerView: 'auto',
          spaceBetween: 0
        }
      }
    }
    }
  }
}

</script>

<style lang='scss' scoped>
.steps{
  font-size: 1rem;
  padding: 0 0 5.4em;
}
.steps__slider-wrap{
  max-height: 65.4em;
  position: relative;
  &:before,
  &:after{
    content: '';
    max-width: 51.7em;
    width: 100%;
    height: 8em;
    display: block;    
    position: absolute;    
    right: 0;
    z-index: 10;
  }
  &:before{
    background: linear-gradient(180deg, #FFFFFF 0%,  rgba(255, 255, 255, 0) 100%);    
    top: 0;
  }
  &:after{
    background: linear-gradient(360deg, #FFFFFF 0%,  rgba(255, 255, 255, 0) 100%);
    bottom: 0;
  }
}
.advantage{
  max-width: 51.7em;
  margin: -1px 0 0 auto;
  height: 100%;
  padding: 1.2em 0 1.7em;
  border-top: 1px solid #E77C5A;
  transition: .3s;
}
.advantage__number{
  display: none;
  border-radius: 100%;
  background: var(--color-7);
  font-weight: bold;
  font-size: 7.2em;
  line-height: 100.8%;
  text-align: center;
  text-transform: uppercase;
  color: var(--color-4);
  width: 1.2em;
  height: 1.2em;
  transition: .3s;
}
.advantage__text{
  font-size: 2.4em;
  line-height: 150%;
  color: var(--color-2);
  transition: .3s;
}
.swiper-slide-active .advantage{
  max-width: 100%;
  background: var(--color-1);
  align-items: center;
  padding: 3.8em 10.3em;  
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 9.6em;
  align-items: center;
}
.swiper-slide-active .advantage__text{
  line-height: 120%;
  color: var(--color-7);
  border: none;
  max-width: 28.6em;
}
.swiper-slide-active .advantage__number{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
.section__title{
  max-width: 7.81em;
  margin: 0;
  position: absolute;
  top: 0;
  left: 15px;
  z-index: 10;
}
.container{
  position: relative;
}
@media screen and (max-width: 1200px) {
  .steps{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .steps{
    font-size: .6rem;
  }
  .swiper-slide-active .advantage__text{
    max-width: 100%;
  }
}
@media screen and (max-width: 768px) {

  .section__title{
    position: static;
    max-width: 100%;
    margin: 0 0 1em;
  }
  .advantage{
    max-width: 100%;
    padding: 2.8em 2.4em;
  }
  .steps__slider-wrap{
    &:before,
    &:after{
      max-width: 100%;
    }
  }
  .swiper-slide-active .advantage{
    padding: 5em 3em;
    grid-gap: 0 2.5em;
  }
  .steps__slider-wrap{
    max-height: 230px;
  }
}

</style>