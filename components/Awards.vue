<template>
  <section class="awards">
    <Photoswipe class="container">
        <h2 class="section__title" v-html="awards.title"></h2>
          <div class="awards__slider-wrap" v-swiper:mySwiper="swiperOptions">
            
              <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(award, index) in awards.list" :key="index">
                  <figure class="award">
                    <div class="award__wrpa-img">
                      <img class="award__img" v-pswp="award.img" :src="award.thumbnail" :alt="award.alt" loading="lazy">
                    </div>
                  </figure>          
                </li>
              </ul>
          </div>

          <div class="swiper-navigation-wrap container">
            <SwiperArrow/>
          </div>
    </Photoswipe>
  </section>
</template>

<script>

export default {
  props:{
    awards: Object
  },
  data() {
    return {
      swiperOptions: {
        /* autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }, */
        slidesPerView: 3,
        spaceBetween: 21,
        freemode: true,
        speed: 400,
        grabCursor: true,
        navigation: {
          prevEl: '.awards .btn-navigation_prev',
          nextEl: '.awards .btn-navigation_next'
        },
        breakpoints: {
          100: {
            slidesPerView: 2,
            spaceBetween: 26
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 21
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 135
          }
        }
      }
    }
  }
}

</script>

<style lang='scss' scoped>
.awards{
  font-size: 1rem;
  margin: 17em 0 5.2em;
}
.section__title {
    margin: 0 0 1.09em;
}
.swiper-wrapper {
  font-size: 1em;
  margin: 0;
}
.swiper-slide {
    margin: 0;    
    padding: 0 0 1.5em;
    &:before{
      display: none;
    }
}
.award {
  margin: 0 auto;
  max-width: 317px;  
  box-shadow: 2px 3px 15px rgba(186, 161, 146, 0.25);
}
.award__caption{
  margin: 0;
}
.award__img{
  display: block;
  width: 100%;  
  cursor: pointer;
}

.awards__slider-wrap{
  margin: 0 0 3.1em;
}
@media screen and (max-width: 1366px) {
  .awards{
    font-size: .8rem;
  }
}

@media screen and (max-width: 1100px) {
  .awards{
    font-size: .7rem;
  }
}
@media screen and (max-width: 992px) {
  .awards{
    font-size: .6rem;
  }
  .swiper-navigation-wrap .swiper-navigation{
    grid-gap: 0 2.6em;
    font-size: 1rem;
  }
}

@media screen and (max-width: 768px) {
    .awards{
    font-size: .5rem;
  }
}
@media screen and (max-width: 600px) {
  .awards{
    font-size: .4rem;
    margin: 15em 0 9.25em;
  }
}
</style>