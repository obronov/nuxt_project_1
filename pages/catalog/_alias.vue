<template>
  <div v-if="!emptyCatalogDetail">
    <div class="main-screen">
      <MainScreenCatalogDetail  :info="catalogDetail"/>
    </div>
    <div class="container" v-if="!emptyMeta">
      <Breadcrumbs class='breadcrumbs_catalog' :meta="meta" :titlePage="catalogDetail.meta_title"/>
    </div>
    <Specifications v-if="catalogDetail.specifications.list.length" :specifications="catalogDetail.specifications"/>
    <div class="container">
      <LinkDownload 
        v-if="catalogDetail.file_specifications.file" 
        :url="catalogDetail.file_specifications.file"
        >
        {{catalogDetail.file_specifications.btn_name}}
      </LinkDownload>
    </div>
    <div class="video-certificates container" :class="{withVideo: catalogDetail.video.video_id}">
      <h3 class="video-name" v-if="catalogDetail.video.video_id" v-html="catalogDetail.video.name"></h3>
      <VideoProduct class="video-product" v-if="catalogDetail.video.video_id" :video="catalogDetail.video"/>
      <Certificates class="certificates-catalog" v-if="catalogDetail.certificates.list.length" :certificates="catalogDetail.certificates" />
    </div>
    <hr class="block-delimeter">
    <Leasing v-if="!emptyLeasing" :leasing="leasing"/>
    <hr class="block-delimeter">
    <Faq :faq="catalogDetail.faq"/>
    <div class="reviews" v-if="catalogDetail.video_comment.list.length">
      <BlockVideo class="container" :video="catalogDetail.video_comment"/> 
    </div>
    <hr class="block-delimeter">
    <FormFedback :request="request" v-if="!emptyForm" :formHandle="formHandle" :info="form" :fields="fields" :bgBlock="'transparent'" :bgForm="'transparent'"/>
  </div>
</template>

<script>
import VideoProduct from '@/components/catalog/VideoProduct'
import MainScreenCatalogDetail from '@/components/catalog/MainScreenCatalogDetail'
import Certificates from '@/components/catalog/Certificates'
import BlockVideo from '@/components/blog/BlockVideo'
import LinkDownload from "@/components/utilities/LinkDownload"
export default {
  components:{
    BlockVideo, LinkDownload, MainScreenCatalogDetail, VideoProduct, Certificates
  },
data(){
    return{
      formHandle: 'catalog_detail',
      request: 'consult',
      catalogDetail: {},
      leasing: {},
      faq: {},
      meta: {},
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
    return{
      title: `${this.catalogDetail.meta_title}`,
      meta: [
        { hid: 'description', name: 'description', content: `${this.catalogDetail.meta_description}` },
        { hid: 'keywords', name: 'keywords', content: `${this.catalogDetail.meta_keywords}` },
        { hid: 'og:title', property: 'og:title', content: `${this.catalogDetail.og_title}` },
        { hid: 'og:description', property: 'og:description', content: `${this.catalogDetail.og_description}` },
        { hid: 'og:image', property: 'og:image', content: `${this.catalogDetail.og_image}` },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:url', property: 'og:url', content: process.env.clientUrl + this.$route.path }
      ]
    }
  },
  validate({params}) {
    return Boolean(params.alias)
  },
  async fetch() {

    try {
      this.form = await fetch(process.env.fakeUrl + 'form_catalog_detail')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.catalogDetail = await fetch(process.env.fakeUrl + 'catalog_detail')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

    try {
      this.leasing = await fetch(process.env.fakeUrl + 'leasing')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }


    try {
      this.meta = await fetch(process.env.fakeUrl + 'meta_page')
      .then(res => res.json())
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }
  },
  computed:{
    emptyCatalogDetail(){
      for (let key in this.catalogDetail) {
        return false;
      }
      return true;
    },
    emptyLeasing(){
      for (let key in this.leasing) {
        return false;
      }
      return true;
    },
    emptyMeta(){
      for (let key in this.meta) {
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
  .main-screen{
    background: var(--color-4);
  }
  .breadcrumbs_catalog{
    margin: 4.7em 0 8em;
  }
  .quiz-block{
    font-size: 1rem;
    padding:13.6em 0 17em;
  }
  .reviews{
    font-size: 1rem;
    padding: 13.6em 0 4.7em;
  }
  .video-name{
    font-weight: bold;
    font-size: 2em;
    line-height: 120%;
    color: var( --color-2);
    margin: 0 0 2.5em;
  }
  .video-product{
    grid-row: 2;
  }
  .certificates-catalog{
    grid-row: 2;
    margin: 0 auto;
  }
  .video-certificates.withVideo{
    display: grid;
    grid-template-columns: 7fr 5fr;
    grid-gap: 0 2em;
  }
  .video-certificates{
    font-size: 1rem;
    margin: 8.8em auto 6.9em;
  }
  @media screen and (max-width: 1200px) {
    .video-name{
      margin: 0 0 1.875em;
    }
    .video-certificates{
      font-size: .9rem;
    }
  }
  @media screen and (max-width: 1100px) {
    .reviews,
    .quiz-block,
    .video-certificates{
      font-size: .8rem;
    }
  }
  @media screen and (max-width: 992px) {
    .reviews,
    .video-certificates{
      font-size: .7rem;
    }
    .breadcrumbs_catalog{
      margin: 3.75em 0;
    }
    .video-name{
      margin: 0 0 .9375em;
    }
  }
  @media screen and (max-width: 768px) {
    .reviews,
    .video-certificates{
      font-size: 0.6rem;
    }
    .video-certificates.withVideo{
      grid-template-columns: 1fr;
    }
    .video-certificates{
      margin: 8.8em auto 0;
    }
    .certificates-catalog{
      grid-row: 3;
    }
    .video-product{
      margin: 0 0 5.75em;
    }
    .certificates__title{
      font-size: 1.8rem;
      margin: 0 0 .61em;
    }
  }
  @media screen and (max-width: 600px) {
    .reviews{
      font-size: 0.5rem;
      padding: 4em 0 12em;
    }

  }
</style>