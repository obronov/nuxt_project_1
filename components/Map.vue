<template>
  <div class="contact-map">
    <div class="contact-map__inner">
      <div class="contact-map__points">
        <div v-if="map.caption.main_office" class="points points_main">
          {{map.caption.main_office}}
        </div>
        <div v-if="map.caption.service_centres" class="points">
          {{map.caption.service_centres}}
        </div>
      </div>
      <div class="contact-map__info">
        <div class="contact-map__title">{{map.caption.title}}</div>
        <div class="group">
          <svg class="group__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="white"/>
          </svg>
          <a :href="'tel:+' + phone.replace(/\D/g, '')" class="contact-map__link" rel="nofollow" v-for="(phone, index) in map.phone_list" :key="index">{{phone}}</a>
        </div>
        <div class="group">
          <svg class="group__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.5C3.05964 5.5 2.5 6.05964 2.5 6.75V17.75C2.5 18.4404 3.05964 19 3.75 19H19.75C20.4404 19 21 18.4404 21 17.75V6.75C21 6.05964 20.4404 5.5 19.75 5.5H3.75ZM1 6.75C1 5.23122 2.23122 4 3.75 4H19.75C21.2688 4 22.5 5.23122 22.5 6.75V17.75C22.5 19.2688 21.2688 20.5 19.75 20.5H3.75C2.23122 20.5 1 19.2688 1 17.75V6.75Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.577 7.97418C1.75963 7.6024 2.20907 7.44906 2.58085 7.63169L11.6399 12.0818C11.7095 12.1159 11.7909 12.1159 11.8604 12.0818L20.9195 7.63169C21.2913 7.44906 21.7407 7.6024 21.9233 7.97418C22.106 8.34596 21.9526 8.79539 21.5808 8.97802L12.5217 13.4281C12.0351 13.6671 11.4652 13.6671 10.9786 13.4281L1.91949 8.97802C1.54771 8.79539 1.39437 8.34596 1.577 7.97418Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.3679 12.3773C15.293 12.3229 15.1942 12.3144 15.1111 12.3551L12.5201 13.6247C12.0343 13.8627 11.4658 13.8627 10.98 13.6247L8.38905 12.3551C8.30593 12.3144 8.2071 12.3229 8.13218 12.3773L2.19065 16.6904C1.85544 16.9337 1.38645 16.8593 1.14311 16.5241C0.899779 16.1888 0.974255 15.7199 1.30946 15.4765L7.251 11.1634C7.77538 10.7827 8.46719 10.723 9.04908 11.0081L11.64 12.2777C11.7094 12.3117 11.7907 12.3117 11.8601 12.2777L14.451 11.0081C15.0329 10.723 15.7247 10.7827 16.2491 11.1634L22.1906 15.4765C22.5259 15.7199 22.6003 16.1888 22.357 16.5241C22.1137 16.8593 21.6447 16.9337 21.3095 16.6904L15.3679 12.3773Z" fill="white"/>
          </svg>
          <a :href="'mailto:' + email" class="contact-map__link" rel="nofollow" v-for="(email, index) in map.email_list" :key="'email' + index">{{email}}</a>
        </div>
      </div>    
    </div>
    <client-only>
      <div class="contact-map__map">
        <div class='contact-map__map-inner'>
            <yandex-map 
            :coords="coords" 
            :zoom="17" 
            :settings="settings"
            :controls= []
            :show-all-markers="true"
            >
              <ymap-marker  v-for="(item, index) in map.coordinates" 
              :marker-id="index" 
              :coords="item.coords" 
              :key="'main' + index" 
              :icon=" item.label == 'main'? iconMain : iconDefault"/>
            </yandex-map>
          </div>
      </div>
    </client-only>
  </div>
</template>

<script>

export default {
  props:{
    map: Object
  },
  data() {
    return {
      center: [56.052524903725796,92.89133958993524],
      coords: [56.052524903725796,92.89133958993524],
      settings:{
        lang: 'ru_RU',
      },
      iconDefault: {
        layout: 'default#imageWithContent',
        imageHref: require('~/assets/images/design/icon_map_default.svg'),
        imageSize: [26, 30],
        imageOffset: [0, 0],
        content: '',
        contentOffset: [0, 15],
        contentLayout: ''
      },
      iconMain: {
        layout: 'default#imageWithContent',        
        imageHref: require('~/assets/images/design/icon_map_main.svg'),
        imageSize: [26, 30],
        imageOffset: [0, 0],
        content: '',
        contentOffset: [0, 15],
        contentLayout: ''
      }
    }
  }
}


</script>

<style lang='scss' scoped>
.contact-map__inner {
  position: relative;
  max-width: 1250px;
  padding: 0 15px;
  margin: 0 auto;
}
.contact-map{
  position: relative;
  font-size: 1rem;
}
.contact-map__map-inner {
  height: 48.4em;
  overflow: hidden;
}
.ymap-container{
  height: 100%;
}
.contact-map__points{
  position: absolute;
  top: 0;
  left: 15px;
  background: #FFFFFF;
  box-shadow: 2px 3px 15px rgba(186, 161, 146, 0.25);
  padding: 2.2em 1.9em 1.5em;
  max-width: 200px;
  z-index: 10;
}
.points{
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-2);
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 .9em;
  align-items: center;
  margin: 0 0 .9375em;  
  &:before{
    content: '';
    display: block;
    width: 1.625em;
    height: 1.875em;
    background: url('~/assets/images/design/icon_map_default.svg') no-repeat;    
    background-size: contain;
  }
  &:last-of-type{
    margin: 0;
  }
}
.points_main:before{
  background: url('~/assets/images/design/icon_map_main.svg') no-repeat;
  background-size: contain;
}
.contact-map__info{
  position: absolute;
  top: 0;
  right: 0;
  background: rgba(65, 63, 62, 0.9);
  border-radius: .4em;
  padding: 2.3em 1.7em 3.3em;
  z-index: 10;
}
.contact-map__title{
  font-size: 2.4em;
  line-height: 150%;
  color: var(--color-7);
  margin: 0 0 0.58em;
}
.contact-map__link, .contact-map__link:visited{
  text-decoration: none;
  font-size: 2.4em;
  line-height: 150%;
  color: var(--color-7);
  display: block;
  margin: 0 0 .33em;
  &:last-of-type{
    margin: 0;
  }
}
.group{
  position: relative;
  padding: 0 0 0 4.1em;
}
.group__icon{
  position: absolute;
  top: .6em;
  left: 0;
  display: block;
  width: 2.4em;
  height: 2.4em;
}
@media screen and (max-width: 1100px) {
  .contact-map{
      font-size: 0.8rem;
  }
  .contact-map__map-inner{
    max-height: 40em;
    height: 50vh;
  }
}
@media screen and (max-width: 768px) {
  .contact-map{
      font-size: 0.6rem;
  }
  .contact-map__inner{
    padding: 0;
  }
  .contact-map__points {
    position: static;
    display: flex;
    flex-flow: row wrap;
    max-width: 100%;
  }
  .points{
    margin: 0 1.6em 0 0;
    font-size: 2.2em;
  }
}
@media screen and (max-width: 650px){
  .contact-map{
    font-size: 0.5rem;
  }
  .points{
    font-size: 2em;
    grid-gap: 0 0.4em;
  }
  .contact-map__points{
    padding: 1em 2.6em;
  }
  .contact-map__title{
    font-size: 2em;
    margin: 0 0 1em;
  }
  .contact-map__link, 
  .contact-map__link:visited {
    font-size: 2em;
  }
  .group__icon {
    width: 1.8em;
    height: 1.8em;
  }
  .group {
    padding: 0 0 0 2.5em;
  }
  .contact-map__info{
    padding: 1em 1.7em 2.2em;
  }
}
</style>