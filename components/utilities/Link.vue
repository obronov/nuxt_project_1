<template>
  <div class="link-wrap">
    <NuxtLink class="link" :to="{ name: routeName, hash: routeHash}">
      <slot></slot>
      <svg class="link__icon" width="45" height="13" viewBox="0 0 45 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M44.3904 7.08084C44.7112 6.76005 44.7112 6.23995 44.3904 5.91916L39.1628 0.691623C38.842 0.370835 38.3219 0.370835 38.0011 0.691623C37.6804 1.01241 37.6804 1.53251 38.0011 1.8533L42.6479 6.5L38.0011 11.1467C37.6804 11.4675 37.6804 11.9876 38.0011 12.3084C38.3219 12.6292 38.842 12.6292 39.1628 12.3084L44.3904 7.08084ZM0 7.32143H43.8095V5.67857H0V7.32143Z" fill="#413F3E"/>
      </svg>
    </NuxtLink>
  </div>
</template>

<script>

export default {
  props:{
    routeName: String,
    routeHash: String
  }
}

</script>

<style lang='scss' scoped>
.link-wrap{
  font-size: 1rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
}
.link, .link:visited{
  text-decoration: none;
  display: inline-grid;
  align-items: center;
  grid-template-columns: 1fr auto;
  grid-gap: 0 .5em;
  font-size: 2em;
  line-height: 120%;
  font-weight: 600;
  border-left: 2px solid #E77C5A;
  color: var(--color-4);
  padding: 0 0 0 .5em;
  text-transform: uppercase;
  transition: .3s;
  &:hover,
  &:focus{
    color: var(--color-8);
  }
}
.link__icon{
  display: block;
  width: 2.25em;
  height: .65em;
}
@media screen and (max-width: 1100px) {
  .link-wrap{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .link-wrap{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .link-wrap{
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 600px) {
  .link-wrap{
    font-size: 0.5rem;
  }
  .link, .link:visited {
    font-size: 2.4em;
  }
  .link__icon {
    width: 1.9em;
    height: 0.55em;
  }
}
</style>