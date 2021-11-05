<template>
  <section class="franchise" :class="{isMobile: !$device.isDesktop}">
    <div class="franchise-inner container">
      <h2 class="h1 franchise__title" v-if="franchise.title" v-html="franchise.title"></h2>
      <div class="franchise__description" v-if="franchise.description" v-html="franchise.description"></div>
      <div class="franchise__wrap-img" v-if="$device.isDesktop">
        <img class="franchise__img" :src="require('~/assets/images/content/anim_franchise.gif')" alt="анимация установки">
      </div>
      <div class="franchise__list-title" v-html="franchise.list_title"></div>

      <div class="franchise__slider-wrap" v-swiper:mySwiper="swiperOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(advantage, index) in franchise.list" :key="index">
            <div class="advantage">
              <div class="advantage__wrap-img">
                <img class="advantage__img" :src="advantage.img" :alt="advantage.alt">
              </div>
              <div class="advantage__text">{{advantage.text}}</div>
            </div>
          </div>
        </div>
      </div>

      <NuxtLink v-if="franchise.link_name_franchise" class="franchise__name-franchise" :to="'franchise'">{{franchise.link_name_franchise}}</NuxtLink>
      <Link v-if="franchise.link__name_franchise_more" :routeName="'franchise'"  :routeHash="'#regions'" class="franchise__link">{{franchise.link__name_franchise_more}}</Link>
    </div>
  </section>
</template>

<script>
import Link from "@/components/utilities/Link"
export default {
  props:{
    franchise: Object
  },
  components:{
    Link
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        spaceBetween: 0,
        freemode: true,
        speed: 400,
        direction: 'vertical'
      }
    }
  }
}

</script>

<style lang='scss' scoped>
.franchise{
  font-size: 1rem;
  padding: 17.1em 15px 11.5em;
  background: var(--color-10);
}
.franchise-inner{
  display: grid;
  grid-template-columns: 7fr 5fr;
  grid-gap: 0 2em;
}
.franchise__title{
  grid-column: 1/3;
  margin: 0 0 .78em;
  text-transform: uppercase;
}
.isMobile .franchise__description{
  grid-column: 1/3;
  grid-row: 2;
  margin: 0 0 2.8em;
}

.franchise__description::v-deep *{
  margin: 0;
}
.franchise__wrap-img{
  grid-column: 1;
}
.franchise__list-title{
  grid-row: 2;
  grid-column: 2;
  font-size: 2.4em;
  line-height: 121%;
  text-transform: uppercase;
  color: var(--color-2);
  align-self: end;
  max-width: 16.6em;
  padding: 0 0 0 2.75em;
}
.isMobile  .franchise__list-title{
  grid-row: 3;
  grid-column: 1/3;
  padding: 0;
  margin: 0;
}
.franchise__img {
  display: block;
  width: 100%;
  height: 45.3em;
}
.franchise__slider-wrap{
  max-height: 45.3em;
  position: relative;
  margin: 0 0 9.6em;
  &:before,
  &:after{
    content: '';
    width: 100%;
    height: 16.6em;
    display: block;
    position: absolute;
    right: 0;
    z-index: 10;
  }
  &:before{
    background: linear-gradient(180deg, var(--color-10) 0%,  rgba(255, 255, 255, 0) 100%);    
    top: 0;
  }
  &:after{
    background: linear-gradient(360deg, var(--color-10) 0%,  rgba(255, 255, 255, 0) 100%);
    bottom: 0;
  }
}
.isMobile  .franchise__slider-wrap{
  grid-row: 4;
  grid-column: 1/3;
  margin: 0 0 6em;
}
.franchise__name-franchise, .franchise__name-franchise:visited{
  background: linear-gradient(260.74deg, #EA5644 39.35%, #F56B43 84.23%), #E77C5A;
  border-radius: .2em;
  font-weight: bold;
  font-size: 2em;
  line-height: 120%;
  text-transform: uppercase;
  color: var(--color-7);
  transition: .3s;
  display: block;
  padding: .9em 1.5em;
  text-decoration: none;
  text-align: center;
  margin: 0 auto 0 0;
  animation: pulse 2.5s 4s infinite;
  &:hover,
  &:focus{
    background: var(--color-7);
    color: var(--color-4);
  }
}
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(231, 124, 90, 0.6);
  }
  50% {
      box-shadow: 0 0 0 1em rgba(231, 124, 90, 0);
  }
  100% {
      box-shadow: 0 0 0 0 rgba(231, 124, 90, 0);
  }
}
.isMobile .franchise__name-franchise{
  grid-row: 5;
  grid-column: 1/3;
}
.franchise__link{
  align-self: center;
}
.isMobile .franchise__link{
  grid-row: 6;
  grid-column: 1/3;
  justify-self: start;
  margin: 2.6em 0 0;
}
.advantage {
  display: grid;
  grid-template-columns: 7.3em 1fr;
  grid-gap: 0 2.8em;
  align-items: center;
  height: 100%;
  transition: .3s;
  margin: 3.15em 0;
  padding: 0 0 0 3.2em;
}
.swiper-slide-active .advantage{
  padding: 0 0 0 6em;  
  position: relative;
  &:before{
    content: '';
    display: block;
    width: 5.6em;
    height: 5.2em;
    background: url('~/assets/images/design/triangle.svg') no-repeat;
    background-size: contain;
    position: absolute;
    top: calc(50% - 16px);
    left: 0;
  }
}
.advantage__wrap-img{
  border-radius: 100%;
  background: linear-gradient(180.32deg, rgba(231, 124, 90, 0) 12.68%, var(--color-1) 121.49%);
  box-shadow: .2em 2.2em 1em rgba(107, 105, 103, 0.2);
  overflow: hidden;
  width: 7.3em;
  height: 7.3em;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
}
.advantage__img{
  width: 75%;
  display: block;
}
.advantage__text{
  font-size: 2.4em;
  line-height: 150%;
  color: var(--color-2);
}
.swiper-slide {
    flex-shrink: 0;
    width: 100%;
    height: auto;
}
 @media screen and (max-width: 1100px) {
    .franchise{
      font-size: .8rem;
      padding: 12em 0 9.8em;
    }
  }
  @media screen and (max-width: 992px) {
    .franchise{
      font-size: .7rem;
    }
    .advantage{
      grid-gap: 0 6em;
    }
    .advantage__text{
      font-size: 2.8em;
    }
  }
  @media screen and (max-width: 768px) {
    .franchise{
      font-size: 0.6rem;
    }
    .swiper-slide-active .advantage{
      &:before{
        width: 4em;
        height: 4em;
        top: calc(50% - 1.3em);
        left: 0;
      }
    }
  }
  @media screen and (max-width: 600px) {
    .franchise{
      font-size: 0.5rem;      
    }
    .franchise__name-franchise, .franchise__name-franchise:visited{
      font-size: 2.4em;
    }
    .advantage__wrap-img{
      width: 9.8em;
      height: 9.8em;      
    }

  }
</style>