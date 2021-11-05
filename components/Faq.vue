<template>
  <section class="faq">
    <div class="container">
      <div class="faq-info">
        <h2 class="section__title" v-html="faq.title"></h2>

        <FaqList :faqList="faqList" :count="count"/>

        <div class="btn-list">
          <button class="faq__btnFeedback" type="button" @click="showModalApp()">{{faq.btn_name}}</button>
          <button class="faq__link" type="button" v-if="showMore" @click="loadMore">
            <span>{{faq.link_name}}</span>
            <svg width="8" height="27" viewBox="0 0 8 27" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.64645 26.3536C3.84171 26.5488 4.15829 26.5488 4.35355 26.3536L7.53553 23.1716C7.7308 22.9763 7.7308 22.6597 7.53553 22.4645C7.34027 22.2692 7.02369 22.2692 6.82843 22.4645L4 25.2929L1.17157 22.4645C0.976312 22.2692 0.659729 22.2692 0.464467 22.4645C0.269205 22.6597 0.269205 22.9763 0.464467 23.1716L3.64645 26.3536ZM3.5 2.18557e-08L3.5 26L4.5 26L4.5 -2.18557e-08L3.5 2.18557e-08Z" fill="#2F2D2C"/>
            </svg>
          </button>
        </div>

      </div>
      <img class="faq-img" :src="require('~/assets/images/design/ustanovka.jpg')" alt="установка">

    </div>
  </section>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  props:{
    faq: Object
  },
  data(){
    return{
      count: 3,
      showMore: false,
      click: false
    }
  },
  methods:{
    loadMore(){
      this.showMore = false;
      this.click = true;
    }
  },
  computed:{
    faqList(){
      let list = [];

      if(this.click == false && this.faq.list.length > this.count){
        this.showMore = true;
      }

      if(this.showMore){
        for (const key in this.faq.list) {
          if (Object.hasOwnProperty.call(this.faq.list, key)) {
            let element = this.faq.list[key];
            if(key < this.count){
              element.show_question = true;
            }
            list.push(element);
          }
        }
      }else{
        for (const key in this.faq.list) {
          if (Object.hasOwnProperty.call(this.faq.list, key)) {
            let element = this.faq.list[key];
            element.show_question = true;
            
            list.push(element);
          }
        }
      }
      
      return list;
    }
  }
}

</script>

<style lang='scss' scoped>
  .faq{
    font-size: 1rem;
  }
  .container{
    display: grid;
    grid-template-columns: 8fr 4fr;
    grid-gap: 0 2em;
  }
  
  .section__title {
    margin: 1.31em 0 0.53em;
  }
  .faq-img{
    display: block;
    max-width: 100%;
    align-self: end;
  }
  .btn-list{
    margin: 5.2em 0 0;
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
  @media screen and (max-width: 1200px) {
    .faq{
      font-size: .8rem;
    }
  }
  @media screen and (max-width: 992px) {
    .faq{
      font-size: 0.7rem;
    }
    .faq-img{
      display: none;
    }
    .container{
      grid-template-columns: 1fr;
      grid-gap: 0;
    }
    .section__title{
      margin: 0 0 0.53em;
    }
  }
  @media screen and (max-width: 768px) {
    .faq{
      font-size: 0.5rem;
    }
    .section__title{
      margin: 0 0 0.68em;
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
  }
 
</style>