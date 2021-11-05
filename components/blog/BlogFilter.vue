<template>
  <div class="filter-wrap">
    <ul class="filter">
      <li class="filter__item">
        <NuxtLink class="filter__link" :class="{active: $route.name == 'about-blog' && !$route.query.handle}" :to="`/about/blog`" >{{blog.tag_all_title}}</NuxtLink>
      </li>
      <li class="filter__item" v-for="(item, index) in blog.hashtag_list" :key="index">
        <NuxtLink class="filter__link" :class="{active: $route.query.handle == item.alias}" :to="`/about/blog?handle=${item.alias}`" >
          {{item.title}}
        </NuxtLink>
      </li>  
    </ul>
  </div>
</template>

<script>

export default {
  props:{
    blog: Object
  }
}

</script>

<style lang='scss' scoped>
.filter-wrap{
  overflow: hidden;
  font-size: 1rem;  
  margin: 4em 0 10.3em;
}
.filter{  
  font-size: 1rem;  
  padding: 1.5em 2em;
  border-bottom: 1px solid var(--color-5);
  border-top: 1px solid var(--color-5);
  display: flex;
  flex-flow: row nowrap;
  overflow: auto;
  &::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
}
.filter__item{
  padding: 0 4.7em;
  margin: 0;
  position: relative;  
  text-align: center;
  /* flex: 1 1 100px; */
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: center;
  &:before{
    display: none;
  }
  &:after{
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background: var(--color-5);
  }
  &:first-of-type{
    padding: 0 2em 0 0;
    justify-content: flex-start;
  }
  &:last-of-type{
    padding: 0 0  0 2em;
    justify-content: flex-end;
    &:after{
      display: none;
    }
  }
}
.filter__link, .filter__link:visited{
  text-decoration: none;
  font-size: 2.4em;
  line-height: 120%;
  color: var(--color-4);
  transition: .3s;
  max-width: 185px;
  &:hover,
  &:focus{
    color: var(--color-1);
  }
  &.nuxt-link-exact-active,
  &.active{
    font-weight: 600;
    color: var(--color-1);
  }
}
@media screen and (max-width: 1100px) {
  .filter, .filter-wrap{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .filter, .filter-wrap{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .filter, .filter-wrap{
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 600px) {
  .filter, .filter-wrap{
    font-size: 0.5rem;
  }
  .filter__item{
    padding: 0 2.7em;
  }
}
</style>