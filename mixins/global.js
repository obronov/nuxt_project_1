export default{
  methods:{
    fetchLkAuth(url){
      return fetch(url,{
        headers: {
          'Authorization': 'Bearer ' + this.$store.state.authToken
        }
      })
      .then(res => res.json())
    },
    getNumberNotifications(list){
      let number = 0;
      if(list != undefined && list.length > 0){
        list.forEach(element => {
          if(element.read == 'n' && element.description){
            number+=1;
          }
        });
        this.$store.commit('setNumberNotifications', number);
      }
    },
    checkEquality(item){
      let self = this;
      let valueItem = document.querySelector('.lk-form-control[name=password_repeat]').value;
      let valuePassword = document.querySelector('.lk-form-control[name=password]').value;

      if(valueItem && valuePassword){
        if(valueItem != valuePassword){
          self.submitForm = false;
          self.success = '';
          self.error = 'Пароли не совпадают';          
        }else{
          self.submitForm = true;
          self.error = '';
          self.success = 'Пароли совпадают';
        }
      }else{
        self.submitForm = false;
        self.error = '';
        self.success = '';
      }

    },
    showPassword(item){
      if(item.type == 'password'){
        return item.type = 'text'
      }
      if(item.type == 'text'){
        return item.type = 'password'
      }
    },
    scrollToTop(){
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    scrollToForm(){
      let form = document.querySelector('.feedback__form').offsetTop;

        window.scrollTo({
          top: form,
          behavior: "smooth"
        });
    },
    showModalCall(){
      this.$store.commit('showModal', 'formCall');
    },
    showModalApp(){
      this.$store.commit('showModal', 'formApp');
    },
    showModalOrder(product){
      this.$store.commit('showModal', 'formOrder');
      this.$store.commit('setProductId', product.id);
      this.$store.commit('setProductName', product.name);
    },
    async onSubmit(event, params){
      let self = this;
      let data = new FormData(event.target);

      data.append('page', self.$route.path);

      function resetError(form){
        for (const key in form) {
          if (Object.hasOwnProperty.call(form, key)) {
            const element = form[key];
            element.error = '';
          }
        }
      }

      function printError(error, form){
        for (const key in error) {
          if (Object.hasOwnProperty.call(error, key)) {
            const element = error[key];
            let text = '';

            element.forEach(element => {
              text += ' ' + element;
            });

            try {
              form[key].error = text;
            } catch (error) {
              console.error(`В объекте fields отсутствует поле ${key}`)
            }
            
          }
        }
      }

      let response = await fetch(process.env.baseUrl + `request/${params.request}?lang=${self.$store.state.lang}&form_handle=${params.form_handle}`, {
        method: 'POST',
        body: data
      });

      if (!response.ok) {
        throw new Error(`Ошибка по адресу ${response.url}, статус ошибки ${response.status}`);
      }else{
        let responseJson = await response.json(); 

        if(responseJson.result == "success"){
          self.$store.commit('setSuccessMsg', responseJson.message);
          self.$store.commit('showModal', 'successMsg');

          resetError(self.form);
          event.target.reset();
          try {
            self.form.file.fileName = '';
          } catch (error) {
            console.log('Поле file отсутствует')
          }
          
        }else{
          resetError(self.form);
          printError(responseJson.message, self.form);
        }
      }
    }
  }
}