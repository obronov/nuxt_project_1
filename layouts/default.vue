<template>
  <div class="wrapper">
    <Header v-if="!classMain"/>
    <nuxt/>
    <Footer v-if="!errorСhecking(common)" :common="common"/>
    <transition name="show-modal">
      <Modal v-if="$store.state.nameModal == 'modalVideo'" :maxWidth="851">
        <iframe class="modal-video" width="100%" height="100%" :src="`https://www.youtube.com/embed/${$store.state.modalVideoId}?autoplay=1`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Modal>
    </transition>
    <transition name="show-modal">
      <Modal v-if="$store.state.nameModal == 'formCall'" :maxWidth="834">
        <FormModal :request="requestCall" v-if="!emptyFormCall" :formHandle="formHandleCall" :info="formCall" :fields="fieldsCall"/>
      </Modal>
    </transition>
    <transition name="show-modal">
      <Modal v-if="$store.state.nameModal == 'formApp'" :maxWidth="834">
        <FormModal :request="requestApp" v-if="!emptyFormApp" :formHandle="formHandleApp" :info="formApp" :fields="fieldsApp"/>
      </Modal>
    </transition>
    <transition name="show-modal">
      <Modal v-if="$store.state.nameModal == 'formOrder'" :maxWidth="834">
        <FormOrder :request="requestOrder" v-if="!emptyFormOrder" :formHandle="formHandleOrder" :info="formOrder" :fields="fieldsOrder"/>
      </Modal>
    </transition>
    <transition name="show-modal">
      <Modal v-if="$store.state.nameModal == 'successMsg'" :maxWidth="537">
        <Success v-html="$store.state.successMsg"></Success>
      </Modal>
    </transition>
    <button class="btnToTop" type="button" @click="scrollToTop">
      <svg width="13" height="31" viewBox="0 0 13 31" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path opacity="0.5" d="M7.08084 0.290829C6.76005 -0.0299587 6.23995 -0.0299587 5.91916 0.290829L0.691622 5.51837C0.370834 5.83916 0.370834 6.35926 0.691622 6.68004C1.01241 7.00083 1.53251 7.00083 1.8533 6.68004L6.5 2.03334L11.1467 6.68004C11.4675 7.00083 11.9876 7.00083 12.3084 6.68004C12.6292 6.35925 12.6292 5.83915 12.3084 5.51837L7.08084 0.290829ZM7.32143 30.2561L7.32143 0.871666L5.67857 0.871666L5.67857 30.2561L7.32143 30.2561Z" fill="#2F2D2C"/>
      </svg>
    </button>
  </div>
</template>

<script>
import global from "~/mixins/global";
import { adaptTable } from '@/theme/default/js/common'
import Footer from '@/components/Footer'
import FormOrder from '@/components/lk/FormOrder'
export default {
  middleware: ['setLang', 'setStoreAuthToken', 'fetchProfile'],
  mixins: [global],
  name: "default",
  components:{
    Footer, FormOrder
  },
  data() {
    return {
      formHandleApp: 'application',
      formHandleOrder: 'application',
      formHandleCall: 'call',
      requestApp: 'feedback',
      requestOrder: 'feedback',
      requestCall: 'callback',
      common: {},
      formCall: {},
      fieldsCall:{
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
        "city":{
          "value": '',
          "error": '',
          "type": 'text',
          "required": true
        }
      },
      formApp: {},
      fieldsApp:{
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
      },
      formOrder: {},
      fieldsOrder:{
        "comment":{
          "value": '',
          "error": '',
          "type": 'text'
        }
      }      
    }
  },
  async fetch() {
    let lang = this.$store.state.lang;
    try {
      /* this.formApp = await fetch(process.env.fakeUrl + 'form_application') */
      this.formApp = await fetch(process.env.baseUrl + `form_info/${this.formHandleApp}?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      /* this.formOrder = await fetch(process.env.fakeUrl + 'form_order') */
      this.formOrder = await fetch(process.env.baseUrl + `form_info/${this.formHandleApp}?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      // this.formCall = await fetch(process.env.fakeUrl + 'form_call')
      this.formCall = await fetch(process.env.baseUrl + `form_info/${this.formHandleApp}?lang=${lang}`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      if(this.$store.state.common == ''){
        
        /* this.common = await fetch(process.env.fakeUrl + 'common') */
        this.common = await fetch(process.env.baseUrl + `common?lang=${lang}`)
        .then(res => res.json());
        
        this.$store.commit('setCommon', this.common);

      }else{
        this.common = this.$store.state.common;
      }
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }
  },
  methods:{    
    errorСhecking(data){
      if(data.name == 'Error' || data.name == 'Database Exception'){
        return true;
      }else{
        return false;
      }
    }
  },
  computed:{
    emptyFormApp(){
      for (let key in this.formApp) {
        return false;
      }
      return true;
    },
    emptyFormOrder(){
      for (let key in this.formOrder) {
        return false;
      }
      return true;
    },
    emptyFormCall(){
      for (let key in this.formCall) {
        return false;
      }
      return true;
    },
    classMain(){
      return ['/', '/en', '/es', '/zh'].includes(this.$route.path);
    }
  },
  mounted() {
    this.$nextTick(function () {
      adaptTable();
    });
  }
}

</script>

<style lang="scss" scoped>

</style>
