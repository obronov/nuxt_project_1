<template>
  <div>
    <div class="main-screen">
      <MainScreenFranchise v-if="!emptyFranchise" :info="franchise.main_screen"/>  
    </div>
    <VideoFranchise v-if="!emptyFranchise && franchise.promo.video_id" :video="franchise.promo"/>
    <hr class="block-delimeter">
    <client-only>
      <MapRegions v-if="!emptyFranchise" :map="franchise.map"/>
    </client-only>
    <Steps v-if="!emptyFranchise" :steps="franchise.step"/>
    <div class="quiz-block" v-if="!emptyQuiz">
      <Quiz  :quiz="quiz"/>
    </div>
    <PartnerBenefits v-if="!emptyFranchise" :advantages="franchise.franchise_advantage"/>
    <hr class="block-delimeter">
    <div class="reviews" v-if="!emptyFranchise">
      <BlockVideo class="container" :video="franchise.video_comment"/> 
    </div>
    <hr class="block-delimeter">
    <FormFedback :request="request" v-if="!emptyForm" :formHandle="formHandle" :info="form" :fields="fields" :bgBlock="'transparent'" :bgForm="'transparent'"/>
    
  </div>
</template>

<script>
import BlockVideo from '@/components/blog/BlockVideo'
export default {
  components:{
    BlockVideo
  },
data(){
    return{
      formHandle: 'franchise',
      request: 'consult',
      franchise: {},
      quiz: {},
      meta: {},
      form: {},
      fields:{
        "name":{
          "value": this.$store.state.contactPerson,
          "error": '',
          "type": 'text',
          "required": true
        },
        "phone":{
          "value": this.$store.state.contactPhone,
          "error": '',
          "type": 'tel',
          "required": true
        },
        "email":{
          "value": this.$store.state.contactEmail,
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
        "comment":{
          "value": '',
          "error": '',
          "type": 'text'
        }
      }      
    }
  },
  head(){
    try {
      return{
        title: `${this.meta.franchise.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.meta.franchise.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.meta.franchise.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.meta.franchise.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.meta.franchise.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.meta.franchise.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }
  },
  async fetch() {
    let lang = this.$store.state.lang;

    try {
      /* this.form = await fetch(process.env.fakeUrl + 'form_franchise') */
      this.form = await fetch(process.env.baseUrl + `form_info/${this.formHandle}?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.meta = await fetch(process.env.baseUrl + `meta_page?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      /* this.franchise = await fetch(process.env.fakeUrl + 'franchise') */
    this.franchise = await fetch(process.env.baseUrl + `franchise?lang=${lang}`)
    .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      /* this.quiz = await fetch(process.env.fakeUrl + 'quiz') */
      this.quiz = await fetch(process.env.baseUrl + `quiz?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }
  },
  computed:{
    emptyFranchise(){
      for (let key in this.franchise) {
        return false;
      }
      return true;
    },
    emptyQuiz(){
      for (let key in this.quiz) {
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
  },
  updated() {
    this.$nextTick(() => {
      if(this.$route.hash) {
        const el = document.querySelector(this.$route.hash);
        el && el.scrollIntoView();
      }
    })
  }
}

</script>

<style lang='scss' scoped>
  .main-screen{
    background: var(--color-4);
  }
  .quiz-block{
    font-size: 1rem;
    padding:13.6em 0 17em;
  }
  .reviews{
    font-size: 1rem;
    padding: 11.6em 0 6.3em;
  }
  @media screen and (max-width: 1100px) {
    .reviews,
    .quiz-block{
      font-size: .8rem;
    }
  }
  @media screen and (max-width: 992px) {
    .reviews,
    .quiz-block{
      font-size: .7rem;
    }
  }
  @media screen and (max-width: 768px) {
    .reviews,
    .quiz-block{
      font-size: 0.6rem;
    }
  }
  @media screen and (max-width: 600px) {
    .quiz-block{
      font-size: 0.5rem;
      padding: 5.4em 0 6.4em;
    }
    .reviews{
      font-size: 0.5rem;
      padding: 4em 0 12em;
    }
  }
</style>