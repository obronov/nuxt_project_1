<template>
  <div class="pagination-wrap">
    <a class="pagination" :href="url" @click.prevent="clickPaginationNext()">
      <slot></slot>
      <svg class="pagination__icon" width="8" height="27" viewBox="0 0 8 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.64645 26.3536C3.84171 26.5488 4.15829 26.5488 4.35355 26.3536L7.53553 23.1716C7.7308 22.9763 7.7308 22.6597 7.53553 22.4645C7.34027 22.2692 7.02369 22.2692 6.82843 22.4645L4 25.2929L1.17157 22.4645C0.97631 22.2692 0.659727 22.2692 0.464465 22.4645C0.269203 22.6597 0.269203 22.9763 0.464465 23.1716L3.64645 26.3536ZM3.5 -2.18557e-08L3.5 26L4.5 26L4.5 2.18557e-08L3.5 -2.18557e-08Z" fill="#2F2D2C"/>
      </svg>
    </a>
  </div>
</template>

<script>

export default {
  props:{
    url: String
  },
  methods:{
    clickPaginationNext(){
      this.$emit('clickPaginationNext')
    } 
  }
}

</script>

<style lang='scss' scoped>
.pagination-wrap{
  font-size: 1rem;
  margin: 3.5em 0 9.2em;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}
.pagination, .pagination:visited{
  display: inline-grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  font-size: 2.4em;
  grid-gap: 0 0.33em;
  line-height: 150%;
  text-decoration: none;
  color: var(--color-2);
  &:hover,
  &:focus{
    font-weight: 600;
  }
}
.pagination__icon{
  display: block;
  width: .33em;
  height: 1.125em;
}
@media screen and (max-width: 1100px) {
  .pagination-wrap{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .pagination-wrap{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .pagination-wrap{
    font-size: 0.6rem;
  }
}

</style>