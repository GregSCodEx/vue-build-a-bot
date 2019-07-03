import axios from 'axios';

export default {
  state: {
    user: null,
    foo: 'user-foo',
  },
  mutations: {
    updateCurrentUser(state, user) {
      // eslint-disable-next-line
      state.user = user;
    },
  },
  getters: {
    foo(state) {
      return `users-getter/${state.foo}`;
    },
  },
  actions: {
    signIn({ commit }) {
      axios.post('/api/sign-in')
        .then(result => commit('updateCurrentUser', result.data))
        .catch(console.error);
    },
  },
};
