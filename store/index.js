
export const state = () => ({
  isAuthenticated: false,
  authToken: "Token",
  common: '',
  lang: 'ru',
  modalVideoId: '',
  nameModal: '',
  successMsg: '',
  password: '',
  password_repeat: '',
  productId: '',
  productName: '',
  contactEmail: '',
  contactPerson: '',
  contactPhone: '',
  numberNotifications: '',
  detailPage: {},
  validationDetailPage: false,
  profile: {}
});


export const mutations = {
  setProfile(state, item){
    state.profile = item;
  },
  setContactEmail(state, item){
    state.contactEmail = item;
  },
  setContactPhone(state, item){
    state.contactPhone = item;
  },
  setContactPerson(state, item){
    state.contactPerson = item;
  },
  setDetailPage(state, item){
    state.detailPage = item;
  },
  setDetailBlog(state, item){
    state.detailBlog = item;
  },
  validateDetailPage(state, valid){
    state.validationDetailPage = valid;
  },
  setNumberNotifications(state, number){
    state.numberNotifications = number;
  },
  setProductId(state, id){
    state.productId = id;
  },
  setProductName(state, name){
    state.productName = name;
  },
  showModalVideo(state, item) {
    state.modalVideoId = item.videoId;
    state.nameModal = item.nameModal;
  },
  showModal(state, nameModal) {
    state.nameModal = nameModal;
  },
  closeModal(state) {
    state.nameModal = '';
  },
  setCommon(state, common){
    state.common = common;
  },
  setSuccessMsg(state, text){
    state.successMsg = text;
  },
  setAuthToken(state, token){
    state.authToken = token;
  },
  logOut(state){
    state.authToken = '';
  },
  setLang(state, lang){
    state.lang = lang;
  }
}

export const actions = {
  async fetch({commit}){
    try {
      console.log('actions')
      /* this.common = await fetch(process.env.fakeUrl + 'common') */
      this.common = await fetch(process.env.baseUrl + 'common')
      .then(res => res.json())

      commit('setCommon', common);
    } catch (error) {
      console.error(`Страница ${this.$route.fullPath}: `,  error)
    }
  }
}