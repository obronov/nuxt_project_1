<template>
  <section class="partners">
    <div class="container">
      <h2 class="section__title" v-html="partners.title"></h2>
      <div class="section_description" v-html="partners.description"></div>
      <div class="main-partner">
        <img class="main-partner__img" :src="partners.main_partner_img" :alt="partners.main_partner_alt">
        <h3 class="main-partner__title">{{partners.main_partner_title}}</h3>
        <p class="main-partner__description">{{partners.main_partner_description}}</p>
      </div>
    </div>
    <div class="partners__slider" >
      <div class="partners__slider-wrap" v-swiper:mySwiper="swiperOptions">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(partner, index) in partners.list" :key="index">
            <img class="swiper-slide__img" :src="partner.img" :alt="partner.alt">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import 'swiper/swiper.scss';
export default {
  props:{
    partners: Object
  },
  data() {
    return {
    swiperOptions: {
      autoplay: {
        delay: 1500,
        disableOnInteraction: false
      },
      slidesPerView: 6,
      spaceBetween: 10,
      freemode: true,
      speed: 400,
      grabCursor: true,
      breakpoints: {
        100: {
          slidesPerView: 3,
          spaceBetween: 23
        },
        480: {
          slidesPerView: 4,
          spaceBetween: 23
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 6,
          spaceBetween: 52
        }
      }
    }
    }
  }
}

</script>

<style lang='scss' scoped>
.partners{
  font-size: 1rem;
  padding: 8.6em 0 7.2em;
}
.main-partner{
  display: grid;
  grid-template-columns: 4fr 8fr;
  grid-gap: 1.4em;
  max-width: 959px;
}
.main-partner__img{
  display: block;
  width: 100%;
  grid-row: 1/3;
}
.main-partner__title{
  font-weight: bold;
  font-size: 2em;
  align-self: end;
  margin: 0;
}
.main-partner__description{
  align-self: end;
  margin: 0;
}
.partners__slider{
  margin: 6.9em auto 0;
  max-width: 1250px;
  padding: 0 15px;
}
@media screen and (max-width: 992px) {
  .partners{
    font-size: .9rem;
  }
  .partners__slider{
    padding: 0 ;
  }
}
@media screen and (max-width: 768px) {
  .partners{
    font-size: 0.8rem;
  }
}
@media screen and (max-width: 600px) {
  .partners{
    font-size: 0.7rem;
    padding: 4.3em 0 0;
  }
  .main-partner{
    grid-gap: .85em 3.8em;
  }
  .main-partner__img[data-v-96e290f4] {
    grid-row: 1/2;
  }
  .main-partner__description{
    grid-column: 1/3;
  }
  .main-partner__title{
    font-size: 2em;
    align-self: center;
  }
  .section__title {
    margin: 0 0 .44em;
  }
  .section_description {
    margin: 11px 0 18px;
  }
  .partners__slider{
    margin: 2.4em 0 0;
  }
  
}
</style>