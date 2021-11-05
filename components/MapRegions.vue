<template>
  <section class="regions" id="regions">
    <div class="container">
      <h2 class="section__title" v-html="map.title"></h2>
    </div>
    <div class="map-tab">
      <div class="zone-list-wrap" v-swiper:mySwiperZone="swiperOptionsZone">
        <ul class="zone-list swiper-wrapper">
          <li class="zone-list__item swiper-slide" :class="{active: item.active}" v-for="(item, index) in mapLocal" :key="'reg' + index">
            <button class="btnRegion" :class="{active: item.active}" type="button" @click="setZone(item)">{{item.title}}</button>
          </li>
        </ul>
      </div>
      <div class="city-list">
        <button class='prev' type="button">
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.6415 4.88672L11.8679 18.1509L21.6415 31.415" stroke-width="2"/>
          </svg>
        </button>
        <div v-swiper:mySwiper="swiperOptions">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in currentRegion" :key="'city' + index">
              <button class="btnCity" type="button" @click="setCity(item)">{{item.name}}</button>
            </div>
          </div>
        </div>
        <button class='next' type="button">
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.3585 4.88672L25.1321 18.1509L15.3585 31.415" stroke-width="2"/>
          </svg>
        </button>
      </div>
    </div>
    <div class='map'>
        <yandex-map 
        :center="center" 
        :coords="center" 
        :zoom="zoom" 
        :settings="settings"
        :controls= []
        :show-all-markers="showAllMarkers"
        >
          <ymap-marker  v-for="(item, index) in currentRegion" 
          :marker-id="index" 
          :coords="item.coords" 
          :key="index" 
          :icon="item.icon == true ? icon : {}"/>
        </yandex-map>
      </div>
  </section>
</template>

<script>

export default {  
  props:{
    map: Object
  },
  data() {
    return {
      center: [56.052524903725796,92.89133958993524],
      currentRegion: this.map.regions[0].list,
      zoom: 17,
      showAllMarkers: true,
      icon: {
        layout: 'default#imageWithContent',
        imageHref: require('~/assets/images/design/icon_map_default.svg'),
        imageSize: [26, 30],
        imageOffset: [0, 0],
        content: '',
        contentOffset: [0, 15],
        contentLayout: ''
      },
      settings:{
        lang: 'ru_RU',
      },
      swiperOptionsZone: {
        slidesPerView: 2,
        spaceBetween: 0,
        freemode: true,
        speed: 400,
        grabCursor: true
      },
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freemode: true,
        speed: 400,
        grabCursor: true,
        navigation: {
          nextEl: '.city-list .next',
          prevEl: '.city-list .prev'
        }
      }
    }
  },
  methods:{
    setHeight(){

      function setHeight(){
        let item = document.querySelectorAll('.zone-list__item');
        let height = 0;

        for (const key in item) {
          if (Object.hasOwnProperty.call(item, key)) {
            const element = item[key].children[0];
            
            if(height < element.clientHeight){
              height = element.clientHeight;
            }
          }
        }

        for (const key in item) {
          if (Object.hasOwnProperty.call(item, key)) {
            const element = item[key].children[0];
            element.style.minHeight = height + 'px';
            
          }
        }
      }
      
      setHeight();

      window.addEventListener('resize', function(){
        setHeight();
      });

    },
    setZone(item){
      this.currentRegion = item.list;
      this.showAllMarkers = true;


      for (const key in this.mapLocal) {
        if (Object.hasOwnProperty.call(this.mapLocal, key)) {
          const element = this.mapLocal[key];          
          element.active = false;
        }
      }

      for (const key in this.currentRegion) {
        if (Object.hasOwnProperty.call(this.currentRegion, key)) {
          const element = this.currentRegion[key];          
          element.icon = false;
        }
      }

      item.active = true;
    },
    setCity(item){
      this.center = item.coords;

      for (const key in this.currentRegion) {
        if (Object.hasOwnProperty.call(this.currentRegion, key)) {
          const element = this.currentRegion[key];          
          element.icon = false;
        }
      }

      item.icon = true;
      
    }
  },
  computed:{
    mapLocal(){
      let regions = {}
       for (const key in this.map.regions) {
        if (Object.hasOwnProperty.call(this.map.regions, key)) {
          const element = this.map.regions[key];          
          if(key == 0){
            element.active = true;
          }else{
            element.active = false;
          }
          
          regions[key] = element;
        }
      }

      return regions;
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.setHeight();
    });
  }
}

</script>

<style lang='scss' scoped>
.regions{
  font-size: 1rem;
  overflow: hidden;  
  margin: 12em 0 0;
}
.map {
  height: 55.4em;
  overflow: hidden;
}
.ymap-container{
  height: 100%;
}
.map-tab{
  box-shadow: 0px 2px 18px rgba(0, 0, 0, 0.15);
  margin: 0 auto -5.5em;
  position: relative;
  z-index: 10;
  background: #FFFFFF;
  max-width: 1250px;
}
.zone-list-wrap{
  overflow: hidden;  
  border-bottom: 1px solid var(--color-5);
}
.zone-list{
  margin: 0;
  font-size: 1em;
}
.zone-list__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.btnRegion{
  font-weight: bold;
  font-size: 2em;
  background: var(--color-5);
  border-radius: 0 0 0.2em 0.2em;
  border: none;
  color: var(--color-7);
  display: block;
  width: 100%;
  font-weight: bold;
  line-height: 120%;
  padding: 1.55em;
  transition: .3s;
  outline: none;
  &:hover,
  &:focus,
  &.active{
    background: var(--color-7);
    color: var(--color-2);
  }
}
.btnCity{
  font-size: 2.4em;
  line-height: 150%;
  color: var(--color-2);
  border: none;
  background: transparent;
  padding: 0 .45em;
  display: block;
  margin: 0 auto;
  border-radius: .166em;
  transition: .3s;
  outline: none;
  &:hover,
  &:focus{
    background: var(--color-5);
    color: var(--color-7);
  }
}
.city-list{
  padding: 3.5em 4.7em;
  position: relative;
}
.city-list .prev,
.city-list .next{
  border: none;
  padding: 0;
  background: none;
  width: 3.7em;
  height: 3.7em;
  z-index: 10;
  position: absolute;
  top: calc(50% - 1.8em);
  font-size: 1em;
}
.city-list .prev svg,
.city-list .next svg{
  display: block;
  width: 100%;
  height: 100%;
}
.city-list .prev.swiper-button-disabled,
.city-list .next.swiper-button-disabled{
  opacity: 0;
  visibility: hidden;
}
.city-list .prev{
  left: 0;
}
.city-list .next{
  right: 0;
}
.city-list .prev svg path,
.city-list .next svg path{
  stroke: #2F2D2C;
}
.city-list .swiper-wrapper{
  align-items: center;
}
.city-list .swiper-slide{
  max-width: 20em;
}
@media screen and (max-width: 1200px) {
  .regions{
    font-size: .8rem;
  }
  .map-tab {
    margin: 0 auto;
  }
  .map{
    height: 60vh;
    max-height: 55.4em;
  }
}
@media screen and (max-width: 992px) {
  .regions{
    font-size: .6rem;
  }
}
@media screen and (max-width: 768px) {
  .regions{
    font-size: .6rem;
    margin: 5.5em 0 0;
  }
  .btnRegion{
    padding: 1em;
  }
  .zone-list-wrap{
    border-bottom: none;
  }
  .btnCity{
      font-size: 2em;
  }
  .city-list{
    padding: 2em 4.7em;
  }
  .city-list .prev{
    left: .5em;
  }
  .city-list .next{
    right: .5em;
  }
}
@media screen and (max-width: 576px) {
  .btnRegion{
    padding: .33em;
  }
}
</style>