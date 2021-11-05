<template>
  <div class="subscribe">
    <div class="subscribe__title">{{info.title}}</div>
    <form class="subscribe__form" action="/" @submit.prevent="onSubmit($event,{form_handle:formHandle,request:request})">
      <div class="form-group" v-for="(item, index) in form" :key="index">
        <input 
          :placeholder="item.placeholder"
          :type="item.type"
          class="subscribe__control"
          :name="index"
          >
        <div class="error" v-if="item.error">{{item.error}}</div>
      </div>
      <div class="form-group">
        <button class="subscribe__btnSend" type="submit">
          <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4848 17.7513C29.1717 18.0457 29.1717 19.0195 28.4848 19.3139L10.5656 26.9936C9.83777 27.3055 9.11634 26.5404 9.47046 25.8322L13.1202 18.5326L9.47046 11.2331C9.11634 10.5248 9.83776 9.75975 10.5656 10.0717L28.4848 17.7513ZM14.4223 19.2826L11.6057 24.9159L24.7499 19.2826L14.4223 19.2826ZM24.7499 17.7826L11.6057 12.1494L14.4223 17.7826L24.7499 17.7826Z" fill="white"/>
          </svg>
        </button>
      </div>
    </form>
    <div class="subscribe__privacy-policy" v-html="info.controls.privacy_policy"></div>
  </div>
</template>

<script>
import global from "~/mixins/global";

export default {
  mixins: [global],
  props:{
    request: String,
    formHandle: String,
    info: Object,
    fields: Object
  },
  data(){
    return{
    }
  },
  methods:{
  },
  computed:{
    form(){
      let form = {};
      let self = this;

      for (const key in self.fields) {
        if (Object.hasOwnProperty.call(self.fields, key)) {
          const element = self.fields[key];
          form[key] = element;
          form[key]['placeholder'] = self.info.controls[key];
        }
      }

      return form;
    }
  }
}

</script>

<style lang='scss' scoped>
  .error{
    color: var(--color-3);
    font-size: 14px;
    line-height: 130%;
  }
  .subscribe {
    grid-row: 1/4;
    grid-column: 2/3;
    max-width: 400px;
    justify-self: center;
  }
  .subscribe__title{
    font-weight: normal;
    font-size: 1.6em;
    line-height: 118%;
    color: var(--color-7);
    margin: 0 0 1.31em;
  }
  .subscribe__control{
    border-radius: 0.25em;
    padding: .625em;
    color: var(--color-8);
    font-size: 1.6rem;
    line-height: 118%;
    border: none;
    width: 100%;
    opacity: 0.9;
    box-shadow: inset 4px 0px 4px rgba(0, 0, 0, 0.1), inset 0px 4px 4px rgba(0, 0, 0, 0.1);
  }
  .subscribe__control::-webkit-input-placeholder,
  .subscribe__control::-moz-placeholder,
  .subscribe__control:-ms-input-placeholder,
  .subscribe__control:-moz-placeholder,
  .subscribe__control::placeholder{
    color: var(--color-placeholder);
    font-size: 1.6em;
    line-height: 118%;
  }
  .subscribe__btnSend{
    border: none;
    padding: 0;
    background: none;
  }
  .subscribe__btnSend svg{
    width: 100%;
    height: 100%;
    display: block;
  }
  .subscribe__form{
    display: grid;
    grid-template-columns: 1fr 3.7em;
    grid-gap: 1.3em .7em;
    max-width: 265px;
  }
  .subscribe__privacy-policy{
    margin: 1.1em 0 0;
    max-width: 311px;
  }
  .subscribe__privacy-policy,
  .subscribe__privacy-policy::v-deep p{
    font-weight: normal;
    font-size: 1.2em;
    line-height: 125%;
    color: var(--color-9);
    opacity: 0.5;
  }
  .subscribe__privacy-policy::v-deep p{
    margin: 0;
  }
  .subscribe__privacy-policy::v-deep a{
    color: var(--color-7);
    &:hover,
    &:focus{
      text-decoration: none;
    }
  }
  @media screen and (max-width: 1100px) {
    .subscribe{
      grid-row: 1/2;
      max-width: 100%;
      justify-self: end;
      text-align: right;
    }
    .subscribe__form{
      margin: 0 0 0 auto;
      grid-template-columns: 1fr 4.7em;
    }
    .subscribe__privacy-policy{
      margin: 1.1em 0 auto;
      max-width: 100%;
    }
  }
  @media screen and (max-width: 768px) {
    .subscribe__control{
      font-size: 1.2rem;
    }
    .subscribe__form{
      margin: 0 auto;
      grid-template-columns: 1fr 6.2em;
    }
    .subscribe {
      grid-row: 2/3;
      justify-self: center;
      text-align: center;
      grid-column: 1/2;
    }
    .subscribe__title {
      font-size: 2.4em;
      margin: 0 0 .7em;
    }
    .subscribe__privacy-policy {
      margin: 1.2em 0 auto;
    }
    .subscribe__privacy-policy, 
    .subscribe__privacy-policy::v-deep p{
      font-size: 1.4em;
    }
  }
  @media screen and (max-width: 576px){
    .subscribe__title{
      font-size: 2em;
    }
    .subscribe__form{
      grid-template-columns: 1fr 4.6em;
    }
    .error{
      font-size: 12px;
    }
  }
</style>