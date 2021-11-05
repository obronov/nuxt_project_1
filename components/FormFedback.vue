<template>
  <section class="feedback" :style="{'--bgBlock': bgBlock, '--bgForm': bgForm}">
    <div class="feedback__inner container">
      <div class="feedback__info">
        <h2 class="h1 title" v-html="info.title"></h2>
        <div class="description" v-html="info.description"></div>
      </div>
      <form class="feedback__form" action="/" @submit.prevent="onSubmit($event,{form_handle:formHandle,request:request})">
        <div class="form-group" v-for="(item, index) in form" :key="index">
          <div class="form-group__inner" v-if="index != 'file' && index != 'comment'">
            <input 
              v-model="item.value"
              :placeholder="item.placeholder"
              :type="item.type"
              class="form-control"
              :name="index"
              >
            <div class="error" v-if="item.error">{{item.error}}</div>
          </div>
          <div class="form-group__inner" v-if="index == 'file'">
            <label class="form-control_file">
              <div class="text">
                <span v-if="item.fileName">{{item.fileName}}</span>
                <span v-else class="text__default">{{info.controls.file_info}}</span>
              </div>
              <div class="btnFile">
                <svg width="11" height="22" viewBox="0 0 11 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 5V16.5C9.5 18.71 7.71 20.5 5.5 20.5C3.29 20.5 1.5 18.71 1.5 16.5V4C1.5 2.62 2.62 1.5 4 1.5C5.38 1.5 6.5 2.62 6.5 4V14.5C6.5 15.05 6.05 15.5 5.5 15.5C4.95 15.5 4.5 15.05 4.5 14.5V5H3V14.5C3 15.88 4.12 17 5.5 17C6.88 17 8 15.88 8 14.5V4C8 1.79 6.21 0 4 0C1.79 0 0 1.79 0 4V16.5C0 19.54 2.46 22 5.5 22C8.54 22 11 19.54 11 16.5V5H9.5Z" fill="#2F2D2C"/>
                </svg>
                <span>{{info.controls.file_control}}</span>
              </div>
              <input 
                :placeholder="item.placeholder"
                :type="item.type"
                :name="'file_input'"
                @change="getNameFile($event, item)"
                accept=".pdf, .doc, .docx"
                >
            </label>
            
            <div class="error" v-if="item.error">{{item.error}}</div>
          </div>
          <div class="form-group__inner" v-if="index == 'comment'">
            <textarea 
              :placeholder="item.placeholder"
              :type="item.type"
              class="form-control_textarea"
              :name="index">
            </textarea>
            <div class="error" v-if="item.error">{{item.error}}</div>
          </div>
        </div>
        <div class="form-group">
          <button class="btn" type="submit" :disabled="disabledSubmit">{{info.controls.btn_name}}</button>
        </div>
        <div class="form-group">
          <PrivacyPolicyFeedback @changeState='changeState' :text="info.controls.privacy_policy"/>
        </div>
      </form>
    </div>

  </section>
</template>

<script>
import global from "~/mixins/global";

export default {
  mixins: [global],
  props:{
    request: String,
    formHandle: String,
    info: Object,
    fields: Object,
    bgBlock: String,
    bgForm: String
  },
  data(){
    return{
      disabledSubmit: true
    }
  },
  methods:{
    changeState($event){
      this.disabledSubmit = !$event;
    },
    getNameFile(event, item){
      item.fileName = event.target.files[0].name;
    }
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
.feedback{
  font-size: 1rem;
  padding: 8.6em 0 13.9em;
  background: var(--bgBlock);
}
.feedback__inner{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 0 2em;
}
.error{
  color: var(--color-3);
  font-size: 14px;
  line-height: 130%;
}
.title{
  margin: 0 0 .57em;
  text-transform: uppercase;
}
.description::v-deep *{
  margin: 0 0 1em;
}
.feedback__form{
  background: var(--bgForm);
  padding: 4em 4.8em 6.4em 2.1em;
  font-size: 1em;
}

.form-control{
  padding: 0 .41em .125em 1.25em;
  border: none;
  border-bottom: 1px solid var(--color-5);
  color: var(--color-2);
  font-size: 2.4em;
  line-height: 121%;
  background: none;
  width: 100%;
  border-radius: 0;
}
.form-control_textarea{
  padding: 1em .41em 1em 1.25em;
  border: 1px solid var(--color-5);
  color: var(--color-2);
  font-size: 2.4em;
  line-height: 121%;
  background: none;
  width: 100%;
  resize: none;
  height: 7.04em;
  width: 100%;
}
.form-control::placeholder,
.form-control_textarea::placeholder{
  font-size: 1em;
  line-height: 121%;
  color: var(--color-2);
  opacity: .5;
}
.form-group{
  margin: 0 0 4em;
  &:last-child{
    margin: 0;
  }
}
.form-control_file{
  cursor: pointer;
  position: relative;
  padding: 0 .41em .33em 1.25em;
  border-bottom: 1px solid var(--color-5);
  color: var(--color-2);
  font-size: 2.4em;
  line-height: 121%;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 0 2em;
  align-items: end;
  &:hover .btnFile,
  &:focus-within .btnFile{
    font-weight: bold;
  }
  & input{
    width: 1px;
    height: 1px;
    opacity: 0;
    position: absolute;
  }
}
.btnFile{
  font-size: .75em;
  line-height: 122%;
  text-decoration: underline;
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 0 .45em;
  & svg{
    display: block;
    width: .45em;
    height: .91em;
  }
}
.text__default{
  opacity: .5;
}
@media screen and (max-width: 1200px) {
  .feedback{
    font-size: .9rem;
  }
}
@media screen and (max-width: 1100px) {
  .feedback{
    font-size: .8rem;
  }
}
@media screen and (max-width: 992px) {
  .feedback{
    font-size: 0.7rem;
  }
}
@media screen and (max-width: 768px) {
  .feedback{
    font-size: 0.6rem;
    padding: 6em 0 0;
  }
  .feedback__inner{
    grid-template-columns: 1fr;
  }
  .feedback__form {
    width: calc(100% + 30px);
    margin: 0 -15px;
    padding: 11.6em 3.2em 12em;
  }
  .description {
    margin: 0 0 3.6em;
  }
}
@media screen and (max-width: 600px) {
  .feedback{
    font-size: 0.5rem;
  }

  .title{
    margin: 0 0 0.72em;
  }
  .form-control{
    padding: 0 0 .5em;
    font-size: 2.8em;
  }
  .form-control_file{
    font-size: 2.8em;
    padding: 0 0 .5em;
  }
  .btnFile{
    font-size: 1em;
  }
  .form-group{
    margin: 0 0 8em;
    &:nth-last-child(-n+2){
      margin: 0 0 3.2em;
    }
  }
  .btn {
    font-size: 2.4em;
    margin: 0 auto;
    display: flex;
  }
  .error{
    font-size: 12px;
  }
}
</style>