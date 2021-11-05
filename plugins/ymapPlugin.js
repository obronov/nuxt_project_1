import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'


const settings = { 
  apiKey: '7c160f0d-321f-4738-a7d0-050380d6fe72',
  coordorder: 'latlong',
  version: '2.1',
}

Vue.use(YmapPlugin, settings);
