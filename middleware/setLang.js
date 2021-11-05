export default function ({ store, redirect, route }) {
  let lang = 'ru';
  let arrRoute = route.name.split('-');

  if(arrRoute[0] == 'en'){
    lang = 'en';
  }

  store.commit('setLang', lang); 
}
