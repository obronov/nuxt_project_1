<template>
  <div class='profile' v-if="!emptyProfile">
    <h1 class='lk-title lk-title_profile'>{{profile.title}}</h1>
    <ul class="profile__items">
      <li class="profile__item">
        <div class="profile__name">Название организации</div>
        <div class="profile__value">{{profile.list[0].name_organization}}</div>
      </li>
      <li class="profile__item">
        <div class="profile__name">Юридический адрес</div>
        <div class="profile__value">{{profile.list[0].legal_address}}</div>
      </li>
      <li class="profile__item">
        <div class="profile__name">Фактический адрес</div>
        <div class="profile__value">{{profile.list[0].actual_address}}</div>
      </li>
      <li class="profile__item">
        <div class="profile__name">Контактное лицо</div>
        <div class="profile__value">{{profile.list[0].contact_person}}</div>
      </li>
      <li class="profile__item">
        <div class="profile__name">Телефон</div>
        <div class="profile__value">
          <div class="profile__value_phone">
            <div>{{profile.list[0].phone}}</div>
            <div class="change-phone" tabindex="0">
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0456 0.671672L18.2448 0.472464C18.3947 0.322612 18.5727 0.203761 18.7685 0.122695C18.9644 0.0416299 19.1743 -6.20052e-05 19.3863 6.92141e-08C19.5983 6.21436e-05 19.8082 0.041877 20.004 0.123057C20.1998 0.204237 20.3777 0.323193 20.5276 0.473132C20.6774 0.623071 20.7962 0.801058 20.8773 0.99693C20.9584 1.1928 21.0001 1.40272 21 1.61471C20.9999 1.82669 20.9581 2.03659 20.8769 2.23241C20.7958 2.42823 20.6768 2.60615 20.5269 2.756L20.3277 2.95387C20.6684 3.33606 20.8501 3.83412 20.8354 4.34596C20.8208 4.8578 20.6109 5.34464 20.2488 5.70669L6.48918 19.4681C6.40317 19.5537 6.29548 19.6142 6.17768 19.6432L0.829984 20.9802C0.718073 21.0081 0.600856 21.0065 0.489727 20.9757C0.378598 20.9448 0.277337 20.8858 0.195788 20.8042C0.114239 20.7227 0.055175 20.6214 0.0243383 20.5103C-0.00649835 20.3991 -0.00805907 20.2819 0.0198079 20.17L1.35673 14.8221C1.38598 14.7048 1.44651 14.5976 1.53187 14.5119L14.4225 1.62092C14.2936 1.53018 14.1367 1.48792 13.9797 1.50162C13.8226 1.51532 13.6754 1.5841 13.5642 1.69579L9.16303 6.09842C9.10088 6.16057 9.0271 6.20987 8.94589 6.24351C8.86469 6.27715 8.77765 6.29446 8.68976 6.29446C8.60186 6.29446 8.51483 6.27715 8.43363 6.24351C8.35242 6.20987 8.27864 6.16057 8.21649 6.09842C8.15434 6.03627 8.10504 5.96248 8.0714 5.88127C8.03776 5.80007 8.02045 5.71303 8.02045 5.62513C8.02045 5.53724 8.03776 5.4502 8.0714 5.36899C8.10504 5.28779 8.15434 5.214 8.21649 5.15185L12.6203 0.750553C12.9826 0.388255 13.4698 0.178359 13.9819 0.163939C14.4941 0.149519 14.9923 0.331669 15.3744 0.673009C15.7417 0.344702 16.217 0.163106 16.7097 0.162859C17.2024 0.162613 17.6779 0.343732 18.0456 0.671672ZM17.1846 1.69579C17.0592 1.57047 16.8892 1.50007 16.712 1.50007C16.5347 1.50007 16.3647 1.57047 16.2394 1.69579L2.60676 15.3262L1.58535 19.4133L5.67232 18.3918L19.3049 4.76145C19.3672 4.69936 19.4166 4.62559 19.4503 4.54437C19.484 4.46316 19.5013 4.37609 19.5013 4.28817C19.5013 4.20024 19.484 4.11317 19.4503 4.03196C19.4166 3.95074 19.3672 3.87698 19.3049 3.81488L17.1859 1.69579H17.1846Z" fill="#413F3E"/>
              </svg>
              <div class="change-phone__info">
                В случае смены телефона обратитесь в чат техподдержки
              </div>
            </div>
          </div>          
        </div>        
      </li>
      <li class="profile__item">
        <div class="profile__name">Email</div>
        <div class="profile__value">{{profile.list[0].email}}</div>
      </li>
    </ul>
    <ChangePasswordLK class="lk-form_profile" :form="formChangePasswordLK"/>
  </div>
</template>

<script>
import ChangePasswordLK from '@/components/lk/ChangePasswordLK'

export default {
  components:{
    ChangePasswordLK
  },
  data(){
    return{
      profile: this.$store.state.profile,
      formChangePasswordLK: {
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
          }
        }
      }
    }
  },
  head(){
    try {
      return{
        title: `Профиль`,
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
  computed:{
    emptyProfile(){
      for (let key in this.profile) {
        return false;
      }
      return true;
    }
  }
}

</script>

<style lang='scss'>
@import '@/theme/default/scss/lk.scss';

</style>