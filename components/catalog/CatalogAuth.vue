<template>
  <section class="go-auth" :style="{'--imageBg': `url(${catalogAuth.img})`}">
  <div class="go-auth__inner" :class="{isMobile: !$device.isDesktop,isTablet: $device.isTablet}">
    <div class="container">
      <h2 class="go-auth__title" v-html="catalogAuth.title"></h2>
      <img v-if="$device.isMobile" class="go-auth__img" :src="catalogAuth.img" :alt="catalogAuth.alt" loading="lazy">
      <div class="go-auth__description" v-html="catalogAuth.description"></div>
      <div class="go-auth__wrap-link">      
        <NuxtLink class="go-auth__link" :to="{name: 'auth'}">{{catalogAuth.btn_name}}</NuxtLink>
      </div>
    </div>
  </div>
  </section>
</template>

<script>

export default {
  props:{
    catalogAuth: Object
  }
}

</script>

<style lang='scss' scoped>
.go-auth__inner{
  max-width: 1440px;
  margin: 0 auto;
  padding: 8.2em 0 9.6em;
  background: linear-gradient(268.82deg, rgba(0, 0, 0, 0.2) 1.59%, rgba(0, 0, 0, 0) 99.58%), var(--imageBg);
  background-position: right top;
  background-repeat: no-repeat;
  background-size: contain;
}
.go-auth{
  font-size: 1rem;
  background: var(--color-2);
}
.go-auth__inner.isMobile:not(.isTablet){
  background: var(--color-4);
}
.go-auth__title{
  font-size: 6.4em;
  line-height: 120%;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--color-7);
  margin: 0 0 .61em;
  max-width: 16.4em;
}
.go-auth__description{
  margin: 0 0 4.5em;
  max-width: 50em;
}
.go-auth__description::v-deep *{
  color: var(--color-7);
  font-size: 2.4em;
  line-height: 150%;
  margin: 0;
}
.go-auth__link, .go-auth__link:visited{
  display: inline-block;
  font-weight: bold;
  font-size: 2em;
  line-height: 120%;
  text-transform: uppercase;
  color: var(--color-7);
  padding: .9em 1.5em;
  transition: .3s;
  background: transparent;
  border: 2px solid var(--color-7);
  border-radius: 4px;
  text-decoration: none;
  &:hover,
  &:focus{
    background: var(--color-7);
    color: var(--color-4);
  }
}
.go-auth__img{
  display: block;
  width: calc(100% + 30px);
  margin: 0 -15px;
  max-width: none;
}
@media screen and (max-width: 1200px) {
  .go-auth{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .go-auth__description{
    max-width: 100%;
    margin: 1.8em 0 3.8em;
  }
}
@media screen and (max-width: 768px) {
  .go-auth{
    font-size: 0.6rem;
    padding: 7.6em 0 5em;
  }
  .go-auth__title{
    max-width: 100%;
    font-size: 5em;
  }
  .go-auth__description::v-deep *{
    font-size: 2.8em;
  }
  .go-auth__title{
    margin: 0 0 .32em;
  }
  .go-auth__link, .go-auth__link:visited {
    font-size: 2.4em;
    padding: 0.83em 1.66em;
  }
}
@media screen and (max-width: 600px) {
  .go-auth{
    font-size: 0.5rem;
  }

}
</style>
