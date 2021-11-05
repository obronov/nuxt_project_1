<template>
  <section class="quiz container">
    <h2 class='section__title' v-if="quiz.title" v-html="quiz.title"></h2>
    <div class="quiz__description" v-if="quiz.description" v-html="quiz.description"></div>
    <div class="quiz__content" v-if="quiz.script" v-html="quiz.script"></div>  
    
  </section>
</template>
<script>

export default {
  props:{
    quiz: Object
  }
}

</script>

<style lang='scss' scoped>
.quiz__description{
  max-width: 554px;
}
.section__title{
  margin: 0 0 0.46em;
}
.quiz__content{
  background: var(--color-11);
  box-shadow: 8px 4px 36px rgba(96, 80, 72, 0.15);
}
</style>