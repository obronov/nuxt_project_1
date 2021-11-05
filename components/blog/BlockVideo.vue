<template>
  <section class="block-blog">
    <h2 class='section__title' v-html="video.title"></h2>
    <div class="block-blog-list-wrap">
      <ul class="block-blog-list">
        <li class="block-blog-list__item" v-for="(item, index) in video.list" :key="index">
          <BlogShortVideoPreview :video="item"/>
        </li>
      </ul>
    </div>
    <Link :routeName="'about-blog'" class="block-blog__link">{{video.link_name}}</Link>
  </section>
</template>

<script>
import Link from "@/components/utilities/Link"
export default {  
  props:{
    video: Object
  },
  components:{
    Link
  }
}

</script>

<style lang='scss' scoped>

.block-blog-list-wrap::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
.block-blog-list{
  font-size: 1rem;
  display: flex;
  flex-flow: row nowrap;
  margin: 0 -1.1em;
}
.block-blog-list__item{
  width: 33%;
  flex: none;
  padding: 0 1.1em;
  margin: 0;
  &:before{
    display: none;
  }
}

.block-blog{
  font-size: 1rem;
}
.block-blog__link{
  margin: 4em 0 0;
}
@media screen and (max-width: 1100px) {
  .block-blog{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .block-blog{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .block-blog{
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 600px) {
  .block-blog{
    font-size: 0.5rem;
  }

  .block-blog-list-wrap::-webkit-scrollbar {
    height: 0;
    width: 0;
  }
  .block-blog{
    overflow: hidden;
  }
  .block-blog-list__item{
    width: 40%;
  }
  .block-blog-list-wrap{  
    overflow-x: auto;
    scrollbar-width: none;
  }
}
</style>