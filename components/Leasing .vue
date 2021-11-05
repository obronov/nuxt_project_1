<template>
  <section class="leasing">
    <div class="container">
      <h2 class="section__title" v-html="leasing.title"></h2>
    </div>
    <div class="leasing__inner">
      <p class="leasing__description">{{leasing.description}}</p>
      <div class="leasing__slider-wrap" >
        <div v-swiper:mySwiper="swiperOptions">
          <ul class="swiper-wrapper">
            <li class="swiper-slide" v-for="(item, index) in leasing.list" :key="index">
              <img class="leasing__img" :src="item.img" :alt="item.alt">
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props:{
    leasing: Object
  },
  data() {
    return {
      swiperOptions: {
        autoplay: {
          delay: 1500,
          disableOnInteraction: false
        },
        slidesPerView: 'auto',
        spaceBetween: 25,
        speed: 400,
        grabCursor: true
      }
    }
  }

}

</script>

<style lang='scss' scoped>
.leasing{
  max-width: 1440px;
  font-size: 1rem;
  margin: 6.4em auto 6.7em;
}
.leasing__inner{
  display: grid;
  grid-template-columns: 5fr 7fr;
  grid-gap: 0 3.3em;
  align-items: center;
  max-width: 1345px;
  margin: 0 0 0 auto;
  padding: 0 15px;
}
.leasing__description{
  margin: 0;
}
.swiper-wrapper {
  align-items: center;
  font-size: 1em;
}
.swiper-slide{
  max-width: 16.6em;
}
.leasing__img{
  display: block;
  width: 100%;
  filter: grayscale(1);
  transition: .3s;
  &:hover{
    filter: grayscale(0);
  }
}

.section__title {
  margin: 0 0 0.84em;
}
@media screen and (max-width: 1200px) {
  .leasing{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .leasing{
    font-size: 0.6rem;
  }
  .leasing__inner{
    grid-template-columns: 1fr;
    grid-gap: 8.3em 0;
  }
  .leasing__description{
    grid-row: 2;
  }
}
@media screen and (max-width: 768px) {
  .leasing{
    font-size: 0.5rem;
    margin: 7.2em 0 6.2em;
  }
  .leasing__inner{
    grid-gap: 5em 0;
  }
  .section__title{
    margin: 0 0 0.7em;
  }
}
</style>