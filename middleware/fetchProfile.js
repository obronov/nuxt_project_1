export default async function ({ app, store }) {
  /* const url = process.env.fakeUrl + 'lk_profile'; */
  const url = process.env.baseUrl + `lk_profile`;
  let profile = {};

  /* this.formAuth.info = await fetch(process.env.baseUrl + `form_info/${this.formHandleAuth}`) */
  if(store.state.authToken){
    try {
      profile = await fetch(url,{
        headers: {
          'Authorization': 'Bearer ' + store.state.authToken
        }
      })
      .then(res => res.json())
    } catch (error) {
      console.error(`profile ${url}:`,  error)
    }
  
    if(profile != null && profile != undefined  && profile.status !=  401 ){
      store.commit('setProfile', profile);
      try {
        store.commit('setContactEmail', profile.list[0].email);
        store.commit('setContactPhone', profile.list[0].phone);
        store.commit('setContactPerson', profile.list[0].contact_person);
      } catch (error) {
        console.error(`Ошибка в profile.list ${error}`)
      }

    }
  }
}
