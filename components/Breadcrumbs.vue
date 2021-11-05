<template>
  <ul class="breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
    <li class="breadcrumbs-item" v-for="(item, index) in crumbs" :key="index" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <NuxtLink class="breadcrumbs-link" itemprop="item" v-if="!item.last" :to="item.route">
        <span itemprop="name">{{item.name}}</span>
        <meta itemprop="position" :content="index + 1">
      </NuxtLink>
      <div class="breadcrumbs-last-item" itemprop="item" v-else>
        <span itemprop="name">{{(item.name) ? item.name : titlePage}}</span>
        <meta itemprop="position" :content="index + 1">
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  props:{
    meta: Object,
    titlePage: String
  },
  computed:{
    crumbs(){
      let self = this;
      let path = '';
      const fullPath = self.$route.fullPath;
      const params = fullPath.substring(1).split('/');
      const crumbs = [];

      params.forEach((param, index) => {
        let crumbsItem = {
          route: '',
          name: '',
          last: false
        };

        path = `${path}/${param}`

        crumbsItem.route = path;
        if(self.meta[param] != undefined){
          crumbsItem.name = self.meta[param].title;
        }

        crumbs.push(crumbsItem);

      });

      crumbs[crumbs.length  - 1].last = true;
      return crumbs
    }
  }
}

</script>

<style lang='scss' scoped>
.breadcrumbs{
  font-size: 1rem;
  margin: 0;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}
.breadcrumbs-item{
  padding: 0;
  margin: 0 3.5em 1em 0;
  &:before{
    display: none;
  }
  &:last-child{
    margin: 0 0 1em;
  }
}
.breadcrumbs-link, 
.breadcrumbs-link:visited{  
  position: relative;
  &:after{
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    background: var(--color-2);
    transition: .3s;
    position: absolute;
    bottom: .05em;
    left: 0;
  }
  &:hover:after,
  &:focus:after{
    background: transparent;
  }
}
.breadcrumbs-link, 
.breadcrumbs-link:visited,
.breadcrumbs-last-item{
  display: inline-block;
  font-size: 1.8em;
  line-height: 122%;
  color: var(--color-2);
  text-decoration: none;

}
 @media screen and (max-width: 1200px) {
  .breadcrumbs{
    font-size: .8rem;
  }
  .breadcrumbs-item{
    margin: 0 2.5em 1em 0;
  &:before{
    display: none;
  }
  &:last-child{
    margin: 0 0 1em;
  }
}
}

</style>