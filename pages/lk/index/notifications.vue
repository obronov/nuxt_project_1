<template>
  <div>
    <div class="notifications" v-if="!emptyNotifications">
      <h1 class="lk-title" v-if="!$device.isDesktop">{{notifications.title}}</h1>
      <div class="notifications__inner">
        <div class="notifications__header">
          <h1 class="lk-title" v-if="$device.isDesktop">{{notifications.title}}</h1>
          <div class="notifications__number" v-if="$store.state.numberNotifications">
            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.2744 15.5304L19.0342 13.2902V10.3225C19.0316 8.27163 18.2687 6.29456 16.893 4.77359C15.5172 3.25262 13.6264 2.29579 11.586 2.08813V0.391602H9.93089V2.08813C7.89056 2.29579 5.99971 3.25262 4.62396 4.77359C3.24821 6.29456 2.48529 8.27163 2.48272 10.3225V13.2902L0.242479 15.5304C0.0872682 15.6856 4.68716e-05 15.896 0 16.1155V18.5982C0 18.8177 0.0871905 19.0282 0.242391 19.1834C0.397591 19.3386 0.608088 19.4258 0.827574 19.4258H6.62059V20.0688C6.60259 21.1187 6.97264 22.1383 7.65984 22.9323C8.34704 23.7262 9.30305 24.2386 10.3447 24.3714C10.92 24.4284 11.5009 24.3644 12.05 24.1835C12.5991 24.0026 13.1042 23.7087 13.5329 23.3209C13.9616 22.933 14.3044 22.4597 14.5392 21.9314C14.774 21.4031 14.8957 20.8315 14.8963 20.2534V19.4258H20.6893C20.9088 19.4258 21.1193 19.3386 21.2745 19.1834C21.4297 19.0282 21.5169 18.8177 21.5169 18.5982V16.1155C21.5169 15.896 21.4297 15.6856 21.2744 15.5304ZM13.2412 20.2534C13.2412 20.9118 12.9796 21.5433 12.514 22.0089C12.0484 22.4745 11.4169 22.7361 10.7585 22.7361C10.1 22.7361 9.46851 22.4745 9.00291 22.0089C8.53731 21.5433 8.27574 20.9118 8.27574 20.2534V19.4258H13.2412V20.2534ZM19.8618 17.7707H1.65515V16.4581L3.89539 14.2179C4.0506 14.0627 4.13782 13.8523 4.13787 13.6328V10.3225C4.13787 8.5666 4.83539 6.88262 6.07699 5.64102C7.3186 4.39942 9.00257 3.7019 10.7585 3.7019C12.5143 3.7019 14.1983 4.39942 15.4399 5.64102C16.6815 6.88262 17.379 8.5666 17.379 10.3225V13.6328C17.3791 13.8523 17.4663 14.0627 17.6215 14.2179L19.8618 16.4581V17.7707Z"/>
            </svg>
            <span>У вас {{$store.state.numberNotifications}} непрочитанных уведомлений</span>
          </div>
        </div>
        <div class="notifications-wrap-list">
          <ul class="notifications-list">
            <li class="notifications-list__item" v-if="item.description" v-for="(item, index) in notifications.list" :key="index">
              <div class="notice" :class="{read: item.read == 'n'}">
                <button class="notice__title" type="button" @click="selectedNotice = item.id, sendId(item)">
                  <svg class="iconMail" v-if="item.read == 'n'" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 0H2C0.897 0 0 0.897 0 2V14C0 15.103 0.897 16 2 16H18C19.103 16 20 15.103 20 14V2C20 0.897 19.103 0 18 0ZM18 2V2.511L10 8.734L2 2.512V2H18ZM2 14V5.044L9.386 10.789C9.56111 10.9265 9.77733 11.0013 10 11.0013C10.2227 11.0013 10.4389 10.9265 10.614 10.789L18 5.044L18.002 14H2Z" fill="#2F2D2C"/>
                  </svg>
                  <svg class="iconMail" v-else width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.555 6.16782L10.555 0.167816C10.3908 0.0583894 10.1978 0 10.0005 0C9.80316 0 9.61023 0.0583894 9.446 0.167816L0.446 6.16782C0.308899 6.25905 0.196451 6.38273 0.118646 6.52788C0.0408404 6.67302 8.51008e-05 6.83513 0 6.99982V17.9998C0 19.1028 0.897 19.9998 2 19.9998H18C19.103 19.9998 20 19.1028 20 17.9998V6.99982C20 6.66582 19.833 6.35382 19.555 6.16782ZM10 2.20182L17.197 6.99982L10 11.7978L2.803 6.99982L10 2.20182ZM2 17.9998V8.86882L9.445 13.8318C9.60933 13.9415 9.80245 14 10 14C10.1975 14 10.3907 13.9415 10.555 13.8318L18 8.86882L17.997 17.9998H2Z" fill="#413F3E"/>
                  </svg>
                  {{item.title}}
                  <svg v-if="selectedNotice == item.id" class="iconOpen" width="27" height="12" viewBox="0 0 27 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 11L13.5 2L26 11" stroke="#2F2D2C" stroke-width="2"/>
                  </svg>
                </button>
                <time class="notice__time" 
                  :datetime="dateTimeFormat(item)">
                  {{ new Date(item.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'}) }}
                </time>
                <transition name='fade' mode="out-in">
                  <div class="notice__description" v-if="selectedNotice == item.id" v-html="item.description"></div>
                </transition>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
data(){
    return{
      selectedNotice: '',
      count: 6,
      notifications: {}
    }
  },
  head(){
    try {
      return{
        title: `Уведомления`,
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
      /* this.notifications = await this.fetchLkAuth(process.env.baseUrl + 'lk_notifications '); */
      this.notifications = await fetch(process.env.fakeUrl + 'lk_notifications')
      .then(res => res.json())

      this.getNumberNotifications(this.notifications.list);
      
    } catch (error) {
      console.error(`notifications Страница ${this.$route.fullPath}: `,  error)
    }
  },
  computed:{
    emptyNotifications(){
      for (let key in this.notifications) {
        return false;
      }
      return true;
    }
  },
  methods:{
    async sendId(item){
      if(item.read == 'n'){
        let self = this;
        let formData = new FormData();

        formData.append('notification_id', item.id)
        let response = await fetch(process.env.baseUrl + `lk_notifications/read`, {
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
            item.read = 'y';
            let currentNumberNotifications = self.$store.state.numberNotifications;

            if(currentNumberNotifications > 1){
              self.$store.commit('setNumberNotifications', Number(currentNumberNotifications - 1));
            }else{
              self.$store.commit('setNumberNotifications', '');
            }
            
          }
        }
      }
    },
    dateTimeFormat(item){
      let date = new Date(item.date * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'});
      let arrDate = date.split(".");

      return arrDate[2] + '-' + arrDate[1] + '-' + arrDate[0];
    }
  }
}

</script>

<style lang='scss' scoped>

</style>