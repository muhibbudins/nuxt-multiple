import createPersistedState from 'vuex-persistedstate'

export default ({store}) => {
  createPersistedState({
    key: '{{ name }}',
    paths: ['message']
  })(store)
}
