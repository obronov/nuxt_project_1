<template>
  <section class="advantages" :class="{isMobile: !$device.isDesktop}">
    <div class="container">
      <h2 class="section__title" v-html="info.title"></h2>
    </div>
    <ul class="advantages-list">
      <li class="advantage" v-for="(item, index) in info.list" :key="index">
        <img class="advantage__img" :src="item.img" :alt="item.alt" loading="lazy">
        <h3 class="advantage__preview-title">
          <span>{{item.title}}</span>
        </h3>
        <div class="advantage__preview">
          <div class="advantage__text-title">{{item.title}}</div>
          <p class="advantage__text">{{item.preview_text}}</p>
        </div>      

      </li>
    </ul>
  </section>
</template>

<script>

export default {
  props:{
    info: Object
  }
}

</script>

<style lang='scss' scoped>
.advantages{
  font-size: 1rem;
  max-width: 1440px;
  margin: 12em auto 0;
}
.section__title{
  margin: 0 0 .57em;
}
.advantages-list{
  font-size: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 404px 404px;
  overflow: hidden;
  margin: 0;
}
.advantage{
  padding: 0;
  margin: 0;
  position: relative;
  cursor: default;
  &:before{
    display: none;
  }
  &:nth-of-type(2){
    grid-row: 1/3;
    grid-column: 2/3;
  }
}
.advantage__img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.isMobile .advantage__preview-title,
.advantage:hover .advantage__preview-title{
  opacity: 0;
  visibility: hidden;
}
.advantage__preview-title{
  margin: 0;
  font-weight: bold;
  transition: .5s;
  font-size: 2.4em;
  line-height: 120%;
  text-align: center;
  text-transform: uppercase;
  color: var( --color-7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr;
  align-items: center;
  justify-items: center;
  background: linear-gradient(302.87deg, rgba(0, 0, 0, 0.2) 4.75%, rgba(0, 0, 0, 0) 68.07%);
}
.advantage:nth-of-type(2) .advantage__preview-title{
  grid-template-rows: 1fr 1fr;
}
.advantage:nth-of-type(2) .advantage__preview-title span{
  grid-row: 2/3;
}

.isMobile .advantage__preview,
.advantage:hover .advantage__preview{
  opacity: 1;
  visibility: visible;
}
.advantage__preview{
  transition: .5s;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(231, 124, 90, .9);
  padding: 0 11.2em;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.advantage__text-title{
  color: var(--color-10);
  font-weight: bold;
  font-size: 2.4em;
  line-height: 120%;
  margin: 0 0 1.5em;
  text-transform: uppercase;
}
.advantage__text{
  color: var(--color-10);
  font-size: 2.4em;
  line-height: 150%;
  margin: 0;
}
@media screen and (max-width: 1100px) {
  .advantages{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .advantages{
    font-size: .7rem;
  }
  .advantage__preview{
    padding: 0 5.2em;
  }
}
@media screen and (max-width: 768px) {
  .advantages{
    font-size: 0.6rem;
  }
  .advantages-list{
    display: block;
  }
  .advantage:nth-of-type(2) .advantage__preview-title span{
    grid-row: 1;
  }
  .advantage__preview-title{
    display: flex;
    align-items: flex-end;
    justify-items: flex-start;
    padding: 1.25em;
  }
  .advantage:nth-of-type(2) .advantage__preview-title{
    grid-template-rows: 1fr;
  }
  .advantage__img{
    height: 280px;
  }
  .advantage__preview{
    padding: 0 3em;
  }
  .advantage{
    margin: 0 0 1em;
    &:last-of-type{
      margin: 0;
    }
  }
}
@media screen and (max-width: 600px) {
  .advantages{
    font-size: 0.5rem;
    margin: 5.4em auto 0;
  }
  .advantage__img{
    height: 180px;
  }
}
</style>