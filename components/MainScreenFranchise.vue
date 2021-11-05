<template>
  <div class="main-screen">
    <div class="main-screen__inner">
      <div class="main-screen__slider" >
        <div class="main-screen__slider-wrap" v-swiper:mySwiper="swiperOptions">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in info.list" :key="index">
              <img class="swiper-slide__img" :src="item.img" :alt="item.alt">
            </div>
          </div>
        </div>
        <div class="swiper-pagination-franchise" :style="{'--delay': swiperOptions.autoplay.delay / 1000 + 's'}"></div>
        <div class="swiper-navigation-franchise">
          <button class="prev" type="button">
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
                <path d="M21.6416 4.88672L11.868 18.1509L21.6416 31.415" stroke="white" stroke-width="2"/>
              </g>
            </svg>
          </button>
          <button class="next" type="button">
            <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g opacity="0.6">
                <path d="M15.3584 4.88672L25.132 18.1509L15.3584 31.415" stroke="white" stroke-width="2"/>
              </g>
            </svg>
          </button>
        </div>
      </div>
      <div class="info">
        <h1 class="title" v-html="info.title"></h1>
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
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        effect: 'fade',
        slidesPerView: 1,
        spaceBetween: 0,
        freemode: true,
        speed: 400,
        grabCursor: true,
        pagination: {
          clickable: true,
          el: '.swiper-pagination-franchise'
        },
        navigation: {
          nextEl: '.swiper-navigation-franchise .next',
          prevEl: '.swiper-navigation-franchise .prev'
        }
      }
    }
  }
}

</script>

<style lang='scss' scoped>
.main-screen__slider {
    max-width: 91.7em;
    position: relative;
}
.swiper-slide__img{
  display: block;
  width: 100%;
  object-fit: cover;
}
.main-screen{  
  max-width: 1440px;    
  /* max-height: 68.6em; */
  margin: 0 auto;
  position: relative;
  font-size: 1rem;
  background: var(--color-4);
  overflow: hidden;
}
.main-screen__inner{
  max-width: 1345px;
  margin: 0 0 0 auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0;
}
.info{
  display: grid;
  align-content: center;
  justify-items: start;
  height: 100%;
  grid-column: 1;
  grid-row: 1;
  padding: 0 0 0 1.5em;
  margin: 0 -1.2em 0 0;
  z-index: 10;
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
  max-width: 400px;
  margin: 0;
}
.btnCall{
  margin: 3.65em 0 0;
}
.swiper-pagination-franchise {
  opacity: 1;
  z-index: 20;
  bottom: 3.2em;
  left: 0;
  position: absolute;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
}
.swiper-navigation-franchise{
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 4.8em;
  right: 0;
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0 2em;
  align-items: center;
  z-index: 10;
}
.swiper-navigation-franchise .prev,
.swiper-navigation-franchise .next{
  display: block;
  border: none;
  background: none;
  padding: 0;
  width: 7.4em;
  height: 7.4em;
  font-size: 1em;
  opacity: .8;
  &.swiper-button-disabled{
    opacity: .3;
  }
}


.swiper-navigation-franchise .prev svg,
.swiper-navigation-franchise .next svg{
  display: block;
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 1200px) {
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
  .info{
    position: relative;
    padding: 4em 15px 9.8em;
  }
  .main-screen__slider{
    max-width: none;
    width: 100%;
  }
  .main-screen__inner{
    display: block;
  }
  .swiper-slide__img{
    object-fit: contain;
    max-width: 100%;
    width: auto;
  }
.swiper-pagination-franchise{
    bottom: 0;
    left: auto;
    position: absolute;
    width: 25px;
    flex-flow: column nowrap;
    height: 100%;
    right: 0;
}
.swiper-navigation-franchise{
  opacity: 1;
  visibility: visible;
}
}
@media screen and (max-width: 600px) {
  .main-screen{
    font-size: 0.5rem;
  }
  .btnCall{
    margin: 2.4em 0 0;
  }
  .title{
    margin: 0 0 1em;
    font-size: 3.4rem;
  }
  
  .description{
    font-size: 1.4rem;
    max-width: 240px;
  }
  .info{
    margin: -20.6em 0 0;
    padding: 0 15px 13.8em;
  }
}
</style>