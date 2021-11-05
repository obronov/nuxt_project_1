<template>
  <div class="error">
    <div class="error__info">
      <h1 class="error__title" v-if="error.title">{{error.title}}</h1>
      <div class="error__description" v-if="error.description" v-html="error.description"></div>
      <div class="error__wrap-link" v-if="error.link">
        <NuxtLink class="error__link" :to="error.link">
          {{error.link_name}}
        </NuxtLink>
      </div>
    </div>
    <img class="error__img" :src="require('~/assets/images/design/404.png')" alt="картинка">
  </div>
</template>

<script>

export default {
  props: {
    error: Object
  }
}

</script>

<style lang='scss' scoped>
.error{
  font-size: 1rem;
  background: var(--color-4);
  overflow: hidden;  
  position: relative;
  padding: 6.2em 0 11.6em;
}
.error__title{
  font-size: 20em;
  line-height: 100.8%;
  text-transform: uppercase;
  color: var(--color-4);
  text-shadow: 3px 0 0 #F29424, 
  -3px 0 0 #F29424, 
  0 3px 0 #F29424, 
  0 -3px 0 #F29424, 
  3px 3px #F29424, 
  -3px -3px 0 #F29424, 
  3px -3px 0 #F29424, 
  -3px 3px 0 #F29424,
  15px 6px 8px rgba(0, 0, 0, 0.48);
  margin: 0 0 .115em;
}

.error__description::v-deep * {
  font-size: 2.4em;
  line-height: 150%;
  color: var(--color-7);
  margin: 0;
}
.error__description{
  max-width: 49.7em;
}
.error__info{
  max-width: 1250px;
  padding: 0 15px;
  margin: 0 auto;
}
.error__img{
  position: absolute;
  bottom: 0;
  right: 0;
  display: block;
  max-width: 80.8em;
}
.error__link, .error__link:visited{
  display: inline-block;
  font-weight: bold;
  font-size: 2em;
  line-height: 120%;
  text-transform: uppercase;
  color: var(--color-4);
  border: none;
  background: var(--color-7);
  border-radius: .2em;
  transition: .3s;
  padding: .9em 1.5em;
  text-decoration: none;
  margin: 3.8em 0 0;
  &:hover,
  &:focus{
    background: var(--color-1);
    color: var(--color-7);
  }
  &:active{
    background: var(--color-3);
    color: var(--color-7);
  }
}
@media screen and (max-width: 1200px) {
  .error{
    font-size: .9rem;
  }
}
@media screen and (max-width: 992px) {
  .error{
    font-size: 0.7rem;
    padding: 6.2em 0 0;
  }
  .error__img {
    position: static;
    margin: 3.5em auto 0;
    max-width: 100%;
  }
  .error__title {
    text-align: center;
  }
  .error__description{
    max-width: 80em;
    margin: 0 auto;
    text-align: center;
  }
  .error__wrap-link{
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .error__description::v-deep * {
    font-size: 3em;
  }
  .error__link, .error__link:visited{
    font-size: 2.4em;
  }

}
@media screen and (max-width: 768px) {
  .error{
    font-size: 0.6rem;
  }

}
@media screen and (max-width: 600px) {
  .error{
    font-size: 0.5rem;
  }
  .error__title{
    font-size: 12em;
    text-shadow: 1px 0 0 #F29424, 
    -1px 0 0 #F29424, 
    0 1px 0 #F29424, 
    0 -1px 0 #F29424, 
    1px 1px #F29424, 
    -1px -1px 0 #F29424, 
    1px -1px 0 #F29424, 
    -1px 1px 0 #F29424,
    5px 2px 6px rgba(0, 0, 0, 0.48);
    margin: 0 0 .115em;
  }
  .error__description::v-deep * {
    font-size: 2.8em;
  }
  .error__link, .error__link:visited{
    margin: 1.75em 0 0;
  }
  .error__img{
    margin: 4.2em auto 0;    
  }
}
</style>