import Cookies from 'js-cookie'

const state = {
  result: {
    header: {
      title: 'form',
      step: 1,
      totalStep: 3,
      config: {}
    },
    table: {
      title: 'table',
      step: 1,
      totalStep: 2,
      config: {}
    },
    pagination: {
      title: 'pagination',
      step: 1,
      totalStep: 1,
      config: {}
    }
  }
}

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  }
}

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
