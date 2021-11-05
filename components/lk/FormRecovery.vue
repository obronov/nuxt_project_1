<template>
  <div class='lk-form'>
    <div class="lk-form__title">{{form.info.title}}</div>
    <form class="lk-form__form" action="/" @submit.prevent="onSubmit($event)">
      <div class="lk-form-group" v-for="(item, index) in formLocal" :key="index">
        <div class="lk-form-group__inner">
          <input 
            :placeholder="item.placeholder"
            :type="item.type"
            class="lk-form-control"
            :name="index"
            >
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

export default {
  data(){
    return{
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

      function printError(errorMsg, error){
       for (const key in errorMsg) {
         if (Object.hasOwnProperty.call(errorMsg, key)) {
           const element = errorMsg[key];
           self.error = element[0];
         }
       }
      }

      let response = await fetch(process.env.baseUrl + `user/recovery_request`, {
        method: 'POST',
        body: data
      });

      if (!response.ok) {
        throw new Error(`Ошибка по адресу ${response.url}, статус ошибки ${response.status}`);
      }else{
        let responseJson = await response.json(); 

        if(responseJson.result == "success"){
          if(responseJson.type == 'email'){
            self.error = '';
            self.success = responseJson.message;
          }else{
            this.$router.push({query:{changePassword: true}});
          }
        }else{
          printError(responseJson.message);
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