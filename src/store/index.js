import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import settings from './modules/settings'
import user from './modules/user'
import baseData from './modules/baseData'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    permission,
    tagsView,
    settings,
    user,
    baseData
  },
  getters
})

export default store
