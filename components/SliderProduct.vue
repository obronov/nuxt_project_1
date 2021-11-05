<template>
  <div class="products" >
    <div class="products-slider" v-swiper:mySwiper="swiperOptions">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :class="{isMobile: !$device.isDesktop}" v-for="(item, index) in products" :key="index">
          <NuxtLink class="products-link" :class="{isMobile: !$device.isDesktop}" :to="`/catalog/${item.alias}`">
            <figure class="product">
                <figcaption class="product__name" v-html="caption(item.name)"></figcaption>
                <img class="product__img" :src="require(`~/assets/images/content/${item.code}.png`)" :alt="item.code" loading="lazy">
                <p class="product__short-description">{{item.short_description}}</p>
            </figure>
          </NuxtLink>
        </div>
      </div>
    </div>

    <div class="products-btns container">
      <button class="btn" type="button">Подобрать установку</button>
      <div class="swiper-navigation-wrap" v-if="!emptyProductsList">
        <SwiperArrow/>
      </div>
    </div>
    
  </div>

</template>

<script>

export default {
  props:{
    products: Array
  },
  data() {
    return {
    swiperOptions: {
      /* autoplay: {
        delay: 1500,
        disableOnInteraction: false
      }, */
      slidesPerView: 'auto',
      spaceBetween: 0,
      freemode: true,
      speed: 400,
      navigation: {
        nextEl: '.products .btn-navigation_next',
        prevEl: '.products .btn-navigation_prev'
      },
    }
    }
  },
  methods:{
    caption(name){
      let arr = name.split(' ');

      arr[arr.length - 1] = `<span class='dedicated'>${arr[arr.length - 1]}</span>`;

      let string = arr.join(' ');
      return string;
    }
  },
  computed:{
    emptyProductsList(){
      if(this.products != undefined && this.products.length > 1){
        return false;
      }else{
        return true;
      }
    }
  },
}

</script>

<style lang='scss' scoped>
.products{
  font-size: 1rem;
  max-width: 1440px;
  margin: 0 auto;
}
.swiper-slide{
  background: var(--color-10);
}
.swiper-slide:nth-of-type(even){
  background: var(--color-5);
}
.product{
  padding: 3.8em;
  margin: 0;
  transition: .5s;
  display: grid;
  grid-template-rows: 1fr 33.4em 1fr;
  align-items: center;
  height: 100%;
}
.product__name{
  font-weight: bold;
  font-size: 2.4em;
  line-height: 121%;
  text-transform: uppercase;
  color: var(--color-2);
  text-align: center;
  margin: 0 0 0.7em;
  align-self: end;
}
.product__name::v-deep .dedicated{
  color: var(--color-5);
}
.swiper-slide:nth-of-type(even) .product__name{
  color: var(--color-7);
}
.swiper-slide:nth-of-type(even) .product__name::v-deep .dedicated{
  color: var(--color-2);
}
.product__img{
  display: block;
  margin: 0 auto;
  transition: 0.7s ease;
  height: 33.4em;
  will-change: transform;
}
.swiper-slide{
  max-width: 60.3em;
  height: 55.2em;
}
.swiper-slide.isMobile{
  height: auto;
}
.products-link:not(.isMobile){
  display: block;
  text-decoration: none;
  height: 100%;
  overflow: hidden;
  &:hover .product__short-description,
  &:focus .product__short-description{
    overflow: visible;
    opacity: 1;
    margin:  1.31em 0 0;
  }

  &:hover .product, 
  &:focus .product{
    grid-template-rows: 1fr 26.9em 1fr;
  }
  &:hover .product__img, 
  &:focus .product__img{
    transform: scale(.79);
  }

}
.products-link.isMobile{
  display: block;
  text-decoration: none;
  height: 100%;
  overflow: hidden;
  & .product__short-description{
    display: none;
    opacity: 1;
    margin: 1em 0 0;
  }
  & .product{
    display: block;
  }
  & .product__img{
    height: 26.9em;
  }
}

.product__short-description{
  margin: 0;
  text-align: center;
  font-size: 1.6rem;
  line-height: 118%;
  color: var(--color-2);
  overflow: hidden;
  opacity: 0;
  align-self: start;
  transition: .5s;
}
.products-btns{
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row wrap;
  margin: 3.9em auto 8em;
}
@media screen and (max-width: 1366px) {
  .products{
    font-size: .8rem;
  }
  .product__short-description{
    font-size: 1.4rem;
  }
}
@media screen and (max-width: 1100px) {
  .products{
    font-size: .7rem;
  }
}
@media screen and (max-width: 992px) {
  .products{
    font-size: .6rem;
  }
  .product__short-description{
    font-size: 1.2rem;
  }
  .products-link{
    &:hover .product__short-description,
    &:focus .product__short-description{
      margin:  1.31em 0 0;
    }

    &:hover .product, 
    &:focus .product{
      grid-template-rows: 1fr 19.9em 1fr;
    }
  }
  .product{
    grid-template-rows: 1fr 26.9em 1fr;
  }
  .product__img{
    height: 26.9em;
  }
  .swiper-navigation-wrap .swiper-navigation{
    grid-gap: 0 2.6em;
    font-size: 1rem;
  }
}
@media screen and (max-width: 768px) {
  .products{
    font-size: .5rem;
  }
  .btn{
    font-size: 2.4em;
  }
  .product__name{
    font-size: 2.6em;
  }
  .swiper-slide{
    max-width: 55em;
    height: 50.4em;
  }
  .products-btns{
    margin: 5.2em auto 7.8em;
  }
  .products-link.isMobile .product{
    padding: 9.2em 3.4em;
  }

  .products-link.isMobile{
    & .product__img{
      height: 26.2em;
    }
  }
}


</style>