<template>
  <div class='lk-form'>
    <div class="lk-form__title">{{form.info.title}}</div>
    <form class="lk-form__form" action="/" @submit.prevent="onSubmit($event)">
      <div class="lk-form-group" v-for="(item, index) in formLocal" :key="index">
        <div class="lk-form-group__inner isPassword" >
          <input 
            :placeholder="item.placeholder"
            :type="item.type"
            class="lk-form-control"
            :name="index"
            :ref="index"
            v-model="item.value"
            @input="checkEquality($event)"
            >
          <button v-if="index == 'password' || index == 'password_repeat'" class="btnPassword" type="button" @click="showPassword(item)">
            <svg v-if="item.type == 'password'" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.28177 3.5975C4.21204 3.53222 4.12927 3.48044 4.03818 3.44511C3.94708 3.40978 3.84944 3.3916 3.75084 3.3916C3.65224 3.3916 3.5546 3.40978 3.46351 3.44511C3.37241 3.48044 3.28964 3.53222 3.21992 3.5975C3.15019 3.66278 3.09489 3.74027 3.05715 3.82556C3.01942 3.91085 3 4.00226 3 4.09458C3 4.18689 3.01942 4.2783 3.05715 4.36359C3.09489 4.44888 3.15019 4.52638 3.21992 4.59166L8.46917 9.50346C5.8694 11.1637 4.05951 13.7039 3.42089 16.5889C3.4008 16.6792 3.3999 16.7723 3.41823 16.8629C3.43656 16.9535 3.47378 17.0398 3.52774 17.1169C3.58171 17.194 3.65137 17.2605 3.73275 17.3124C3.81414 17.3643 3.90565 17.4007 4.00206 17.4195C4.09847 17.4383 4.19789 17.4392 4.29465 17.422C4.3914 17.4048 4.4836 17.37 4.56598 17.3195C4.64836 17.2689 4.7193 17.2037 4.77475 17.1275C4.83021 17.0513 4.86909 16.9657 4.88918 16.8754C5.17547 15.5786 5.7352 14.3483 6.53559 13.2566C7.33598 12.1649 8.36096 11.2336 9.55052 10.5173L11.9247 12.7387C11.3059 13.1542 10.7911 13.6908 10.416 14.3113C10.0409 14.9317 9.81445 15.6211 9.7524 16.3317C9.69034 17.0423 9.79415 17.757 10.0566 18.4262C10.3191 19.0955 10.734 19.7033 11.2724 20.2074C11.8109 20.7115 12.46 21.0999 13.1748 21.3457C13.8897 21.5914 14.653 21.6886 15.412 21.6305C16.1709 21.5724 16.9073 21.3604 17.57 21.0092C18.2327 20.658 18.8058 20.176 19.2496 19.5967L25.7182 25.6543C25.859 25.7861 26.05 25.8602 26.2492 25.8602C26.4483 25.8602 26.6393 25.7861 26.7801 25.6543C26.9209 25.5225 27 25.3437 27 25.1572C27 24.9708 26.9209 24.792 26.7801 24.6601L4.28327 3.5975H4.28177Z"/>
              <path d="M15.1853 11.8218L20.2291 16.544C20.1783 15.3068 19.6306 14.1331 18.6955 13.2576C17.7604 12.3821 16.5068 11.8693 15.1853 11.8218Z"/>
              <path d="M11.2963 8.18094L12.5006 9.30849C13.3166 9.11006 14.1562 9.00955 14.9992 9.0094C19.8076 9.0094 24.0835 12.2769 25.1078 16.8756C25.1484 17.0581 25.2647 17.218 25.4312 17.3202C25.5977 17.4223 25.8008 17.4584 25.9957 17.4204C26.1906 17.3824 26.3614 17.2735 26.4705 17.1176C26.5797 16.9617 26.6182 16.7716 26.5776 16.5891C25.4123 11.3586 20.538 7.60522 14.9992 7.60522C13.7169 7.60522 12.4691 7.80602 11.2963 8.18094Z"/>
            </svg>
            <svg v-else width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.9466 16.6524V16.6584C4.91288 16.7856 4.85442 16.9049 4.77457 17.0094C4.69471 17.114 4.59503 17.2018 4.48122 17.2678C4.36741 17.3338 4.24171 17.3768 4.11129 17.3942C3.98088 17.4116 3.84831 17.4031 3.72117 17.3692C2.85817 17.141 3.01034 16.1458 3.01034 16.1458L3.04438 16.0217C3.04438 16.0217 3.09644 15.8535 3.13849 15.7313C3.65233 14.2906 4.40877 12.9484 5.3751 11.7627C7.1752 9.57214 10.1967 7.3916 14.9903 7.3916C19.7859 7.3916 22.8074 9.57214 24.6035 11.7627C25.5698 12.9484 26.3263 14.2906 26.8401 15.7313C26.8833 15.8551 26.9234 15.98 26.9603 16.1058L26.9663 16.1318L26.9703 16.1398V16.1438C27.0338 16.3986 26.9946 16.6682 26.8612 16.8944C26.7278 17.1207 26.5109 17.2854 26.2572 17.3532C26.0034 17.421 25.7332 17.3863 25.5048 17.2567C25.2764 17.1271 25.108 16.913 25.036 16.6604L25.034 16.6524L25.018 16.6023C24.9044 16.248 24.7707 15.9003 24.6175 15.5611C24.2093 14.6537 23.6843 13.8035 23.0557 13.0322C21.568 11.2201 19.0831 9.39394 14.9903 9.39394C10.8975 9.39394 8.41064 11.2201 6.92491 13.0322C6.10899 14.0343 5.46916 15.1677 5.0327 16.3841C5.00796 16.4564 4.9846 16.5292 4.96262 16.6023L4.9466 16.6524Z"/>
              <path d="M9.98462 18.4045C9.98462 17.0769 10.512 15.8036 11.4508 14.8649C12.3896 13.9261 13.6628 13.3987 14.9905 13.3987C16.3181 13.3987 17.5913 13.9261 18.5301 14.8649C19.4689 15.8036 19.9963 17.0769 19.9963 18.4045C19.9963 19.7321 19.4689 21.0054 18.5301 21.9442C17.5913 22.883 16.3181 23.4104 14.9905 23.4104C13.6628 23.4104 12.3896 22.883 11.4508 21.9442C10.512 21.0054 9.98462 19.7321 9.98462 18.4045Z"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="lk-form-group">
        <button class="btn lk-btn" type="submit">{{form.info.controls.btn_name}}</button>
        <div class="lk-error" v-if="error">{{error}}</div>
        <div class="lk-success" v-if="success">{{success}}</div>
      </div>
    </form>
  </div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  data(){
    return{
      submitForm: false,
      error: '',
      success: ''
    }
  },
  props:{
    form: Object
  },
  methods:{
    
    async onSubmit(event){
      let self = this;
      let data = new FormData(event.target);

      if(self.submitForm){

        function printError(errorMsg, error){
          for (const key in errorMsg) {
            if (Object.hasOwnProperty.call(errorMsg, key)) {
              const element = errorMsg[key];
              self.error += element[0];
            }
          }
        }

        let response = await fetch(process.env.baseUrl + `lk_change_password`, {
          method: 'POST',
          body: data,
          headers: {
            'Authorization': `Bearer ${self.$store.state.authToken}`
          }
        });

        if (!response.ok) {
          throw new Error(`Ошибка по адресу ${response.url}, статус ошибки ${response.status}`);
        }else{
          let responseJson = await response.json(); 
 
          if(responseJson.result == "success"){
            self.$cookies.set('authToken', responseJson.token, {
              path: '/'
            });
            self.$store.commit('setAuthToken', responseJson.token);
            self.success = responseJson.message;
          }else{
            printError(responseJson.message);
          }
        }
      }
    }
  },
  computed:{
    formLocal(){
      let form = {};
      let self = this;

      for (const key in self.form.fields) {
        if (Object.hasOwnProperty.call(self.form.fields, key)) {
          const element = self.form.fields[key];
          form[key] = element;
          if(key == 'code'){
            form[key]['value'] = self.$route.query.code;
          }
          form[key]['placeholder'] = self.form.info.controls[key];
        }
      }

      return form;
    }
  }
}

</script>

<style lang='scss' scoped>


</style>