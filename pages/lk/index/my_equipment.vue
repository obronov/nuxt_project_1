<template>
  <div>
    <div class="equipment" v-if="!emptyEquipment">
      <h1 class="lk-title lk-title_equipment">{{equipment.title}}</h1>
      <div class="equipment__inner">
        <div class="tabs-wrap" v-if="$device.isDesktop">
          <perfect-scrollbar class="tabs__inner" ref="scroll">
            <ul class="tabs">
              <li class="tabs__item" v-for="(item, tabIndex) in equipment.list" :key="tabIndex">
                <button class="tabs__btn" type="button" :class="{active: activeTab == item.id}" @click="selectedTab = item.id">{{item.name}}</button>
              </li>
            </ul>
          </perfect-scrollbar>
        </div>

        <div class="equipment__list" v-if="!emptyEquipmentList">
          <div class="card"  v-for="(item) in equipment.list" :key="item.id">
            <button class="btnShowEquipment" v-if="!$device.isDesktop" type="button" :class="{active: activeTab == item.id}" @click="selectedTab = item.id">
              <span>{{item.name}}</span>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.999999 0.999999L10 9L19 0.999998" stroke="#413F3E" stroke-linecap="round"/>
              </svg>
            </button>
            <div class="card__inner" v-if="activeTab == item.id">
              <div class="card__info" :class="{card__info_img: $device.isDesktop}">
                <div class="card__info-inner">
                  <div class="card__info-name">Модель</div>
                  <div class="card__info-value">{{item.model}}</div>
                  <img class="card__img" v-if="$device.isDesktop" :src="require(`~/assets/images/content/${item.code}.png`)" :alt="item.name">
                </div>                
              </div>
              <div class="card__info">
                <div class="card__info-inner">
                  <div class="card__info-name">Серийный номер</div>
                  <div class="card__info-value">{{item.serial_number}}</div>
                </div>
              </div>
              <div class="card__info">
                <div class="card__info-inner">
                  <div class="card__info-name">Дата выпуска</div>
                  <div class="card__info-value">{{ new Date(item.release_date * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'}) }}</div>                  
                </div>
              </div>
              <div class="card__info">
                <div class="card__info-inner">
                  <div class="card__info-name">Дата истечения гарантийного срока</div>
                  <div class="card__info-value">{{ new Date(item.date_warranty * 1000).toLocaleString('ru', {year: 'numeric', month: 'numeric', day:'numeric'}) }}</div>                  
                </div>
              </div>
              <div class="card__info">
                <div class="card__info-inner">                    
                  <div class="card__info-name">Спецификация</div>
                  <a class="card__info-link" :href="item.specification" download>посмотреть</a>
                </div>
              </div>
              <div class="tech-doc">
                <div class="tech-doc__title">
                  <span>Техническая документация</span>
                  <button class="tech-doc__btnShow" :class="{hidden: !item.show_tech_doc}" type="button" @click="item.show_tech_doc = !item.show_tech_doc">
                    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle opacity="0.8" cx="18.5" cy="18.5" r="18.5" transform="rotate(-90 18.5 18.5)"/>
                      <path d="M4.88672 21.6415L18.1509 11.8679L31.415 21.6415" stroke="#2F2D2C" stroke-width="2"/>
                    </svg>
                  </button>
                </div>
                <ul class="tech-doc-list" v-if="item.show_tech_doc">
                  <li class="tech-doc-list__item" :style="{'--delay': index * 0.1 + 's'}" v-for="(file, index) in item.technical_documentation" :key="index">
                    <a :href="file.link" class="tech-doc__file" download="">
                      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30 24H26V20H24V24H20V26H24V30H26V26H30V24Z" fill="#E77C5A"/>
                        <path d="M16 28H8V3.99997H16V9.99997C16.0016 10.5299 16.2128 11.0377 16.5875 11.4124C16.9623 11.7872 17.4701 11.9984 18 12H24V16H26V9.99997C26.0035 9.86855 25.9785 9.73792 25.9268 9.61708C25.875 9.49624 25.7976 9.38806 25.7 9.29997L18.7 2.29997C18.612 2.20232 18.5038 2.12492 18.3829 2.07313C18.2621 2.02134 18.1314 1.99638 18 1.99997H8C7.47005 2.00156 6.96227 2.21278 6.58753 2.58751C6.2128 2.96224 6.00158 3.47003 6 3.99997V28C6.00158 28.5299 6.2128 29.0377 6.58753 29.4124C6.96227 29.7872 7.47005 29.9984 8 30H16V28ZM18 4.39997L23.6 9.99997H18V4.39997Z" fill="#E77C5A"/>
                      </svg>
                      <span class="tech-doc__file-name">{{file.name}}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
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
      equipment: {},
      selectedTab: undefined
    }
  },
  head(){
    try {
      return{
        title: `Моё оборудование`,
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
      /* this.equipment = await this.fetchLkAuth(process.env.baseUrl + 'lk_catalog'); */
      
      this.equipment = await fetch(process.env.fakeUrl + 'lk_equipment')
      .then(res => res.json())

    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }
  },
  computed:{
    activeTab(){
      if(this.selectedTab){
        return this.selectedTab;
      }else{
        return this.equipment.list[0].id;
      }
    },
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
  }
}

</script>

<style lang='scss' scoped>

</style>