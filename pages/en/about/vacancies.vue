<template>
<div>
  <MainScreenJobs v-if="!emptyJobs" :info="jobs.main_screen"/>  
  <Jobs v-if="!emptyJobs" :jobs="jobs"/>  
  <FormFedback :request="request" v-if="!emptyForm" :formHandle="formHandle" :info="form" :fields="fields" :bgBlock="'#F7F7F7'" :bgForm="'#fff'"/>
</div>
</template>

<script>
import Jobs from '@/components/Jobs'
export default {
  components:{
    Jobs
  },
  data(){
    return{
      formHandle: 'job',
      request: 'vacancy',
      jobs: {},
      meta: {},
      form: {},
      fields:{
        "name":{
          "value": '',
          "error": '',
          "type": 'text',
          "required": true
        },
        "position":{
          "value": '',
          "error": '',
          "type": 'text',
          "required": true
        },
        "phone":{
          "value": '',
          "error": '',
          "type": 'tel',
          "required": true
        },
        "email":{
          "value": '',
          "error": '',
          "type": 'email',
          "required": true
        },        
        "city":{
          "value": '',
          "error": '',
          "type": 'text',
          "required": true
        },
        "file":{
          "value": '',
          "error": '',
          "type": 'file',
          "fileName": ''
        }
      }
    }
  },
  head(){
    try {
      return{
        title: `${this.meta.vacancies.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.meta.vacancies.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.meta.vacancies.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.meta.vacancies.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.meta.vacancies.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.meta.vacancies.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }
  },
 async fetch() {
    try {
      this.meta = await fetch(process.env.fakeUrl + `meta_page`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.jobs = await fetch(process.env.fakeUrl + 'jobs')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.form = await fetch(process.env.fakeUrl + 'form_job')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

  },
  computed:{
    emptyJobs(){
      for (let key in this.jobs) {
        return false;
      }
      return true;
    },
    emptyForm(){
      for (let key in this.form) {
        return false;
      }
      return true;
    }
  }
}

</script>

<style lang='scss' scoped>

</style>