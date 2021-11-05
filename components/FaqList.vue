<template>
  <div>
    <ul class="faq-list">
      <li class="faq-list__item" 
        :style="{'--delay': `${index / count * 0.15}s`}"
        :class="{'show': item.show_question, active: item.show_answer}" 
        v-for="(item, index) in faqList" :key="index" >
        <button class="faq__btn" 
        type="button" 
        @click="showAnswer(item)"
      >
          <span>{{item.question}}</span>
          <svg v-if="item.show_answer" width="21" height="4" viewBox="0 0 21 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L19 2" stroke-width="3" stroke-linecap="round"/>
          </svg>
          <svg v-else width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 9.19078C14.5523 9.19078 15 8.74306 15 8.19078V7.54088C15 6.9886 14.5523 6.54088 14 6.54088H9.97982C9.42754 6.54088 8.97982 6.09317 8.97982 5.54088V1C8.97982 0.447716 8.5321 0 7.97982 0H7.05381C6.50153 0 6.05381 0.447715 6.05381 1V5.54088C6.05381 6.09317 5.6061 6.54088 5.05381 6.54088H0.999999C0.447714 6.54088 0 6.9886 0 7.54088V8.19078C0 8.74306 0.447715 9.19078 1 9.19078H5.05381C5.6061 9.19078 6.05381 9.63849 6.05381 10.1908V15C6.05381 15.5523 6.50153 16 7.05381 16H7.97982C8.53211 16 8.97982 15.5523 8.97982 15V10.1908C8.97982 9.63849 9.42754 9.19078 9.97982 9.19078H14Z" />
          </svg>
        </button>
        <div v-show="item.show_answer" class="faq__answer" v-html="item.answer"></div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props:{
    faqList: Array,
    count: Number
  },
  methods:{
    showAnswer(item){
      item.show_answer = !item.show_answer;
    }
  }
}

</script>

<style lang='scss' scoped>

  .faq-list{
    margin: 0;
    font-size: 1em;
    position: relative;
  }
  .faq-list__item{
    margin: 0;
    padding: 0;    
    position: absolute;
    opacity: 0;
    visibility: hidden;
    transform: translate3d(0, 2em, 0);
    border-bottom: 1px solid #6B6967;
    &:before{
      display: none;
    }
    &.show{
      position: static;
      transition: opacity .3s var(--delay), transform .3s var(--delay);
      transform: translate3d(0, 0, 0);
      opacity: 1;
    visibility: visible;
    }
  }
  .faq__btn{
    border: none;
    background: none;
    font-size: 2.4em;
    line-height: 120%;
    text-transform: uppercase;
    color: var(--color-2);
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 0 2.2em;
    align-items: center;
    padding: 1.5em 0;
    width: 100%;
    text-align: left;
    
    &:hover svg,
    &:focus svg{
      stroke: var(--color-1);
      fill: var(--color-1);
    }
    & svg{
      display: block;
      stroke: var(--color-2);
      fill: var(--color-2);
      width: 15px;
      height: 16px;
      transition: stroke .3s, fill .3s;
    }
    &.active svg{
      width: 21px;
      height: 4px;
    }
  }
  .faq__answer::v-deep * {
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    .faq__btn{
      grid-gap: 0 3.2em;
      padding: .66em 0;
    }
  }
</style>