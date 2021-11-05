<template>
<div>
  <div class="equipment-optional" v-if="!emptyEquipment">
    <h1 class="lk-title lk-title_equipment">{{equipment.title}}</h1>
    <perfect-scrollbar class="equipment-optional__list" v-if="!emptyEquipmentList" ref="scroll">
      <div class="equipment-optional__item" v-for="(item, index) in equipment.list" :key="index">
        <img v-if="item.img" :src="item.img" :alt="item.img" class="equipment-optional__img">
        <div class="equipment-optional__info">
          <h2 class="equipment-optional__name">{{item.name}}</h2>
          <div class="equipment-optional__description" v-html="item.description"></div>
        </div>
        <button class="btnOrderEquipment" type="button" @click="showModalOrder(item)">{{equipment.btn_name}}</button>
      </div>
    </perfect-scrollbar>
  </div>
</div>
</template>

<script>
import global from "~/mixins/global";
export default {
  mixins: [global],
  data(){
    return{
      equipment: {}
    }
  },
  head(){
    try {
      return{
        title: `Дополнительное оборудование`,
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
      this.equipment = await this.fetchLkAuth(process.env.baseUrl + 'lk_catalog_optional');
      
          /* this.equipment = await fetch(process.env.fakeUrl + 'lk_optional_equipment')
      .then(res => res.json()) */

    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }

  },
  computed:{
    emptyEquipment(){
      for (let key in this.equipment) {
        return false;
      }
      return true;
    },
    emptyEquipmentList(){
      if(this.equipment.list != undefined && this.equipment.list.length > 0){
        return false;
      }else{        
        return true;
      }
    }
  },
  watch: {
    $route() {
      this.$refs.scroll.$el.scrollTop = 0;
    }
  },
  methods:{

  }
}

</script>

<style lang='scss' scoped>

</style>