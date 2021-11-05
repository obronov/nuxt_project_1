<template>
  <div class="job__wrap">
    <div class="job" :style="{'--bg': `url(${job.img})`}">
      <div class="container">
        <h2 class="job_title h1" v-html="job.title"></h2>
        <div class="job__description" v-html="job.description"></div>
        <NuxtLink class="job__link" :to="'/about/vacancies'">{{job.link_name}}</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    job: Object
  }
}

</script>

<style lang='scss' scoped>
.job__wrap{
  background: var(--color-2);
}
.job{
  font-size: 1rem;
  padding: 5.4em 0 9.2em;
  max-width: 1440px;
  margin: 0 auto;
  background: linear-gradient(90deg, var(--color-2) 21.56%, rgba(47, 45, 44, 0) 57.22%), var(--bg) no-repeat top right;
  background-repeat: no-repeat;
  background-size: cover;
}
.container{
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 2em;
  min-height: 33.7em;
}
.job_title{
  color: var(--color-7);
  margin: 0;
  max-width: 9.68em;
}
.job__description{
  max-width: 488px;
  align-self: end;
}
.job__description, .job__description::v-deep *{
  color: var(--color-7);
  font-size: 2.4em;
  line-height: 150%;
}
.job__link, .job__link:visited{
  text-decoration: none;
  color: var(--color-7);
  background: linear-gradient(260.74deg, #EA5644 39.35%, #F56B43 84.23%), #E77C5A;
  border-radius: .4em;
  font-size: 2em;
  line-height: 120%;
  padding: 1em 1.9em;
  display: inline-block;
  grid-column: 2/3;
  grid-row: 1/3;
  align-self: end;
  text-transform: uppercase;
  transition: .3s;
  &:hover,
  &:focus{
    background: #CC5050;
  }
  &:active{
    background: #DC5D5D;
  }
}
@media screen and (max-width: 1100px) {
  .job{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .job{
    font-size: .7rem;
  }
}
@media screen and (max-width: 768px) {
  .job{
    font-size: 0.6rem;
  }
}
@media screen and (max-width: 600px) {
  .job{
    font-size: 0.5rem;
    padding: 5.4em 0 7.2em;
    background:  var(--bg);
    background: linear-gradient(90deg, rgba(47, 45, 44, .5) 0%, rgba(47, 45, 44, .5) 100%), var(--bg);
   
  }
  .container{
    grid-template-columns: 1fr;
    grid-gap: 2.4em;
    min-height: 33.7em;
    justify-items: start;
  }
  .job__link, .job__link:visited{
    grid-column: 1/2;
    grid-row: auto;
    font-size: 2.4em;
    margin: 1.4em 0 0;
  }
  .job__description, .job__description::v-deep *{
    font-size: 2.8em;
  }
}
</style>
