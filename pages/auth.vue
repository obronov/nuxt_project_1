<template>
  <div class='lk-auth'>
    <FormAuth v-if="!emptyFormAuth 
        && !$route.query.showFormRecovery 
        && !$route.query.code
        && !$route.query.changePassword"
    :form="formAuth" 
    @setShowFormRecovery="setShowFormRecovery"
    />
    <FormRecovery v-if="$route.query.showFormRecovery" :form="formRecovery"/>
    <ChangePassword  v-if="$route.query.code || $route.query.changePassword" :form="formChangePassword"/>
  </div>
</template>

<script>
import FormAuth from '@/components/lk/FormAuth'
import FormRecovery from '@/components/lk/FormRecovery'
import ChangePassword from '@/components/lk/ChangePassword'

export default {
  middleware({ store, redirect }) {
    if (store.state.authToken) {
      return redirect('/lk/profile')
    }
  },
  components:{
    FormAuth, FormRecovery, ChangePassword
  },
  data(){
    return{
      formHandleAuth: "auth",
      formHandleRecovery: "password_recovery",
      formAuth: {
        info: {},
        fields:{
          "login":{
            "value": '',
            "error": '',
            "type": 'text'
          },
          "password":{
            "value": '',
            "error": '',
            "type": 'password'
          }
        }
      },
      formRecovery: {
        info: {},
        fields:{
          "login":{
            "value": '',
            "error": '',
            "type": 'text'
          }
        }
      },
      formChangePassword: {
        info: {
          title: "Изменение пароля",
          "controls":{
            "code": "Код из смс",
            "password": "Новый пароль",
            "password_repeat": "Повторите новый пароль",
            "btn_name": "Изменить пароль"
          }
        },
        fields:{
          "password":{
            "value": '',
            "error": '',
            "type": 'password'
          },
          "password_repeat":{
            "value": '',
            "error": '',
            "type": 'password'
          },
          "code":{
            "value": '',
            "error": '',
            "type": 'text'
          }
        }
      }
    }
  },
  head(){
    try {
      return{
        title: `Личный кабинет`,
        meta: [
          { hid: 'description', name: 'description', content: `` },
          { hid: 'keywords', name: 'keywords', content: `` },
          { hid: 'og:title', property: 'og:title', content: `` },
          { hid: 'og:description', property: 'og:description', content: `` },
          { hid: 'og:image', property: 'og:image', content: `` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }
  },
  async fetch() {

    try {
      this.formAuth.info = await fetch(process.env.fakeUrl + 'form_auth')
      .then(res => res.json())

    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.formRecovery.info = await fetch(process.env.fakeUrl + 'form_password_recovery')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

  },
  methods:{
    setShowFormRecovery(data){
      this.$router.push({query:{showFormRecovery: data}});
    }
  },
  computed:{
    emptyFormAuth(){
      for (let key in this.formAuth.info) {
        return false;
      }
      return true;
    }
  }
}

</script>

<style lang='scss'>
@import '@/theme/default/scss/lk.scss';
/* 
@media screen and (max-width: 768px) {
  .lk-auth{
    font-size: .7rem;
    background-size: cover;
  }
} */
</style>