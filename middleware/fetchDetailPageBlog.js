export default async function ({ app, store, route }) {
  const url = process.env.baseUrl + `blog/${route.params.alias}`;
  let item = {};

  try {
    item = await fetch(url)
    .then(res => res.json())
  } catch (error) {
    console.error(`validateDetailPage ${url}:`,  error)
  }

  if(item != null && item != undefined){
    store.commit('setDetailPage', item)
    store.commit('validateDetailPage', true)
  }else{
    store.commit('validateDetailPage', false)
  }

}
