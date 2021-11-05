export default function ({ app, store, redirect }) {
  const cookieRes = app.$cookies.get('authToken')

  if (cookieRes) {
    store.commit('setAuthToken', cookieRes);
  }
}
