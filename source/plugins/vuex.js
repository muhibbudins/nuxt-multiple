import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: 'nuxt-multiple-app',
    paths: ['message']
  })(store)
}
