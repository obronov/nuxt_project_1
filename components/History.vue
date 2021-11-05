<template>
  <section class="history">
    <div class="container">
      <h2 class="h1" v-html="history.title"></h2>
      <div class="year-list-wrap">
        <ul class="year-list">
          <li class="year-list__item" v-for="(item, index) in historyList" :key="index">
            <button class="btnYear" :class="{active: item.active}" @click="showBlockHistory(item)" type="button">{{item.year}}</button>
          </li>
        </ul>
      </div>
        <div class="currentHistory" >
          <transition name="slideLeft">
            <img class="currentHistory__img" v-if="!emptyCurrentHistory" :src="currentHistory.img" :alt="currentHistory.alt">
          </transition>
          <transition name="slideRight">
            <div class="currentHistory__text" v-if="!emptyCurrentHistory" v-html="currentHistory.text"></div>
          </transition>
        </div>
      
    
    </div>
  </section>
</template>

<script>

export default {
  props:{
    history: Object
  },
  data(){
    return{
      currentHistory:{},
      currentStep: '',
      historyList: this.history.list
    }
  },
  methods:{
    start(){
      let last = this.historyList.length - 1;

      this.historyList[last].active = true;
      
      this.showCurrentHistory(this.historyList[last]);
    },
    hiddenCurrentHistory(){

      for (const key in this.historyList) {
        if (Object.hasOwnProperty.call(this.historyList, key)) {
          const element = this.historyList[key];
          element.active = false;
        }
      }

      this.currentHistory = {};
    },
    showCurrentHistory(item){
      
      for (const key in this.historyList) {
        if (Object.hasOwnProperty.call(this.historyList, key)) {
          const element = this.historyList[key];
          
          if(element.year == item.year){
            element.active = true;
          }
        }
      }

      this.currentHistory = item;
    },
    showBlockHistory(item){
      if(this.currentStep !== item.year){

        this.currentStep = item.year;
        this.hiddenCurrentHistory();
        setTimeout(this.showCurrentHistory, 700, item)
      }
    },
  },
  computed:{
    emptyCurrentHistory(){
      for (let key in this.currentHistory) {
        return false;
      }
      return true;
    }
  },
  mounted(){
    this.$nextTick(()=>{
      this.start();
    })
  }
}

</script>

<style lang='scss' scoped>
.history{
  font-size: 1rem;
  margin: 8.1em 0 5em;
}
.year-list-wrap{  
  font-size: 1rem;
  overflow-x: auto;  
  overflow-y: hidden;  
  margin: 0 0 4.1em;
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
}

.year-list{
  font-size: 1rem;
  position: relative;
  display: inline-flex;
  flex-flow: row nowrap;
  align-items: center;
  margin: 0;
  height: 6.4em;
  &:after{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: var(--color-5);
    position: absolute;
    bottom: .5em;
    left: 0;
  }
}
.year-list__item{
  padding: 0;
  margin: 0 1.9em 0 0;
  flex: 1 1 50px;
  &:before{
    display: none;
  }
  &:last-of-type{
    margin: 0;
  }
}
.btnYear{
  border: none;
  font-size: 2.4em;
  line-height: 150%;
  color: var(--color-8);
  transition: font-size 1s;
  background: var(--color-7);
  position: relative;
  z-index: 10;
  padding: 0 .17em;
  will-change: font-size;
}
.year-list__item:first-of-type .btnYear{
  padding: 0 .17em 0 0;
}
.year-list__item:last-of-type .btnYear{
  padding: 0 0 0 .17em;
}
.btnYear.active{
  font-size: 6.4em;
  line-height: 1;
  font-weight: bold;
}

.slideLeft-enter-active, .slideLeft-leave-active{
  transition: opacity .7s .3s, transform .7s ease-in-out;
}
.slideLeft-enter, .slideLeft-leave-to {
  opacity: 0;
  transform: translateX(-70%);
}
.slideLeft-leave, .slideLeft-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.slideRight-enter-active, .slideRight-leave-active{
  transition: opacity .7s .3s, transform .7s ease-in-out;
}
.slideRight-enter, .slideRight-leave-to {
  opacity: 0;
  transform: translateX(70%);
}
.slideRight-leave, .slideRight-enter-to {
  opacity: 1;
  transform: translateX(0);
}



.currentHistory{
  min-height: 21.2em;
  display: grid;
  grid-template-columns: 39.5em 1fr;
  grid-gap: 0 12.1em;
}
.currentHistory__img{
  display: block;
  width: 100%;  
  will-change: transform;
}
.currentHistory__text{
  will-change: transform;
}
.currentHistory__text::v-deep *{
  margin: 0 0 .66em;
}
@media screen and (max-width: 1100px) {
  .history, 
  .year-list-wrap, 
  .year-list{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .history, 
  .year-list-wrap, 
  .year-list{
    font-size: .7rem;
  }
  .currentHistory {
    grid-gap: 0 7.1em;
  }

}
@media screen and (max-width: 768px) {
  .history, 
  .year-list-wrap, 
  .year-list{
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 600px) {
  .history{
    font-size: 0.5rem;
  }
  .year-list, .history{
    font-size: 0.5rem;
    &:after{
      bottom: .7em;
    }
  }

  .year-list-wrap{
    font-size: 0.5rem;
    margin: 0 0 5.2em;
 
  }
  .currentHistory{
    grid-gap: 4em 0em;
    grid-template-columns: 1fr;
  }
  .currentHistory__img{
    justify-self: center;
    max-width: 39.5em;
  }
  .currentHistory__text::v-deep *{
    font-size: 2.8em;
  }
  .btnYear{
    font-size: 2.8em;
  }
  .btnYear.active{
    font-size: 5em;
  }
}
</style>