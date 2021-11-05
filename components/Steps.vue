<template>
  <section class="steps">
    <div class="container">
      <h2 class="section__title" v-html="steps.title"></h2>
    </div>
    <div class="steps__wrap-list">
      <div class="container">
        <ul class="steps__list">
          <li class="steps__list-item" v-for="(item, index) in steps.list" :key="index">
            <div class="step">
              <div class="step__number" :class="{active: currentItem == index}">
                <div class="number">{{index + 1}}</div>
                <div>шаг</div>
              </div>
              <p class="step__description">{{item}}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  props:{
    steps: Object
  },
  data(){
    return{
      currentItem: 0
    }
  },
  methods:{
    setActiveItem(){
      let self = this;

      setInterval(function (){
        if(self.currentItem < (self.steps.list.length - 1)){
          self.currentItem += 1;
        }else{
          self.currentItem = 0;
        }
      }, 1500)
    }
  },
   mounted(){
    this.$nextTick(()=>{
      this.setActiveItem()
    });
  }
}

</script>

<style lang='scss' scoped>
.steps{
  font-size: 1rem;
  margin: 17em 0 0;
}
.steps__wrap-list{
  background: var(--color-4);
  padding: 7.5em 0 8.3em;
}
.steps__list{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 4.6em 2em;
}

.steps__list-item:nth-of-type(5){
  grid-row: 2;
  grid-column: 2;
  max-width: 154px;
  margin: 0 auto;
  &:before{
    left: calc(100% + 3em);
  }
}
.steps__list-item:nth-of-type(6){
  grid-row: 2;
  grid-column: 3;
  max-width: 154px;
  margin: 0 auto;

}
.step__number{
  border-radius: 100%;
  background: var(--color-10);
  border: .21em solid var(--color-10);
  box-shadow: 3px 6px 8px rgba(22, 22, 22, 0.3);
  transition: .8s ease-in-out;
  text-align: center;
  font-weight: 300;
  font-size: 2.4em;
  line-height: 100.8%;
  text-transform: uppercase;
  color: var(--color-2);
  width: 4.87em;
  height: 4.87em;
  margin: 0 auto;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
}
.number{
  font-weight: bold;
  font-size: 2.5em;
  color: var(--color-2);
  margin: 0 0 0.08em;
  line-height: 100.8%;
}
.step__number.active{
  border-color: var(--color-1);
}
.steps__list{
  margin: 0;
  font-size: 1em;
}
.steps__list-item{
  margin: 0;
  padding: 0;
  &:before{
    width: 9.9em;
    height: 1.6em;
    top: 5em;
    left: calc(100% - 4.4em);
    border: none;
    background: url('~/assets/images/design/step_arrow_1.png') no-repeat center center;
    background-size: 100% auto;
  }
}
.steps__list-item:nth-of-type(3){
  max-width: 203px;
  margin: 0 auto;
  &:before{
    left: 100%;
  }
}
.steps__list-item:nth-of-type(4){
  &:before{
    background: url('~/assets/images/design/step_arrow_2.png') no-repeat left top;
    width: 87.3em;
    height: 15em;
    top: calc(100% - 2.8em);
    left: auto;
    right: calc(50% - 2.2em);
    background-size: 100% auto;
  }
}
.steps__list-item:nth-of-type(6){
  &:before{
    display: none;
  }
}
.step__description{
  font-size: 2.4em;
  line-height: 150%;
  text-align: center;
  color: var(--color-7);
  margin: .7em 0 0;
}
.section__title{
  max-width: 747px;
  margin: 0 0 .39em;
}
@media screen and (max-width: 1200px) {
  .steps{
    font-size: .8rem;
  }
  .steps__list{
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 18em 2em;
  }
  .steps__list-item{
    &:before{
      width: 12em;
      height: 2em;
      top: 5em;
      left: calc(100% - 5.4em);
    }
  }
  .steps__list-item:nth-of-type(4){
    grid-column: 3;
    &:before{
      width: 12em;
      height: 2em;
      top: 5em;
      left: auto;
      right: calc(100% - 5.4em);
      background: url('~/assets/images/design/step_arrow_1.png') no-repeat center center;
      background-size: 100% auto;
      transform: rotate(180deg);
    }
  }
  .steps__list-item:nth-of-type(5){
    max-width: none;
    margin: 0;
    &:before{
      width: 12em;
      height: 2em;
      top: 5em;
      left: auto;
      right: calc(100% - 5.4em);
      transform: rotate(180deg);
    }
  }
  .steps__list-item:nth-of-type(3){
    &:before{
      left: calc(50% - 6em);
      transform: rotate(90deg);
      top: calc(100% + 8em);
    }
  }
  .steps__list-item:nth-of-type(6){
    grid-column: 1;
  }
}
@media screen and (max-width: 992px) {
  .steps{
    font-size: .7rem;
  }
  .number{
    font-size: 2.1em;
  }
}
@media screen and (max-width: 768px) {
  .steps{
    font-size: .6rem;
    margin: 10em 0 0;
  }
  .number{
    font-size: 2.5em;
  }
  .steps__wrap-list{
    padding: 8.6em 0 9.6em;
  }
}
@media screen and (max-width: 576px) {
  .steps__list{
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 14em 2em;
  }
  .steps__list-item:nth-of-type(2){
    &:before{
      left: calc(50% - 6em);
      transform: rotate(90deg);
      top: calc(100% + 6em);
    }
  }
  .steps__list-item:nth-of-type(3){
    grid-column: 2;
    grid-row: 2;
    max-width: none;
    margin: 0;
    &:before{
      width: 12em;
      height: 2em;
      top: 5em;
      left: auto;
      right: calc(100% - 5.4em);
      transform: rotate(180deg);
    }
  }
  .steps__list-item:nth-of-type(4){
    grid-column:1;
    grid-row: 2;
    &:before{
      left: calc(50% - 6em);
      transform: rotate(90deg);
      top: calc(100% + 6em);
    }
  }
  .steps__list-item:nth-of-type(5){
    grid-column: 1;
    grid-row: 3;
    &:before{
      width: 12em;
      height: 2em;
      top: 5em;
      left: calc(100% - 5.4em);
      transform: rotate(0deg);
    }
  }
  .steps__list-item:nth-of-type(6){
    grid-column: 2;
    grid-row: 3;
  }
}

</style>