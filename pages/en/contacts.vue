<template>
  <div>
    <Contacts v-if="!emptyContacts" :contacts="contacts"/>
    <Map v-if="!emptyMap" :map="map"/>
     <FormFedback :request="request" v-if="!emptyForm" :formHandle="formHandle" :info="form" :fields="fields" :bgBlock="'transparent'" :bgForm="'transparent'"/>
  </div>  
</template>

<script>

export default {
  data(){
    return{
      formHandle: 'contacts',
      request: 'consult',
      map: {},
      contacts: {},
      form: {},
      fields:{
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
      }
    }
  },
  head(){
    try {
      return{
        title: `${this.meta.contacts.meta_title}`,
        meta: [
          { hid: 'description', name: 'description', content: `${this.meta.contacts.meta_description}` },
          { hid: 'keywords', name: 'keywords', content: `${this.meta.contacts.meta_keywords}` },
          { hid: 'og:title', property: 'og:title', content: `${this.meta.contacts.og_title}` },
          { hid: 'og:description', property: 'og:description', content: `${this.meta.contacts.og_description}` },
          { hid: 'og:image', property: 'og:image', content: `${this.meta.contacts.og_image}` },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
        ]
      }
    } catch (error) {
    }
  },
 async fetch() {

    try {
      this.form = await fetch(process.env.fakeUrl + 'form_contacts')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.meta = await fetch(process.env.fakeUrl + `meta_page`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.map = await fetch(process.env.fakeUrl + `contact_main`)
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.contacts = await fetch(process.env.fakeUrl + 'contacts')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }


  },
  computed:{
    emptyMap(){
      for (let key in this.map) {
        return false;
      }
      return true;
    },
    emptyContacts(){
      for (let key in this.contacts) {
        return false;
      }
      return true;
    },
    emptyForm(){
      for (let key in this.form) {
        return false;
      }
      return true;
    }
  }
}

</script>

<style lang='scss' scoped>

</style>