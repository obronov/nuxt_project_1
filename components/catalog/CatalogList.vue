<template>
  <div class="catalog-list container">
    <div class="catalog-list__item" v-for="(item, index) in catalogList" :key="index">
      <NuxtLink class="catalog-list__title h1" :to="`/catalog/${item.alias}`">
        {{item.name}}
      </NuxtLink>
      <div class="catalog-list__wrap-info">
        <div class="catalog-list__info">
          <perfect-scrollbar class="catalog-list-scrollbar">
            <div class="catalog-list__description" v-html="item.description"></div>
          </perfect-scrollbar>
        </div> 
        <button class="btn catalog-list__btn" type="button" @click="showModalApp()">Узнать стоимость</button>
      </div>
      
      <div class="catalog-list__wrap-img">
        <button  
        :class="`prompt prompt_${item.code}`" 
        v-for="(text, index) in item.help_list" 
        :key="'help'+ index" 
        type="button"
        :style="{'--text': text}"
        >
        <span class="prompt__wrap-text">
          <span class="prompt__text">{{text}}</span>
        </span>
        <span class="prompt__icon">+</span>
        </button>
        <img class="catalog-list__img" :src="require(`~/assets/images/content/${item.code}.png`)" :alt="item.name">
      </div>
      <div class="wrap-block-delimeter">
        <hr class="block-delimeter">
      </div>
    </div>
    
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  props: {
    catalogList: Array    
  }
}

</script>

<style lang='scss' scoped>
.catalog-list{
  font-size: 1rem;
  padding: 9.8em 15px 12em;
}
.catalog-list__title, .catalog-list__title:visited{
  text-decoration: none;
  margin: 0 0 .23em;
  color: var(--color-2);
}
.prompt{
  display: inline-block;
  padding: 0;
  font-size: 1em;
  line-height: 1;
  background: var(--color-1);
  border: 1px solid var(--color-7);
  border-radius: 100%;
  color: var(--color-7);
  width: 3.6em;
  height: 3.6em;
  padding: 1.2em;
  position: absolute;
  transition: .3s;
  overflow: visible;
  &:hover,
  &:focus{
    border-color: var(--color-1);
    color: var(--color-1);
    background: var(--color-4);
  }
  &:hover .prompt__text,
  &:focus .prompt__text{
    opacity: 1;
    visibility: visible;
    z-index: 10;
  }
}
.prompt_150{
  &:nth-of-type(1){
    top: 15%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
  &:nth-of-type(2){
    top: 44%;
    left: 18%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
  &:nth-of-type(3){
    top: 9%;
    left: 53%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
  &:nth-of-type(4){
    top: 62%;
    left: 55%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
  &:nth-of-type(5){
    top: 26%;
    left: 71%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
  &:nth-of-type(6){
    top: 5%;
    left: 92%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
}
.prompt_200{
  &:nth-of-type(1){
    top: 3%;
    left: 3%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
  &:nth-of-type(2){
    top: 43%;
    left: 10%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
  &:nth-of-type(3){
    left: 52%;
    top: 3%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
  &:nth-of-type(4){
    top: 65%;
    left: 59%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
  &:nth-of-type(5){
    top: 25%;
    left: 63%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
  &:nth-of-type(6){
    top: 9%;
    left: 90%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
}
.prompt_300{
  &:nth-of-type(1){
    top: 12%;
    left: 2%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
  &:nth-of-type(2){
    top: 41%;
    left: 11%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
  &:nth-of-type(3){
    top: 14%;
    left: 25%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
  &:nth-of-type(4){
    top: 54%;
    left: 52%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
  &:nth-of-type(5){
    top: 25%;
    left: 68%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
  &:nth-of-type(6){
    top: 23%;
    left: 91%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      right: 0;
    }
  }
}
.prompt_400{
  &:nth-of-type(1){
    left: 3%;
    top: 2%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
  &:nth-of-type(2){
    top: 37%;
    left: 16%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
  &:nth-of-type(3){
    left: 51%;
    top: -2%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
  &:nth-of-type(4){
    left: 62%;
    top: 57%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
  &:nth-of-type(5){
    top: 22%;
    left: 65%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
  &:nth-of-type(6){
    left: 90%;
    top: 6%;
    & .prompt__text,
    & .prompt__text{
      bottom: 130%;
      left: 0;
    }
  }
}
.prompt__icon{
  font-size: 2.4em;
  line-height: 0.5em;
  margin: -0.03em 0 0 -0.03em;
  display: block;
}
.prompt__wrap-text{
  position: relative;
}
.prompt__text{
  font-size: 1.6em;
  line-height: 118%;
  color: var(--color-2);
  background: var(--color-7);
  border-radius: .25em;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.16);
  position: absolute;
  opacity: 0;
  visibility: hidden;
  transition: .3s;
  min-width: 18.1em;
  padding: .75em .93em;
  text-align: left;
}

.catalog-list__wrap-img{
  position: relative;
}
.catalog-list__img{
  display: block;
  width: 100%;
}
.catalog-list__item{
  display: grid;
  grid-template-columns: 6fr 7fr;
  grid-gap: 0 8.3em;
  &:last-child .wrap-block-delimeter{
    display: none;
  }
  &:nth-of-type(even){
    grid-template-columns: 7fr 6fr;
  }
  &:nth-of-type(even) .catalog-list__wrap-info{
    grid-column: 2;
    display: flex;
    flex-flow: column wrap;
    align-items: flex-end;
  }
  &:nth-of-type(even) .catalog-list__wrap-info .catalog-list__btn{
    margin: 3.65em 0 0 auto;
  }
  &:nth-of-type(even) .catalog-list__title{
    grid-column: 2;
  }
}
.block-delimeter{
  grid-column: 2;
}

.catalog-list__wrap-img{
  grid-row: 2;
}
.catalog-list__wrap-info{
  grid-row: 2;
  
}
.catalog-list__info{
  overflow: hidden;
  position: relative;
  height: 31.9em;
  &:before,
  &:after{
    content: '';
    display: block;
    width: calc(100% - 1.4em);
    height: 4em;
    position: absolute;
    left: 0;
    z-index: 10;
  }
  &:before{
    top: 0;
    background: linear-gradient(180deg, #FFF 0%, #FFF 20%, rgba(255, 255, 255, 0) 100%);
  }
  &:after{
    bottom: 0;
    background: linear-gradient(360deg, #FFF 0%, #FFF 20%, rgba(255, 255, 255, 0) 100%);
  }
}

.catalog-list-scrollbar{
  height: 100%;
  padding: 0 1.4em 0 0;
}
.catalog-list__description::v-deep * {
    margin: .75em 0;
}
.catalog-list__description::v-deep ul li{
  padding: 0 0 0 .66em;
  &:before{
    top: 0.6em;
    border: none;
    border-radius: 100%;
    background: var(--color-2);
    width: .21em;
    height: .21em;
  }
}

.catalog-list__btn{
  margin: 3.65em 0 0;
}

.wrap-block-delimeter{
  grid-column: 1/3;
  margin: 7.6em 0 9.2em;
}
@media screen and (max-width: 1200px) {
  .catalog-list{
    font-size: .8rem;
  }

}
@media screen and (max-width: 992px) {
  .catalog-list{
    font-size: .7rem;
  }
  .catalog-list__wrap-img{
    grid-column: 1/3;
    max-width: 600px;
    margin: 0 auto;
  }
  .catalog-list__wrap-info{
    grid-row: 3;
    grid-column: 1/3;
    display: flex;
    flex-flow: column wrap;
  }
  .catalog-list__item:nth-of-type(2n) .catalog-list__wrap-info{
    grid-column: 1/3;
    align-items: stretch;
  }
  .catalog-list__info{
    height: auto;
  }
  .catalog-list__item:nth-of-type(2n) .catalog-list__title{
    grid-column: 1;
  }
  .catalog-list__item, 
  .catalog-list__item:nth-of-type(2n){
    grid-template-columns: 1fr 1fr;
  }
  .catalog-list__btn{
    margin: 1em auto 0 auto;
  }
  .catalog-list__item:nth-of-type(2n) .catalog-list__wrap-info .catalog-list__btn{
    margin: 1em auto 0 auto;
  }
  .wrap-block-delimeter{
    margin: 4.5em 0 10em;
  }
  .prompt_150{
    &:nth-of-type(1){
      top: 20%;
      left: 2%;
      & .prompt__text,
      & .prompt__text{
        right: auto;
        left: 0;
      }
    }
    &:nth-of-type(2){
      top: 50%;
      left: 17%;
      & .prompt__text,
      & .prompt__text{
        right: auto;
        left: 0;
      }
    }
    &:nth-of-type(3){
      top: 13%;
      left: 50%;
    }
    &:nth-of-type(4){
      top: 69%;
      left: 57%;
    }
    &:nth-of-type(5){
      left: 70%;
      top: 28%;
    }
    &:nth-of-type(6){
      top: 7%;
      left: 94%;
    }
  }
  .prompt_200{
    &:nth-of-type(1){
      top: 6%;
      left: 3%;
    }
    &:nth-of-type(2){
      top: 50%;
      left: 10%;
    }
    &:nth-of-type(3){
      left: 53%;
      top: 5%;
      & .prompt__text,
      & .prompt__text{
        right: 0;
        left: auto;
      }
    }
    &:nth-of-type(4){
      left: 60%;
      top: 72%;
      & .prompt__text,
      & .prompt__text{
        right: 0;
        left: auto;
      }
    }
    &:nth-of-type(5){
      top: 30%;
      left: 63%;
      & .prompt__text,
      & .prompt__text{
        right: 0;
        left: auto;
      }
    }
    &:nth-of-type(6){
      top: 12%;
      left: 92%;
      & .prompt__text,
      & .prompt__text{
        right: 0;
        left: auto;
      }
    }
  }
  .prompt_300{
    &:nth-of-type(1){
      top: 17%;
      left: 5%;
      & .prompt__text,
      & .prompt__text{
        right: auto;
        left: 0;
      }
    }
    &:nth-of-type(2){
      top: 51%;
      left: 11%;
      & .prompt__text,
      & .prompt__text{
        right: auto;
        left: 0;
      }
    }
    &:nth-of-type(3){
      top: 18%;
      & .prompt__text,
      & .prompt__text{
        right: auto;
        left: 0;
      }
    }
    &:nth-of-type(4){
      top: 65%;
    }
    &:nth-of-type(5){
      top: 32%;
      left: 70%;
    }
    &:nth-of-type(6){
      top: 30%;
      left: 92%;
    }
  }
  .prompt_400{
    &:nth-of-type(1){
      top: 5%;
    }
    &:nth-of-type(2){
      top: 47%;
    }
    &:nth-of-type(3){
      top: 0%;
      & .prompt__text,
      & .prompt__text{
        right: 0;
        left: auto;
      }
    }
    &:nth-of-type(4){
      top: 70%;
      & .prompt__text,
      & .prompt__text{
        right: 0;
        left: auto;
      }
    }
    &:nth-of-type(5){
      top: 26%;
      left: 66%;
      & .prompt__text,
      & .prompt__text{
        right: 0;
        left: auto;
      }
    }
    &:nth-of-type(6){
      left: 92%;
      top: 10%;
      & .prompt__text,
      & .prompt__text{
        right: 0;
        left: auto;
      }
    }
  }
  .catalog-list__info{
    &:before,
    &:after{
      display: none;
    }
  }
  .prompt__text{
    font-size: 2em;
  }
}
@media screen and (max-width: 600px) {
  .prompt__text{
    font-size: 2.3em;
    min-width: 13.1em;
    padding: 0.5em;
  }
  .prompt{
    width: 2.83em;
    height: 2.83em;
    padding: 0;
  }
  .prompt__icon{
    font-size: 2em;
    margin: 0;
  }
  .catalog-list__wrap-img{
    max-width: 328px;
  }
  .catalog-list{
    font-size: .6rem;
    padding: 10em 15px 7.83em;
  }
  .catalog-list__title{
    font-size: 2.5rem;
  }
  .prompt_150{
    &:nth-of-type(6){
      top: 8%;
      left: 93%;
    }
  }
  .prompt_200{
    &:nth-of-type(1){
      top: 9%;
      left: 0;
    }
    &:nth-of-type(2){
      top: 48%;
      left: 9%;
    }
    &:nth-of-type(3){
      left: 53%;
      top: 6%;
    }
    &:nth-of-type(4){
      left: 59%;
      top: 70%;
    }
    &:nth-of-type(5){
      top: 27%;
      left: 66%;
    }
  }
  .prompt_300{
    &:nth-of-type(1){
      left: 5%;
    }
    &:nth-of-type(2){
      top: 50%;
      left: 10%;
    }
  }
  .prompt_400{
    &:nth-of-type(1){
      top: 5%;
    }
  }
}

</style>