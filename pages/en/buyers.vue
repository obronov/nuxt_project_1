<template>
  <div>
    <div class="main-screen__wrap">
      <div class="main-screen" v-if="!emptyBuyers" :style="{'--bg': `url(${buyers.img})`}">
        <div class="main-screen__inner">
          <h1 class="main-screen__title container">{{buyers.title}}</h1>
          <div class="main-screen__description container" v-html="buyers.description"></div>
          <div class="faq-tabs-wrap" v-swiper:mySwiper="swiperOptions">
            <ul class="faq-tabs swiper-wrapper">
              <li class="faq-tabs__item swiper-slide" v-for="(item, index) in buyers.faq" :key="index">
                <button class="faq-tabs__btn" type="button" :class="{active: activeTab == item.code}" @click="selectedTab = item.code">{{item.name}}</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!emptyBuyers">
      <div class="faq-list-wrap container" :class="{show: activeTab == item.code}" v-for="(item, index) in buyers.faq" :key="'faq' + index">
        <FaqList :faqList="faqList(item, true)" :count="count"/>
        <div class="btn-list">
          <button class="faq__btnFeedback" type="button" @click="scrollToForm">{{buyers.btn_name}}</button>
          <button class="faq__link" type="button" v-if="showBtnMore(item)" @click="faqList(item, false)">
            <span>{{buyers.btn_pagination}}</span>
            <svg width="8" height="27" viewBox="0 0 8 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.64645 26.3536C3.84171 26.5488 4.15829 26.5488 4.35355 26.3536L7.53553 23.1716C7.7308 22.9763 7.7308 22.6597 7.53553 22.4645C7.34027 22.2692 7.02369 22.2692 6.82843 22.4645L4 25.2929L1.17157 22.4645C0.976312 22.2692 0.659729 22.2692 0.464467 22.4645C0.269205 22.6597 0.269205 22.9763 0.464467 23.1716L3.64645 26.3536ZM3.5 2.18557e-08L3.5 26L4.5 26L4.5 -2.18557e-08L3.5 2.18557e-08Z" fill="#2F2D2C"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="reviews" v-if="!emptyBuyers">
      <BlockVideo class="container" :video="buyers.video_comment"/> 
    </div>
    <FormFedback :request="request" v-if="!emptyForm" :formHandle="formHandle" :info="form" :fields="fields" :bgBlock="'transparent'" :bgForm="'transparent'"/>
  </div>
</template>

<script>
import BlockVideo from '@/components/blog/BlockVideo'
import global from "~/mixins/global";
export default {
  mixins: [global],
  components:{
    BlockVideo
  },
  data(){
    return{
      formHandle: 'buyers',
      request: 'consult',
      count: 3,
      buyers: {},
      selectedTab: undefined,
      form: {},
      fields:{
        "name":{
          "value": this.$store.state.contactPerson,
          "error": '',
          "type": 'text',
          "required": true
        },
        "phone":{
          "value": this.$store.state.contactPhone,
          "error": '',
          "type": 'tel',
          "required": true
        },
        "email":{
          "value": this.$store.state.contactEmail,
          "error": '',
          "type": 'email',
          "required": true
        },
        "city":{
          "value": '',
          "error": '',
          "type": 'text',
          "required": true
        },
        "comment":{
          "value": '',
          "error": '',
          "type": 'text'
        }
      },
      swiperOptions: {
        slidesPerView: 'auto',
        spaceBetween: 10,
        freemode: true,
        speed: 400,
        breakpoints: {
          100: {
            slidesPerView: 'auto',
            spaceBetween: 0
          },
          768: {
            slidesPerView: 'auto',
            spaceBetween: 10
          }
        }
      }
    }
  },
  head(){
    try {
      return{
        title: `${this.meta.buyers.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.meta.buyers.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.meta.buyers.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.meta.buyers.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.meta.buyers.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.meta.buyers.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }
  },
  async fetch() {

    try {
      this.form = await fetch(process.env.fakeUrl + 'form_buyers')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.meta = await fetch(process.env.fakeUrl + `meta_page`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.buyers = await fetch(process.env.fakeUrl + 'buyers')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

  },
  methods:{
    showBtnMore(item){
      if(item.show_pagination){
        if(item.list.length > this.count){
          item.show_pagination = true;
        }else{
          item.show_pagination = false;
        }
      }
      return item.show_pagination;
    },
    faqList(item, shortList ){
      let list = [];
      let self = this;

      if(shortList){
        item.list.forEach(function(element, index) {
          if(index < self.count){
            element.show_question = true;
          }
          list.push(element);
        });
      }else{

        item.list.forEach(function(element, index) {
          element.show_question = true;
          list.push(element);
        });
        item.show_pagination = false;

/*         for (const key in self.buyers.faq) {
          if (Object.hasOwnProperty.call(self.buyers.faq, key)) {
            const element = self.buyers.faq[key];
            
            if(element.code == item.code){
              console.log('element', element)
              element.show_pagination = false;
            }

          }
        } */
        

      }

      return list;
    }
  },
  computed:{
    activeTab(){
      if(this.selectedTab){
        return this.selectedTab;
      }else{
        return this.buyers.faq[0].code;
      }
    },
    emptyBuyers(){
      for (let key in this.buyers) {
        return false;
      }
      return true;
    },
    emptyForm(){
      for (let key in this.form) {
        return false;
      }
      return true;
    }
  }
}

</script>

<style lang='scss' scoped>
  .main-screen__wrap{
    background: var(--color-4);
  }
  .faq-list-wrap{
    font-size: 1rem;
    display: none;
    margin: 16.4em auto 0;
    &.show{
      display: block;
    }
  }

  .reviews{
    font-size: 1rem;
    padding: 11.3em 0 8.5em;
  }
  .main-screen{
    font-size: 1rem;
    max-width: 1440px;
    margin: 0 auto;
    background: linear-gradient(359.73deg, rgba(16, 16, 16, 0.5) 34.53%, rgba(65, 63, 62, 0) 85.79%), var(--bg), var(--color-4);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .main-screen__description{
    width: 100%;
  }
  .main-screen__title{
    width: 100%;
    margin: 0 auto 2.1em;
    color: var(--color-7);
    text-transform: uppercase;
  }
  .main-screen__description::v-deep *{
    color: var(--color-7);
    margin: 0;
  }
  .main-screen__inner{
    height: 63.4em;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-end;
  }

  .faq-tabs{
    margin: 0;
    font-size: 1em;
  }
  .faq-tabs__item{
    padding: 0;
    margin: 0;
    max-width: 29em;
    &:before{
      display: none;
    }
  }
  .faq-tabs__btn{
    display: block;
    width: 100%;
    height: 100%;
    font-weight: bold;
    font-size: 2em;
    line-height: 120%;
    color: var(--color-7);
    border: none;
    border-top: .1em solid var(--color-7);
    border-left: .1em solid var(--color-7);
    border-right: .1em solid var(--color-7);
    box-sizing: border-box;
    border-radius: .2em .2em 0 0;
    background: transparent;
    transition: .3s;
    padding: 2.45em 2.85em;
    &:hover,
    &:focus-within,
    &.active{      
      background: var(--color-7);
      color: var(--color-2);
    }
  }
  .faq-tabs-wrap{
    max-width: 1220px;
    width: 100%;
    margin: 6.3em auto 0;
  }
  .btn-list{
    margin: 5.2em 0 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .faq__btnFeedback{
    font-weight: bold;
    font-size: 2em;
    line-height: 120%;
    text-transform: uppercase;
    color: #413F3E;
    background: transparent;
    border: .1em solid var(--color-1);
    border-radius: .2em;
    padding: 18px 30px;
    transition: .3s;
    margin: 0 3.9em 0 0;
    &:hover,
    &:focus{
      outline: none;
      background: var(--color-1);
      color: var(--color-7);
    }
    &:active{
      color: var(--color-7);
      background: var(--color-3);
      border-color: var(--color-3);
    }
  }
  .faq__link{
    background: none;
    border: none;
    padding: 0;
    text-decoration: none;
    display: inline-grid;
    align-items: center;
    grid-gap: 0 .41em;
    grid-template-columns: 1fr auto;
    font-size: 2.4em;
    line-height: 150%;
    color: var(--color-2);
    & svg{
      display: block;
      width: .33em;
      height: 1.125em;
    }
  }
  @media screen and (max-width: 1100px) {
    .main-screen,
    .faq-list-wrap,
    .reviews{
      font-size: .8rem;
    }
  }
  @media screen and (max-width: 992px) {
    .main-screen,
    .faq-list-wrap,
    .reviews{
      font-size: .7rem;
    }
  }
  @media screen and (max-width: 768px) {
    .main-screen,
    .faq-list-wrap,
    .reviews{
      font-size: 0.6rem;
    }
    .faq__btnFeedback{
      font-size: 2.4em;
      padding: .83em 1.66em;
      border-radius: .33em;
    }
    .btn-list{
      margin: 4.2em 0 0;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
    }
    .faq-tabs__btn{
      border-radius: 0;
    }
    .faq-tabs-wrap{
      max-width: none;
    }
  }
  @media screen and (max-width: 600px) {
    .main-screen,
    .faq-list-wrap{
      font-size: 0.5rem;
    }
    .reviews{
      font-size: 0.5rem;
      padding: 4em 0 12em;
    }
    .faq-tabs__btn{
      font-size: 2.4em;
      padding: 1.66em;
    }
    .main-screen__description::v-deep *{
      font-size: 1.4rem;
    }
    .faq-tabs-wrap{
      margin: 8.8em 0 0;
    }
    .main-screen__inner{
      height: 95.6em;
    }
    .main-screen__title{
      font-size: 3.4rem;
      margin: 0 auto 2.85em;
    }
  }
</style>