<template>
  <section class="advantages">
    <h2 class="advantages__title">{{advantages.title}}</h2>
    <div class="advantages-wrap-list">
      <ul class="advantages-list">
        <li class="advantages-list__item" v-for="(item, index) in advantages.list" :key="index">
          <div class="advantages-index">{{getIndex(index)}}</div>
          <div class="advantages-text">{{item}}</div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

export default {
  props:{
    advantages: Object
  },
  methods:{
    getIndex(index){
      let idx = index + 1;
      if(idx < 10){
        return '0' + idx;
      }else{
        return idx;
      }
    }
  }
}

</script>

<style lang='scss' scoped>
.advantages{
  font-size: 1rem;
  padding: 0 0 15.8em;
}
.advantages__title{
  font-weight: normal;
  font-size: 2.4em;
  line-height: 121%;
  text-transform: uppercase;
  color: var(--color-7);
  margin: 0 auto 2.12em;
  max-width: 1250px;
  padding: 0 15px;
}
.advantages-wrap-list{
  max-width: 1220px;
  margin: 0 auto;  
  overflow: hidden;
}
.advantages-list{
  margin: 0 -1px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  font-size: 1em;  
  border-bottom: 1px solid var(--color-7);
  background: rgba(40, 41, 42, .7);
}
.advantages-list__item{
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  color: var(--color-7);
  padding: 2.4em 7.5em 5.4em 7.1em;
  border-top: 1px solid var(--color-7);
  border-right: 1px solid var(--color-7);
  border-left: 1px solid var(--color-7);
  background:  transparent;
  transition: .3s;
  &:before{
    display: none;
  }
  &:nth-of-type(2),
  &:nth-of-type(5),
  &:nth-of-type(8),
  &:nth-of-type(11),
  &:nth-of-type(14){
    margin: 0 -1px;
  }
  &:hover{
    background:  var(--color-1);
  }
  /* &:nth-of-type(2){
    border-right: 1px solid var(--color-7);
    border-left: 1px solid var(--color-7);
  }
  &:nth-of-type(5){
    border-right: 1px solid var(--color-7);
    border-left: 1px solid var(--color-7);
  }
  &:nth-of-type(8){
    border-right: 1px solid var(--color-7);
    border-left: 1px solid var(--color-7);
  }
  &:nth-of-type(11){
    border-right: 1px solid var(--color-7);
    border-left: 1px solid var(--color-7);
  }
  &:nth-of-type(14){
    border-right: 1px solid var(--color-7);
    border-left: 1px solid var(--color-7);
  } */
}
.advantages-index{
  font-weight: 250;
  font-size: 5em;
  line-height: 122%;
  text-transform: uppercase;
  opacity: 0.5;
  text-align: right;
}
.advantages-text{
  grid-row: 2;
  grid-column: 2;
  font-weight: 600;
  font-size: 1.8em;
  line-height: 122%;
}
@media screen and (max-width: 1366px) {

}
@media screen and (max-width: 1200px) {
  .advantages-list__item{
    padding: 1.4em 5.5em 4.4em 5.1em;
  }
  .advantages{
    padding: 0 0 10.8em;
  }
}
@media screen and (max-width: 992px) {
  .advantages{
    font-size: .9rem;
    padding: 0;
  }
  .advantages-text{
    grid-row: 2;
    grid-column: 1/3;
  }
  .advantages-list{
    border-bottom: none;
  }
}

@media screen and (max-width: 768px) {
  .advantages__title{
    font-size: 2.25em;
    margin: 0 0 1.66em;
  }
  .advantages{
    font-size: .8rem;
  }
  .advantages-index {
    font-size: 3.75em;
    margin: 0 0 .16em;
  }
  .advantages-text{
    font-size: 1.75em;
  }
  .advantages-list{
    grid-template-columns: repeat(2, 1fr);
  }
  .advantages-list__item{
    padding: 3.5em 2em 5.5em;
    border-right: none;
    border-left: none;          
    &:nth-of-type(2),
    &:nth-of-type(5),
    &:nth-of-type(8),
    &:nth-of-type(11),
    &:nth-of-type(14){
      margin: 0;
    }
    &:nth-of-type(even){
      border-left: 1px solid var(--color-7);
    }
  }
}
@media screen and (max-width: 600px) {

}
</style>