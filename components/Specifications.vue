<template>
  <div class="specifications">
    <div class="container">
      <h2 class="specifications__title h1" v-html="specifications.title"></h2>
    </div>
    <table class="specifications-table">
      <tbody>
        <tr class="specifications-table__row" v-for="(item, index) in specifications.list" :key="index">
          <td class="specifications-table__column">{{item.name}}</td>
          <td class="specifications-table__column">{{item.text}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props:{
    specifications: Object
  },
}

</script>

<style lang='scss' scoped>
.specifications{
  font-size: 1rem;
  margin: 0 0 6.15em;
}
.specifications__title{
  margin: 0 0 .75em;
  max-width: 9.14em;
}
.specifications-table__row{
  background: var(--color-10);
  transition: .3s;
  &:hover{
    background: var(--color-7);
  }
}
.specifications-table__column{
  border: none;
  
  width: 50%;
  &:first-of-type{
    border-right: .1em solid var(--color-7);
    padding: 1.375em 2.875em 1.375em 8.04em;
  }
  &:last-of-type{
    border-left: .1em solid var(--color-7);
    padding: 1.375em 4.71em 1.375em 4.04em;
  }
}
.specifications-table{
  margin: 0;
  max-width: 1440px;
  margin: 0 auto;
}
@media screen and (max-width: 1100px) {
  .specifications{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .specifications{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .specifications{
    font-size: 0.6rem;
  }
  .specifications-table__column{
    &:first-of-type,
    &:last-of-type{
      padding: .75em 2.08em;
    }
  }
}
@media screen and (max-width: 600px) {
  .specifications{
    font-size: 0.5rem;
  }
  .specifications__title{
    margin: 0 0 .6em;
  }
}
</style>