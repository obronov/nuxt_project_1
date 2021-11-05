<template>
  <div class='header'>
    <div class="header__inner container">
      <div class="header-desktop" v-if="$device.isDesktop">
        <NuxtLink class="header-desktop__logo" :to="'/' + langSite">
          <img class="header-desktop__logo-img" :src="common.logo_img" :alt="getAlt">
        </NuxtLink>
        <nav class="nav-desktop">
          <ul class="nav-desktop__items">
            <li class="nav-desktop__item" v-for="(item, index) in common.top_menu" :key="index">
              <NuxtLink class="header-desktop__link" :to="item.link">{{item.name}}</NuxtLink>
              <ul class="nav-desktop__items-submenu" v-if="item.submenu !== undefined && item.submenu.length > 0">
                <li class="nav-desktop__item-submenu" v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                  <NuxtLink class="header-desktop__link-submenu" :class="{'notImg': !subItem.img}" :to="subItem.link">
                    <span>{{subItem.name}}</span>
                    <img v-if="subItem.img" :src="subItem.img" :alt="subItem.name">
                  </NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div class="header-desktop__lang-login">
          <div class="header-desktop-lang">
            <div class="header-desktop-lang__selected">
              <img v-if="$store.state.lang == 'en'" :src="require('~/assets/images/design/en.png')" alt="en">
              <img v-else :src="require('~/assets/images/design/ru.png')" alt="ru">
              <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89861 0.101387C9.0338 0.236569 9.0338 0.455743 8.89861 0.590925L4.74474 4.74479C4.60956 4.87998 4.39039 4.87998 4.2552 4.74479L0.101334 0.590925C-0.0338478 0.455743 -0.0338478 0.236569 0.101334 0.101387C0.236517 -0.0337955 0.45569 -0.0337955 0.590873 0.101387L4.49997 4.01049L8.40908 0.101387C8.54426 -0.0337956 8.76343 -0.0337956 8.89861 0.101387Z"/>
              </svg>
            </div>
            <ul class="desktop-lang-list">
              <li class="desktop-lang-list__item" v-for="(lang, langIndex) in langList" :key="langIndex">
                <a class="desktop-lang-list__link" :href="`/${lang}`">
                  <img v-if="lang == 'en'" :src="require('~/assets/images/design/en.png')" alt="en">
                  <img v-else :src="require('~/assets/images/design/ru.png')" alt="ru">
                </a>
              </li>
            </ul>
          </div>
          <div class="header-desktop-login" v-if="$store.state.lang == 'ru'">
            <NuxtLink to="/auth" v-if="!$store.state.authToken" rel="nofollow noopener">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 15.3916C16.5913 15.3916 18.1174 14.7595 19.2426 13.6342C20.3679 12.509 21 10.9829 21 9.3916C21 7.8003 20.3679 6.27418 19.2426 5.14896C18.1174 4.02374 16.5913 3.3916 15 3.3916C13.4087 3.3916 11.8826 4.02374 10.7574 5.14896C9.63214 6.27418 9 7.8003 9 9.3916C9 10.9829 9.63214 12.509 10.7574 13.6342C11.8826 14.7595 13.4087 15.3916 15 15.3916ZM19 9.3916C19 10.4525 18.5786 11.4699 17.8284 12.22C17.0783 12.9702 16.0609 13.3916 15 13.3916C13.9391 13.3916 12.9217 12.9702 12.1716 12.22C11.4214 11.4699 11 10.4525 11 9.3916C11 8.33074 11.4214 7.31332 12.1716 6.56317C12.9217 5.81303 13.9391 5.3916 15 5.3916C16.0609 5.3916 17.0783 5.81303 17.8284 6.56317C18.5786 7.31332 19 8.33074 19 9.3916ZM27 25.3916C27 27.3916 25 27.3916 25 27.3916H5C5 27.3916 3 27.3916 3 25.3916C3 23.3916 5 17.3916 15 17.3916C25 17.3916 27 23.3916 27 25.3916ZM25 25.3836C24.998 24.8916 24.692 23.4116 23.336 22.0556C22.032 20.7516 19.578 19.3916 15 19.3916C10.42 19.3916 7.968 20.7516 6.664 22.0556C5.308 23.4116 5.004 24.8916 5 25.3836H25Z"/>
              </svg>
            </NuxtLink>
            <div class="header-desktop-logout" v-if="$store.state.authToken">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 15.3916C16.5913 15.3916 18.1174 14.7595 19.2426 13.6342C20.3679 12.509 21 10.9829 21 9.3916C21 7.8003 20.3679 6.27418 19.2426 5.14896C18.1174 4.02374 16.5913 3.3916 15 3.3916C13.4087 3.3916 11.8826 4.02374 10.7574 5.14896C9.63214 6.27418 9 7.8003 9 9.3916C9 10.9829 9.63214 12.509 10.7574 13.6342C11.8826 14.7595 13.4087 15.3916 15 15.3916ZM19 9.3916C19 10.4525 18.5786 11.4699 17.8284 12.22C17.0783 12.9702 16.0609 13.3916 15 13.3916C13.9391 13.3916 12.9217 12.9702 12.1716 12.22C11.4214 11.4699 11 10.4525 11 9.3916C11 8.33074 11.4214 7.31332 12.1716 6.56317C12.9217 5.81303 13.9391 5.3916 15 5.3916C16.0609 5.3916 17.0783 5.81303 17.8284 6.56317C18.5786 7.31332 19 8.33074 19 9.3916ZM27 25.3916C27 27.3916 25 27.3916 25 27.3916H5C5 27.3916 3 27.3916 3 25.3916C3 23.3916 5 17.3916 15 17.3916C25 17.3916 27 23.3916 27 25.3916ZM25 25.3836C24.998 24.8916 24.692 23.4116 23.336 22.0556C22.032 20.7516 19.578 19.3916 15 19.3916C10.42 19.3916 7.968 20.7516 6.664 22.0556C5.308 23.4116 5.004 24.8916 5 25.3836H25Z"/>
              </svg>
              <div class="header-desktop-logout__inner">                
                <NuxtLink  class="header-desktop-link" to="/lk/profile" rel="nofollow noopener">Личный кабинет</NuxtLink> 
                <button class="header-desktop-link" @click="logOut" type="button">{{getLogOutName}}</button>
              </div>
            </div>            
          </div>
        </div>
        <div class="header-desktop__contact">
          <a class="header-desktop__contact-link" v-if="common.phone" rel="nofollow noopener" :href="`tel:+${common.phone.replace(/\D/g, '')}`">
            <span>{{common.phone}}</span>
          </a>
          <span class="header-desktop__wrap-btnCall">
            <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.89861 0.101387C9.0338 0.236569 9.0338 0.455743 8.89861 0.590925L4.74474 4.74479C4.60956 4.87998 4.39039 4.87998 4.2552 4.74479L0.101334 0.590925C-0.0338478 0.455743 -0.0338478 0.236569 0.101334 0.101387C0.236517 -0.0337955 0.45569 -0.0337955 0.590873 0.101387L4.49997 4.01049L8.40908 0.101387C8.54426 -0.0337956 8.76343 -0.0337956 8.89861 0.101387Z"/>
            </svg>

            <button class="header-desktop__btnCall" v-if="common.btn_name" type="button" @click="showModalCall()">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.81556 6.05889C3.93556 8.26 5.74 10.0567 7.94111 11.1844L9.65222 9.47333C9.86222 9.26333 10.1733 9.19333 10.4456 9.28667C11.3167 9.57444 12.2578 9.73 13.2222 9.73C13.65 9.73 14 10.08 14 10.5078V13.2222C14 13.65 13.65 14 13.2222 14C5.91889 14 0 8.08111 0 0.777778C0 0.35 0.35 0 0.777778 0H3.5C3.92778 0 4.27778 0.35 4.27778 0.777778C4.27778 1.75 4.43333 2.68333 4.72111 3.55444C4.80667 3.82667 4.74444 4.13 4.52667 4.34778L2.81556 6.05889Z"/>
              </svg>
              {{common.btn_name}}
            </button>
          </span>
          <a class="header-desktop__contact-link header-desktop__contact-link_email" v-if="common.email" rel="nofollow noopener" :href="`mailto:${common.email}`">{{common.email}}</a>
        </div>

      </div>
      <div class="header-mobile" v-if="!$device.isDesktop">
        <NuxtLink class="header-mobile__logo" :to="'/' + langSite">
          <img class="header-mobile__logo-img" :src="common.logo_img" :alt="getAlt">
        </NuxtLink>
        <button class="header-mobile__btnMenu" :class="{active: showMenuMobile}" type="button" @click="showMenuMobile = !showMenuMobile">
          <svg v-if="!showMenuMobile" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="4.5" y1="5.5" x2="25.5" y2="5.5"  stroke-width="3" stroke-linecap="round"/>
            <line x1="4.5" y1="13.5" x2="25.5" y2="13.5"  stroke-width="3" stroke-linecap="round"/>
            <line x1="4.5" y1="21.5" x2="25.5" y2="21.5"  stroke-width="3" stroke-linecap="round"/>
          </svg>
          <svg v-if="showMenuMobile" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.0507 12L0 22.0507L1.94928 24L12 13.9493L22.0507 24L24 22.0507L13.9493 12L24 1.94928L22.0507 0L12 10.0507L1.94928 0L0 1.94928L10.0507 12Z" fill="white"/>
          </svg>
        </button>
        <transition name="mobile-menu">
          <div class="mobile-menu" v-if="showMenuMobile">
            <div class="mobile-menu__header">              
              <div class="header-mobile-login" v-if="$store.state.lang == 'ru'">
                <NuxtLink class="header-mobile-login_link" to="/auth" v-if="!$store.state.authToken" rel="nofollow noopener">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 15.3916C16.5913 15.3916 18.1174 14.7595 19.2426 13.6342C20.3679 12.509 21 10.9829 21 9.3916C21 7.8003 20.3679 6.27418 19.2426 5.14896C18.1174 4.02374 16.5913 3.3916 15 3.3916C13.4087 3.3916 11.8826 4.02374 10.7574 5.14896C9.63214 6.27418 9 7.8003 9 9.3916C9 10.9829 9.63214 12.509 10.7574 13.6342C11.8826 14.7595 13.4087 15.3916 15 15.3916ZM19 9.3916C19 10.4525 18.5786 11.4699 17.8284 12.22C17.0783 12.9702 16.0609 13.3916 15 13.3916C13.9391 13.3916 12.9217 12.9702 12.1716 12.22C11.4214 11.4699 11 10.4525 11 9.3916C11 8.33074 11.4214 7.31332 12.1716 6.56317C12.9217 5.81303 13.9391 5.3916 15 5.3916C16.0609 5.3916 17.0783 5.81303 17.8284 6.56317C18.5786 7.31332 19 8.33074 19 9.3916ZM27 25.3916C27 27.3916 25 27.3916 25 27.3916H5C5 27.3916 3 27.3916 3 25.3916C3 23.3916 5 17.3916 15 17.3916C25 17.3916 27 23.3916 27 25.3916ZM25 25.3836C24.998 24.8916 24.692 23.4116 23.336 22.0556C22.032 20.7516 19.578 19.3916 15 19.3916C10.42 19.3916 7.968 20.7516 6.664 22.0556C5.308 23.4116 5.004 24.8916 5 25.3836H25Z"/>
                  </svg>
                </NuxtLink>
                <div class="header-mobile-logout" v-if="$store.state.authToken">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 15.3916C16.5913 15.3916 18.1174 14.7595 19.2426 13.6342C20.3679 12.509 21 10.9829 21 9.3916C21 7.8003 20.3679 6.27418 19.2426 5.14896C18.1174 4.02374 16.5913 3.3916 15 3.3916C13.4087 3.3916 11.8826 4.02374 10.7574 5.14896C9.63214 6.27418 9 7.8003 9 9.3916C9 10.9829 9.63214 12.509 10.7574 13.6342C11.8826 14.7595 13.4087 15.3916 15 15.3916ZM19 9.3916C19 10.4525 18.5786 11.4699 17.8284 12.22C17.0783 12.9702 16.0609 13.3916 15 13.3916C13.9391 13.3916 12.9217 12.9702 12.1716 12.22C11.4214 11.4699 11 10.4525 11 9.3916C11 8.33074 11.4214 7.31332 12.1716 6.56317C12.9217 5.81303 13.9391 5.3916 15 5.3916C16.0609 5.3916 17.0783 5.81303 17.8284 6.56317C18.5786 7.31332 19 8.33074 19 9.3916ZM27 25.3916C27 27.3916 25 27.3916 25 27.3916H5C5 27.3916 3 27.3916 3 25.3916C3 23.3916 5 17.3916 15 17.3916C25 17.3916 27 23.3916 27 25.3916ZM25 25.3836C24.998 24.8916 24.692 23.4116 23.336 22.0556C22.032 20.7516 19.578 19.3916 15 19.3916C10.42 19.3916 7.968 20.7516 6.664 22.0556C5.308 23.4116 5.004 24.8916 5 25.3836H25Z"/>
                  </svg>
                  <div class="header-mobile-logout__inner">
                    <NuxtLink  class="header-mobile-link" to="/lk/profile" rel="nofollow noopener">Личный кабинет</NuxtLink> 
                    <button class="header-mobile-link" @click="logOut" type="button">{{getLogOutName}}</button>
                  </div>
                </div>            
              </div>
              <div class="header-mobile-lang">
                <div class="header-mobile-lang__selected">
                  <img v-if="$store.state.lang == 'en'" :src="require('~/assets/images/design/en.png')" alt="en">
                  <img v-else :src="require('~/assets/images/design/ru.png')" alt="ru">
                </div>
                <ul class="mobile-lang-list">
                  <li class="mobile-lang-list__item" v-for="(lang, langIndex) in langList" :key="langIndex">
                    <a class="mobile-lang-list__link" :href="`/${lang}`">
                      <img v-if="lang == 'en'" :src="require('~/assets/images/design/en.png')" alt="en">
                      <img v-else :src="require('~/assets/images/design/ru.png')" alt="ru">
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <nav class="nav-mobile">
              <ul class="nav-mobile__items">
                <li class="nav-mobile__item" 
                v-for="(item, index) in common.top_menu" 
                :key="index"
                :class="{'isFull': item.submenu !== undefined && item.submenu.length > 0}"
                >
                  <NuxtLink class="header-mobile__link" :to="item.link">{{item.name}}</NuxtLink>
                  <ul class="nav-mobile__items-submenu" v-if="item.submenu !== undefined && item.submenu.length > 0">
                    <li class="nav-mobile__item-submenu" v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                      <NuxtLink class="header-mobile__link-submenu" :to="subItem.link">{{subItem.name}}</NuxtLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>  
            <div class="mobile-menu__footer">
              <a class="header-mobile__contact-link header-mobile__contact-link_email" v-if="common.email" rel="nofollow noopener" :href="`mailto:${common.email}`">
                <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.345 14.6416H22.7246L21.6654 13.7577L16.7032 9.61687L16.98 9.3862L22.1799 13.7195L23 14.4029V13.3354V2.39785V1.33408L22.1809 2.01288L12.6185 9.93781C12.6185 9.93783 12.6185 9.93785 12.6184 9.93788C12.435 10.0898 12.1705 10.1863 11.88 10.1863C11.5895 10.1863 11.3249 10.0898 11.1415 9.93781L1.81918 2.20673L1 1.52738V2.5916V13.4166V14.5079L1.8265 13.7953L6.9261 9.39847L7.21376 9.62986L2.41857 13.7629L1.39904 14.6416H2.745H21.345ZM2.4825 1.1416H1.09637L2.16332 2.02647L11.5608 9.82022L11.8799 10.0848L12.199 9.82034L21.604 2.02659L22.672 1.1416H21.285H2.4825ZM1.5 0.891602H22.5C22.7917 0.891602 23.0571 0.988955 23.2406 1.14183C23.4214 1.29249 23.5 1.47517 23.5 1.6416V14.1416C23.5 14.308 23.4214 14.4907 23.2406 14.6414C23.0571 14.7942 22.7917 14.8916 22.5 14.8916H1.5C1.20829 14.8916 0.94288 14.7942 0.759432 14.6414C0.578643 14.4907 0.5 14.308 0.5 14.1416V1.6416C0.5 1.47517 0.578643 1.29249 0.759432 1.14183C0.94288 0.988955 1.20829 0.891602 1.5 0.891602Z" fill="white" stroke="#2F2D2C"/>
                </svg>
                <span>{{common.email}}</span>
              </a>
              <a class="header-mobile__contact-link" v-if="common.phone" rel="nofollow noopener" :href="`tel:+${common.phone.replace(/\D/g, '')}`">{{common.phone}}</a>
              <button class="header-mobile__btnCall" v-if="common.btn_name" type="button" @click="showModalCall()">{{common.btn_name}}</button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global";

export default {  
  mixins: [global],
  data(){
    return{
      common: this.$store.state.common,
      /* common: {}, */
      showMenuMobile: false
    }
  },
  async fetch() {
    /* try {
      this.common = await fetch(process.env.fakeUrl + 'common')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    } */
  },
  watch:{
    $route(){
      this.showMenuMobile = false;
    }
  },
  methods:{
    logOut(){
      this.$cookies.remove('authToken');
      this.$store.commit('logOut');
      window.location.href = '/';
    }
  },
  computed:{
    langList(){
      let list = ['en', 'ru'];
      let currentLang = this.$store.state.lang;
      let newList = [];

      list.forEach(element => {
        if(element != currentLang){
          if(element != 'ru'){
            newList.push(element);
          }else{
            newList.push('');
          }          
        }
      });
      
      return newList;
    },
    langSite(){
       let lang = '';
      if(this.$store.state.lang !== ''){
        lang = this.$store.state.lang;
      }

      if(this.$store.state.lang == 'ru'){
        lang = '';
      }

      return lang;
    },
    getLogOutName(){
      let alt = 'Выйти';

      if(this.$store.state.lang == 'en'){
        alt = 'log out';
      }

      return alt;
    },
    getAlt(){
      let alt = 'логотип';

      if(this.$store.state.lang == 'en'){
        alt = 'the logo';
      }

      return alt;
    }
  }
}

</script>

<style lang='scss' scoped>
.header{
  background: var(--color-4);
}
.header-desktop{
  font-size: 1rem;
  display: grid;
  grid-template-columns: 2fr 7fr 1fr 2fr;
  grid-gap: 0 2em;
  align-items: center;  
  padding: 3.1em 0 3.4em;
}
.header-desktop__logo-img,
.header-mobile__logo-img{
  display: block;
  max-width: 123px;
}
.nav-desktop__items{
  margin: 0;
  padding: 0;
  font-size: 1em;
  display: flex;
  flex-flow: row wrap;
}
.nav-desktop__item{
  margin: 0;
  padding: 0;
  &::before{
    display: none;
  }
  &:hover .nav-desktop__items-submenu,
  &:focus .nav-desktop__items-submenu{
    opacity: 1;
    visibility: visible;
  }
}
.header-desktop__link, .header-desktop__link:visited{
  font-weight: 600;
  font-size: 1.4em;
  line-height: 17px;
  text-transform: uppercase;
  color: var(--color-7);
  text-decoration: none;
  margin: 0 1.85em 0 0;
  padding: .78em 0;
  display: block;
  &.nuxt-link-exact-active{
    text-decoration: underline;
  }
}
.nav-desktop__items-submenu{
  margin: 0;
  padding: 0 4.2em 4.9em 2.4em;
  font-size: 1em;
  background: #8A8E92;
  border-radius: .4em;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 10;
  max-width: 44em;
  width: 100vw;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
  z-index: 20;
}
.nav-desktop__item-submenu{
  padding: 4em 0 0;
  margin: 0;
  &::before{
    display: none;
  }
}
.header-desktop__link-submenu, 
.header-desktop__link-submenu:visited{
  font-weight: normal;
  font-size: 2.4em;
  line-height: 121%;
  color: var(--color-7);
  text-decoration: none;
  border-bottom: 1px solid var(--color-7);
  padding: .41em 4.65em .41em .54em;
  position: relative;
  display: block;
  &.notImg{
    padding: .41em 0 .41em .54em;
  }
  & img{
    opacity: 0;
    visibility: hidden;
    border-radius: .16em;
    transition: .3s;
    display: block;
    position: absolute;
    bottom: -0.7em;
    right: -1em;    
    max-width: 5.29em;
    will-change: transform;
    transform: translate3d(2em, 0, 0);
    padding: 0.1em 0.3em;
    background: var(--color-7);
  }
  &:hover img,
  &:focus img{
    opacity: 1;
    visibility: visible;
    transform: translate3d(0, 0, 0);
  }
  &:hover,
  &:focus{
    font-weight: bold;
  }
}
.header-desktop__contact{
  margin: -.3em 0;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0 .5em;
  align-items: center;
  justify-items: end;
}
.header-desktop__contact-link, 
.header-desktop__contact-link:visited{
  font-weight: normal;
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-7);
  text-decoration: none;
  margin: .18em 0;
}
.header-desktop__contact-link_email{
  grid-row: 2;
  grid-column: 1/3;
}
.header-desktop__wrap-btnCall{
  position: relative;
  width: 1.5em;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  & svg{
    display: block;
    width: .9em;
    height: .5em;
     fill: var(--color-7);
  }
  &:hover .header-desktop__btnCall{
    opacity: 1;
    visibility: visible;
  }
}
.header-desktop__btnCall{
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-7);
  opacity: 0;
  visibility: hidden;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 .31em;
  align-items: center;
  padding: 1em .81em;
  background: #8A8E92;
  box-shadow: 2px 3px 15px rgba(186, 161, 146, 0.25);
  border-radius:.25em;
  transition: .3s;
  position: absolute;
  top: 100%;
  right: 0;
  border: none;
  z-index: 10;
  white-space: nowrap; 
  &:hover,
  &:focus{
    color: var(--color-1)
  }
  &:hover svg,
  &:focus svg{
    fill: var(--color-1)
  }
  &  svg{
    display: block;
    width: .875em;
    height: .875em;
    fill: var(--color-7);
    transition: .3s;
  }
}
.desktop-lang-list{
  margin: 0;
  padding: 1.3em .9em;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 0 1.4em;
  justify-content: space-between;
  background: #8A8E92;
  box-shadow: 2px 3px 15px rgba(186, 161, 146, 0.25);
  border-radius: .4em;
  font-size: 1rem;
  align-items: center;
  position: absolute;
  top: 100%;
  right: 0;
  width: 11.7em;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
}
.desktop-lang-list__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.desktop-lang-list__link img{
  display: block;
  max-width: 100%;
}
.header-desktop-lang{
  position: relative;
  &:before{
    content: '';
  }
  &:hover .desktop-lang-list,
  &:focus .desktop-lang-list{
    opacity: 1;
    visibility: visible;
  }
}
.header-desktop__lang-login{
  display: inline-grid;
  grid-gap: 0 1.4em;
  grid-template-columns: auto auto;
  align-items: center;
}
.header-desktop-lang__selected{
  display: inline-grid;
  grid-template-columns: auto auto;
  grid-gap: 0 .85em;
  align-items: center;
  padding: .8em 0;
  & svg{
    fill: #fff;
  }
}
.header-desktop-login{
  display: block;
  padding: .8em 0;
  & svg{
    display: block;
    fill:  var(--color-7);
    width: 3em;
    height: 3em;
  }
}
.header-desktop-logout{
  display: block;
  position: relative;
  padding: .8em 0;
  & svg{
    display: block;
    fill:  var(--color-1);
    width: 3em;
    height: 3em;
  }
  &:hover .header-desktop-logout__inner,
  &:focus .header-desktop-logout__inner{
    opacity: 1;
    visibility: visible;
  }
}
.header-desktop-logout__inner{
  opacity: 0;
  visibility: hidden;
  transition: .3s;
  position: absolute;
  top: 100%;
  right: 0;
  background: #8A8E92;
  box-shadow: 2px 3px 15px rgba(186, 161, 146, 0.25);
  border-radius: 4px;
  padding: 1em .8em;
  z-index: 10;
  width: 15em;
  z-index: 20;
}
.header-desktop-link,
.header-desktop-link,
.header-desktop-link:visited{
  display: block;
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-7);
  padding: 0;
  border: none;
   text-decoration: none;
   background: none;
   margin: 0 0 .5em;
  &:hover,
  &:focus{
    text-decoration: underline;
  }
  &:last-child{
    margin: 0;
  }
}

.header-mobile{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;  
  padding: 1.4em 0;
  position: relative;
  &:after{
    content: '';
    display: block;
    width: calc(100% + 30px);
    height: 1px;
    background: var(--color-3);
    position: absolute;
    bottom: 0;
    left: -15px;
  }
}
.header-mobile__btnMenu{
  border: none;
  padding: 0;
  width: 3em;
  height: 3em;
  background: none;
  font-size: 1em;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  & svg{
    display: block;
    width: 100%;
    height: 100%;
    stroke: var(--color-7)
  }
  &.active svg{
    width: 80%;
    height: 80%;
  }
}
.desktop-lang-list__link{
  display: block;
  & img{
    display: block;
    max-width: 100%;
  }
}
.mobile-menu{
  position: absolute;
  top: 100%;
  right: -15px;
  background: var(--color-7);
  width: calc(100% + 15px);
  min-height: 40vh;
  z-index: 30;
  padding: 1.5em 15px 3em;
}
.header-mobile-lang{
  position: relative;
  &:hover .mobile-lang-list{
    opacity: 1;
    visibility: visible;
  }
}
.header-mobile-lang__selected{
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding: 0 0 0.8em;
}
.mobile-lang-list{
    margin: 0;
    padding: 1.3em 0.9em;
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-gap: 0 1.4em;
    justify-content: space-between;
    background: var(--color-7);
    box-shadow: 2px 3px 15px rgba(186, 161, 146, 0.25);
    border-radius: 0.4em;
    font-size: 1rem;
    align-items: center;
    position: absolute;
    top: 100%;
    right: 0;
    width: 11.7em;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
}
.mobile-lang-list__item{
  padding: 0;
  margin: 0;
  &:before{
    display: none;
  }
}
.mobile-menu__header {
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0 3em;
  justify-content: end;
  align-items: center;
}

.mobile-lang-list__link{
  display: block;
  & img{
    display: block;
    max-width: 100%;
  }
}
.header-mobile-login{
  display: block;
  & svg{
    display: block;
    fill:  var(--color-4);
    width: 1.8em;
    height: 1.8em;
  }
}
.header-mobile-login_link{
  display: block;
  padding: 0 0 .8em;
}
.header-mobile-logout{
  display: block;
  position: relative;
  padding: 0 0 .8em;
  & svg{
    display: block;
    fill:  var(--color-1);
    width: 1.9em;
    height: 1.9em;
  }
  &:hover .header-mobile-logout__inner,
  &:focus .header-mobile-logout__inner{
    opacity: 1;
    visibility: visible;
  }
}
.header-mobile-logout__inner{
  position: absolute;
  top: 100%;
  right: 0;
  background: var(--color-7);
  box-shadow: 2px 3px 15px rgba(186, 161, 146, 0.25);
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
  width: 15em;
  padding: 1em;  
  z-index: 10;
}
.header-mobile-link,
.header-mobile-link,
.header-mobile-link:visited{
  display: block;
  font-size: 1.6em;
  line-height: 118%;
  color: #8A8E92;
  padding: 0;
  border: none;
  text-decoration: none;
  background: none;
  margin: 0 0 .5em;
  &:hover,
  &:focus{
    text-decoration: underline;
  }
  &:last-child{
    margin: 0;
  }
}

.nav-mobile__items,
.nav-mobile__items-submenu{
  padding: 0;
  margin: 0;
  font-size: 1em;
}
.nav-mobile__items-submenu{
  display: none;
}
.nav-mobile__item{
  margin: 0 0 2.4em;
  padding: 0;
  &:before{
    display: none;
  }
  &:first-of-type{
    margin: 1.6em 0 2.4em;
  }
  &:last-of-type{
    margin: 0;
  }
  &.isFull:hover,
  &.isFull:focus{
    margin: 0;
  }
  &.isFull:hover .nav-mobile__items-submenu,
  &.isFull:focus .nav-mobile__items-submenu{
    display: block;
  }
}
.header-mobile__link, 
.header-mobile__link:visited{
  display: block;
  font-weight: 600;
  font-size: 1.4em;
  line-height: 121%;
  text-transform: uppercase;
  color: var(--color-4);
  padding: .42em 0;
  border-bottom: 1px solid #413F3E;
  text-decoration: none;
  &:hover,
  &:focus{
    font-weight: bold;
  }
  &.nuxt-link-active{
    color: var(--color-3);
  }
}

.nav-mobile__item-submenu{
  padding: 0 0 0 3.7em;
  margin: 0;
  &:before{
    display: none;
  }
}
.header-mobile__link-submenu, 
.header-mobile__link-submenu:visited{
  display: inline-block;
  font-size: 1.4em;
  line-height: 130%;
  color: var(--color-4);
  margin: .71em 0;
  text-decoration: none;
  &.nuxt-link-active{
    color: var(--color-3);
  }
}
.mobile-menu__footer{
  display: grid;
  grid-template-columns: auto auto;
  grid-gap: 0 2em;
  justify-items: end;
  margin: 4.3em 0 0;
}
.header-mobile__contact-link,
.header-mobile__contact-link:visited{
  font-size: 1.2em;
  line-height: 125%;
  color: var(--color-4);
  text-decoration: none;
}
.header-mobile__contact-link_email{
  justify-self: start;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0 .5em;
  align-items: center;
}
.header-mobile__btnCall{
  padding: 0;
  background: none;
  font-size: 1.4em;
  line-height: 120%;
  text-decoration: underline;
  color: var(--color-4);
  grid-row: 2;
  grid-column: 2;
  display: inline-block;
  border: none;
  margin: .35em 0 0;
}
.mobile-menu-enter,
.mobile-menu-leave-to{
  transform: translate3d(100%, 0, 0);
}
.mobile-menu-enter-to,
.mobile-menu-leave{
  transform: translate3d(0, 0, 0);
}

.mobile-menu-enter-active,
.mobile-menu-leave-active{
  transition: .3s ease;
}
@media screen and (max-width: 1200px){
  .header-desktop{
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px){
  .header-desktop{
    font-size: .8rem;
  }
}
@media screen and (min-width: 768px){
  .mobile-menu{
    font-size: 1.2em;
  }
}
@media screen and (min-width: 992px){
  .mobile-menu{
    font-size: 1.3em;
  }
}

</style>