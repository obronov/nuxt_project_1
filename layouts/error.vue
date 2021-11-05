<template>
  <div class="wrapper">
    <Error404 v-if="!emptyError" :error="errorContent"/>
  </div>
</template>

<script>
import Error404 from '@/components/Error404'
export default {
  props: ['error'],
  components:{ Error404 },
  data(){
    return{
      errorContent: {}
    }
  },
  head(){
    try {
      return{      
        title: `${this.errorContent.title}`
      }
    } catch (error) {
    }
  },
  async fetch() {

    try {
      /* this.errorContent = await fetch(process.env.fakeUrl + '404') */
      this.errorContent = await fetch(process.env.baseUrl + 'page404')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }
  },
  computed:{
    emptyError(){
      for (let key in this.errorContent) {
        return false;
      }
      return true;
    }
  }
}
</script>

<style lang="scss" scoped>

</style>