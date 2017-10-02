'use strict';

import path from 'path';
import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Error from '../pages/Error.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: path.join(__dirname, '/'),
	linkActiveClass: 'active',
	routes: [
		{
			path: '/',
			component: Home,
			name: 'home'
		},
		{
			path: '/about',
			component: About,
			name: 'about'
		},
    {
      path: '*',
      component: Error,
      name: 'error'
    }
	]
})

export default router
