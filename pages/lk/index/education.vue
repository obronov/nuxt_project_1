<template>
  <div>
    <div class="education" v-if="!emptyEducation">
        <h1 class="lk-title">{{education.title}}</h1>
        <div class="education-info">
          <ul class="education-list">
            <li class="education-list__item" v-for="(item, index) in education.list_education" :key="index">
              <div class="education__name-student">{{item.name}}</div>
              <a class="education__certificate-link" download :href="item.link_file">
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_576:3290)">
                  <path d="M17.1 26.1H16.2C16.2 26.2671 16.2465 26.431 16.3344 26.5732C16.4223 26.7153 16.548 26.8302 16.6975 26.905C16.847 26.9797 17.0144 27.0114 17.1808 26.9964C17.3473 26.9814 17.5063 26.9203 17.64 26.82L17.1 26.1ZM20.7 23.4L21.24 22.68C21.0842 22.5632 20.8947 22.5 20.7 22.5C20.5053 22.5 20.3158 22.5632 20.16 22.68L20.7 23.4ZM24.3 26.1L23.76 26.82C23.8937 26.9203 24.0527 26.9814 24.2192 26.9964C24.3856 27.0114 24.553 26.9797 24.7025 26.905C24.852 26.8302 24.9777 26.7153 25.0656 26.5732C25.1535 26.431 25.2 26.2671 25.2 26.1H24.3ZM20.7 19.8C19.5065 19.8 18.3619 19.3259 17.518 18.482C16.6741 17.6381 16.2 16.4935 16.2 15.3H14.4C14.4 16.9709 15.0637 18.5733 16.2452 19.7548C17.4267 20.9363 19.0291 21.6 20.7 21.6V19.8ZM25.2 15.3C25.2 16.4935 24.7259 17.6381 23.882 18.482C23.0381 19.3259 21.8935 19.8 20.7 19.8V21.6C22.3709 21.6 23.9733 20.9363 25.1548 19.7548C26.3363 18.5733 27 16.9709 27 15.3H25.2ZM20.7 10.8C21.8935 10.8 23.0381 11.2741 23.882 12.118C24.7259 12.9619 25.2 14.1065 25.2 15.3H27C27 13.6291 26.3363 12.0267 25.1548 10.8452C23.9733 9.66375 22.3709 9 20.7 9V10.8ZM20.7 9C19.0291 9 17.4267 9.66375 16.2452 10.8452C15.0637 12.0267 14.4 13.6291 14.4 15.3H16.2C16.2 14.1065 16.6741 12.9619 17.518 12.118C18.3619 11.2741 19.5065 10.8 20.7 10.8V9ZM16.2 18.9V26.1H18V18.9H16.2ZM17.64 26.82L21.24 24.12L20.16 22.68L16.56 25.38L17.64 26.82ZM20.16 24.12L23.76 26.82L24.84 25.38L21.24 22.68L20.16 24.12ZM25.2 26.1V18.9H23.4V26.1H25.2ZM27 9V2.7H25.2V9H27ZM24.3 0H2.7V1.8H24.3V0ZM0 2.7V24.3H1.8V2.7H0ZM2.7 27H14.4V25.2H2.7V27ZM0 24.3C0 25.0161 0.284463 25.7028 0.790812 26.2092C1.29716 26.7155 1.98392 27 2.7 27V25.2C2.46131 25.2 2.23239 25.1052 2.0636 24.9364C1.89482 24.7676 1.8 24.5387 1.8 24.3H0ZM2.7 0C1.98392 0 1.29716 0.284463 0.790812 0.790812C0.284463 1.29716 0 1.98392 0 2.7H1.8C1.8 2.46131 1.89482 2.23239 2.0636 2.0636C2.23239 1.89482 2.46131 1.8 2.7 1.8V0ZM27 2.7C27 1.98392 26.7155 1.29716 26.2092 0.790812C25.7028 0.284463 25.0161 0 24.3 0V1.8C24.5387 1.8 24.7676 1.89482 24.9364 2.0636C25.1052 2.23239 25.2 2.46131 25.2 2.7H27ZM5.4 9H14.4V7.2H5.4V9ZM5.4 14.4H10.8V12.6H5.4V14.4Z" fill="#E77C5A"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_576:3290">
                  <rect width="27" height="27" fill="white"/>
                  </clipPath>
                  </defs>
                </svg>
                {{item.name_file}}
              </a>
            </li>
          </ul>
          <a class="education-link" :href="education.training_courses_link">{{education.training_courses_link_name}}</a>
        </div>
        <h2 class="lk-title-education">{{education.video_title}}</h2>
        <div class="education-navigation-wrap">
          <SwiperArrow  v-if="!emptyEducationList"/>
        </div>
        <div class="education__slider-wrap" v-swiper:mySwiper="swiperOptions">
          <div class="swiper-wrapper">
            <div class="swiper-slide education__slide" v-for="(item, videoIndex) in education.video" :key="videoIndex">
              <BlogShortVideoPreview :video="item"/>
            </div>
          </div>
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
      education: {},
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 16,
        freemode: true,
        speed: 400,
        grabCursor: true,
        navigation: {
          nextEl: '.education .btn-navigation_next',
          prevEl: '.education .btn-navigation_prev'
        },
        breakpoints: {
          100: {
            slidesPerView: 'auto',
            spaceBetween: 6
          },
          992: {
            slidesPerView: 'auto',
            spaceBetween: 16
          }
        }
      }
    }
  },
  head(){
    try {
      return{
        title: `Сотрудники, прошедшие обучение`,
        meta: [
          { hid: 'description', name: 'description', content: `` },
          { hid: 'keywords', name: 'keywords', content: `` },
          { hid: 'og:title', property: 'og:title', content: `` },
          { hid: 'og:description', property: 'og:description', content: `` },
          { hid: 'og:image', property: 'og:image', content: `` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }
  },
  async fetch() {
    try {
      /* this.education = await this.fetchLkAuth(process.env.baseUrl + 'lk_education'); */
      
      this.education = await fetch(process.env.fakeUrl + 'lk_education')
      .then(res => res.json())

    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }
  },
  computed:{
    emptyEducation(){
      for (let key in this.education) {
        return false;
      }
      return true;
    },
    emptyEducationList(){
      if( this.education.list != undefined &&  this.education.list.length > 0){
        return false;
      }else{
        return true;
      }
    }
  }
}

</script>

<style lang='scss'>

</style>