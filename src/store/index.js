'use strict';

import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource'
import createLogger from 'vuex/dist/logger'
import loader from './modules/loader/index'
import aboutpost from './modules/about/index'
import homepost from './modules/home/index'

Vue.use(Vuex)
Vue.use(VueResource)

Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	modules: {
		homepost,
    aboutpost,
		loader
	},
	strict: false,
	middlewares: debug ? [createLogger()] : []
})
