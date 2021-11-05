<template>
  <div class="lk">
    <div class="lk__inner" :class="{isMobile: !$device.isDesktop}">
      <figure class="lk-info" v-if="(!emptyLkInfo && $route.path== '/lk/profile' && !$device.isDesktop) || (!emptyLkInfo && $device.isDesktop)">
        <div class="avatar" v-if="lkInfo[0].img_user">
          <img class="avatar__img" :src="lkInfo[0].img_user" :alt="lkInfo[0].alt_img_user">
          <div class="change-avatar" tabindex="0">
            <div class="change-avatar__icon">
              <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.09 1.55556L10.4625 3.11111H13.5V12.4444H1.5V3.11111H4.5375L5.91 1.55556H9.09ZM9.75 0H5.25L3.8775 1.55556H1.5C0.675 1.55556 0 2.25556 0 3.11111V12.4444C0 13.3 0.675 14 1.5 14H13.5C14.325 14 15 13.3 15 12.4444V3.11111C15 2.25556 14.325 1.55556 13.5 1.55556H11.1225L9.75 0ZM7.5 5.44444C8.7375 5.44444 9.75 6.49444 9.75 7.77778C9.75 9.06111 8.7375 10.1111 7.5 10.1111C6.2625 10.1111 5.25 9.06111 5.25 7.77778C5.25 6.49444 6.2625 5.44444 7.5 5.44444ZM7.5 3.88889C5.43 3.88889 3.75 5.63111 3.75 7.77778C3.75 9.92444 5.43 11.6667 7.5 11.6667C9.57 11.6667 11.25 9.92444 11.25 7.77778C11.25 5.63111 9.57 3.88889 7.5 3.88889Z" fill="white"/>
              </svg>
            </div>
            <div class="change-avatar__file-info">
              <form action="/" method="post" class="change-avatar__file-info-inner">
                <label class="change-avatar__file" >
                  <input type="file"  name="image_input" tabindex="0" @change="updateAvatar($event)" accept="image/jpeg, image/png, image/jpg">
                  <span>Выбрать файл</span>
                </label>
                <div class="change-avatar__requirements">
                  JPG или PNG. Максимальный размер 800КБ
                </div>
              </form>
            </div>
          </div>
        </div>
        <figcaption class="avatar__caption">{{lkInfo.name}}</figcaption>
      </figure>
      <nav class="lk-menu" :class="{'isShow': showMenu}">
        <button class="btnMenu" v-if="!$device.isDesktop" type="button" @click="showMenu = !showMenu">
          <svg v-if="showMenu" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.3756 10L0 18.3756L1.6244 20L10 11.6244L18.3756 20L20 18.3756L11.6244 10L20 1.6244L18.3756 0L10 8.3756L1.6244 0L0 1.6244L8.3756 10Z" />
          </svg>
          <svg v-if="!showMenu" width="11" height="36" viewBox="0 0 11 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 35L10 18L1 1" stroke="#F7F7F7" stroke-linecap="round"/>
          </svg>
        </button>
        <ul class="lk-menu__items">
          <li class="lk-menu__item" v-for="(item, index) in menu" :key="index">
            <NuxtLink class="lk-menu__link" :to="item.alias">
              {{item.name}}
              <svg v-if="item.alias == '/lk/notifications' && $store.state.numberNotifications" width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.2744 15.5304L19.0342 13.2902V10.3225C19.0316 8.27163 18.2687 6.29456 16.893 4.77359C15.5172 3.25262 13.6264 2.29579 11.586 2.08813V0.391602H9.93089V2.08813C7.89056 2.29579 5.99971 3.25262 4.62396 4.77359C3.24821 6.29456 2.48529 8.27163 2.48272 10.3225V13.2902L0.242479 15.5304C0.0872682 15.6856 4.68716e-05 15.896 0 16.1155V18.5982C0 18.8177 0.0871905 19.0282 0.242391 19.1834C0.397591 19.3386 0.608088 19.4258 0.827574 19.4258H6.62059V20.0688C6.60259 21.1187 6.97264 22.1383 7.65984 22.9323C8.34704 23.7262 9.30305 24.2386 10.3447 24.3714C10.92 24.4284 11.5009 24.3644 12.05 24.1835C12.5991 24.0026 13.1042 23.7087 13.5329 23.3209C13.9616 22.933 14.3044 22.4597 14.5392 21.9314C14.774 21.4031 14.8957 20.8315 14.8963 20.2534V19.4258H20.6893C20.9088 19.4258 21.1193 19.3386 21.2745 19.1834C21.4297 19.0282 21.5169 18.8177 21.5169 18.5982V16.1155C21.5169 15.896 21.4297 15.6856 21.2744 15.5304ZM13.2412 20.2534C13.2412 20.9118 12.9796 21.5433 12.514 22.0089C12.0484 22.4745 11.4169 22.7361 10.7585 22.7361C10.1 22.7361 9.46851 22.4745 9.00291 22.0089C8.53731 21.5433 8.27574 20.9118 8.27574 20.2534V19.4258H13.2412V20.2534ZM19.8618 17.7707H1.65515V16.4581L3.89539 14.2179C4.0506 14.0627 4.13782 13.8523 4.13787 13.6328V10.3225C4.13787 8.5666 4.83539 6.88262 6.07699 5.64102C7.3186 4.39942 9.00257 3.7019 10.7585 3.7019C12.5143 3.7019 14.1983 4.39942 15.4399 5.64102C16.6815 6.88262 17.379 8.5666 17.379 10.3225V13.6328C17.3791 13.8523 17.4663 14.0627 17.6215 14.2179L19.8618 16.4581V17.7707Z"/>
              </svg>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="lk-content">
        <nuxt-child/>
      </div>      
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  middleware({ store, redirect }) {
    if (!store.state.authToken) {
      return redirect('/auth')
    }
  },
  data(){
    return{
      showMenu: false,
      lkInfo:{},
      notifications:{},
      menu:[
        {
          name: "Профиль",
          alias: "/lk/profile"
        },
        {
          name: "Мое оборудование",
          alias: "/lk/my_equipment"
        },
        {
          name: "Техподдержка",
          alias: "/lk/support"
        },
        {
          name: "Дополнительное оборудование",
          alias: "/lk/optional_equipment"
        },
        {
          name: "Обучение",
          alias: "/lk/education"
        },
        {
          name: "Уведомления",
          alias: "/lk/notifications"
        }
      ]
      

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
      this.lkInfo = await this.fetchLkAuth(process.env.baseUrl + 'lk_info ');
      /* this.lkInfo = await fetch(process.env.fakeUrl + 'lk_info')
      .then(res => res.json()) */

    } catch (error) {
      console.error(`lkInfo Страница ${this.$route.fullPath}: `,  error)
    }


    try {
      this.notifications = await this.fetchLkAuth(process.env.baseUrl + 'lk_notifications ');
      /* this.notifications = await fetch(process.env.fakeUrl + 'lk_notifications')
      .then(res => res.json()) */

      this.getNumberNotifications(this.notifications.list);
      
    } catch (error) {
      console.error(`notifications Страница ${this.$route.fullPath}: `,  error)
    }

  },
  computed:{
    emptyLkInfo(){
      for (let key in this.lkInfo[0]) {
        return false;
      }
      return true;
    }
  },
  methods:{
    async updateAvatar(file){
      let self = this;
      let formData = new FormData();

      formData.append('image_input', file.target.files[0]);

      let response = await fetch(process.env.baseUrl + `lk_change_image`, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${self.$store.state.authToken}`
        }
      });

        if (!response.ok) {
          throw new Error(`Ошибка по адресу ${response.url}, статус ошибки ${response.status}`);
        }else{
          let responseJson = await response.json(); 
 
          if(responseJson.result == "success"){
            self.lkInfo[0].img_user = URL.createObjectURL(file.target.files[0]);
          }else{
            printError(responseJson.message);
          }
        }
    }
  },
  watch: {
    $route() {
      this.showMenu = false;
    }
  }
}

</script>

<style lang='scss'>
@import '@/theme/default/scss/lk.scss';

</style>