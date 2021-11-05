<template>
  <div class="scope">
    <div class="scope__inner">
      <Photoswipe>
        <div class="section__wrap-title container">
          <h2 class="section__title jsScopeReference" v-html="scope.title"></h2>
          <Link :routeName="'about-blog'" class="block-news__link">смотреть еще</Link>
        </div>
      
        <div class="scope__slider-container active jsScopeTarget">
          <div class="scope__hashtag hidden">{{localeScope.hashtag}}</div>        
          <h3 class="scope__title hidden">{{localeScope.title}}</h3>
          <p class="scope__text hidden">{{localeScope.text}}</p>
          
          <div class="swiper-navigation-wrap" v-if="!emptyScopeList">
            <SwiperArrow/>
          </div>

          <div class="scope__slider-wrap" >
            <div v-swiper:mySwiper="swiperOptions">
              <ul class="swiper-wrapper">
                <li class="swiper-slide" v-for="(item, index) in scope.list" :key="index">
                  <img class="scope__img"  v-pswp="item.src" :src="item.thumbnail" :alt="item.alt" loading="lazy">
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Photoswipe>
    </div>
  </div>
</template>

<script>
import Link from "@/components/utilities/Link"
export default {
  components:{
    Link
  },
  props:{
    scope: Object
  },
  data() {
    return {
      localeScope:{
        hashtag: this.scope.list[0].hashtag,
        title: this.scope.list[0].title,
        text: this.scope.list[0].text,
      },
      swiperOptions: {
        /* autoplay: {
          delay: 1500,
        }, */
        slidesPerView: 'auto',
        spaceBetween: 47,
        centeredSlides: true,
        speed: 400,
        grabCursor: true,
        navigation: {
          nextEl: '.scope .btn-navigation_next',
          prevEl: '.scope .btn-navigation_prev'
        },
        breakpoints: {
          100: {
            slidesPerView: 1,
            spaceBetween: 0
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          992: {
            slidesPerView: 1,
            spaceBetween: 20
          },
          1201: {
            slidesPerView: 'auto',
            spaceBetween: 47
          }
        }
      }
    }
  },
  computed:{
    emptyScopeList(){
      if(this.scope.list != undefined && this.scope.list.length > 1){
        return false;
      }else{
        return true;
      }
    }
  },
  mounted(){
    this.$nextTick(()=>{
      let self = this;

      this.mySwiper.on('slideChange', function () {
        let elemActive = document.querySelector('.scope__slider-container.active');

        if(elemActive != undefined || elemActive != null){
          elemActive.classList.remove('active');
        }

        setTimeout(function(){
          let elem = document.querySelector('.scope__slider-container');

          if(elem != undefined || elem != null){
            elem.classList.add('active');
          }
        }, 200)

        self.localeScope.hashtag = self.scope.list[this.activeIndex].hashtag;
        self.localeScope.title = self.scope.list[this.activeIndex].title;
        self.localeScope.text = self.scope.list[this.activeIndex].text;
      });

        
    });
  }
}

</script>

<style lang='scss' scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
.section__wrap-title{
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 2em;
  align-items: end;
}
.section__title{
  margin: 0;
  max-width: 8.03em;
}
.scope{
  background: var(--color-10);
  font-size: 1rem;
  padding: 8.4em 0 11.1em;
}
.scope__inner{
  max-width: 1470px;
  padding: 0 15px;
  margin: 0 auto;
}
.hidden{
  opacity: 0;
  visibility: hidden;
}
.active .hidden{
  opacity: 1;
  visibility: visible;
  transition: 1s;
}
.scope__hashtag{
  font-weight: 600;
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-1);
  margin: 0 0 .81em;
}
.scope__title{
  font-weight: bold;
  font-size: 2em;
  line-height: 120%;
  color: var(--color-2);
  margin: 0 0 .8em;
}
.scope__text{
  margin: 0;
  font-size: 2.4em;
  line-height: 150%;
}
.swiper-wrapper{
	min-width: 0;
	min-height: 0;
}
.scope__slider-container{
  display: grid;
  grid-template-columns: minmax(100px, 517px) minmax(100px, 830px);
  grid-template-rows: auto auto 1fr auto;
  grid-gap: 0 0.3em;
  max-width: 1330px;
  margin: 3.9em 0 0 auto;
}
.scope__slider-wrap{
  grid-column: 2;
  grid-row: 1/5;
}
.scope__hashtag{
  grid-column: 1;
}
.scope__title{
  grid-column: 1;
}
.scope__text{
  grid-column: 1;
}
.swiper-navigation-wrap{
  grid-column: 1;
  margin: 4.8em 0 0;
}

.swiper-navigation-wrap .swiper-navigation{
  justify-content: start;
}
.scope__img{
  display: block;
  max-width: 611px;  
  width: 100%;
}
.swiper-slide {
  max-width: 611px;
}
@media screen and (max-width: 1200px) {
  .swiper-slide {
    max-width: 100%;
  }
  .scope{
    font-size: .8rem;
  }
  .scope__slider-container{
    grid-template-columns: 1fr minmax(100px, 511px);    
    grid-gap: 0 2em;
  }
}
@media screen and (max-width: 992px) {
  .scope{
    font-size: .7rem;
  }
  .scope__slider-container{
    grid-template-columns: 1fr minmax(100px, 411px);
    grid-gap: 0 5em;
  }
  .scope__hashtag{
    font-size: 1.8em;
  }
}
@media screen and (max-width: 768px) {
  .scope__slider-wrap{
    grid-column: 1/3;
    grid-row: 2;
    max-width: 100%;
    margin: 1.57em 0 0;
  }
  .scope__title{
      grid-row: 1;
      margin: 0;
  }
  .swiper-navigation-wrap{
    grid-column: 2;
    margin: 0;
    grid-row: 1;
  }
  .scope__text{
    grid-column: 1/3;
    font-size: 2em;
  }
  .scope__slider-container{
    grid-template-columns: 1fr auto;
    align-items: center;
    padding: 0 15px;
  }
  .scope__hashtag{
      margin: .9em 0;
  }
  .swiper-navigation{
    grid-gap: 0 3.3em;
  }
  .scope{
    padding: 4.1em 0 3.85em;
  }
  .scope__img{
    margin: 0 auto;
  }
  .scope__inner{
    padding: 0;
  }
  .block-news__link{
    display: none;
  }
}
</style>