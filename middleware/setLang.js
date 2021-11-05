export default function ({ store, redirect, route }) {
  let lang = 'ru';
  let arrRoute = route.name.split('-');

  if(arrRoute[0] == 'en'){
    lang = 'en';
  }
  if(arrRoute[0] == 'es'){
    lang = 'es';
  }
  if(arrRoute[0] == 'zh'){
    lang = 'zh';
  }
  store.commit('setLang', lang); 
}
