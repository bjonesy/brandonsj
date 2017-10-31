'use strict';

import Vue from 'vue'
import VueResource from 'vue-resource'
import { SHOW_LOADER, HIDE_LOADER } from '../loader/types'
import * as type from './types'

const actions = {
  getAboutPost({ commit }) {
    commit(type.GET_ABOUT_POST)
    commit(SHOW_LOADER, {
      message: 'Fetching data...'
    })

    Vue.http.get('http://brandonsj.me/wp-json/acf/v3/pages/20')
      .then(resp => {
        commit(type.GET_ABOUT_POST_SUCCESS, {
          payload: resp.body
        })

        commit(HIDE_LOADER)
      })
      .catch(error => {
        commit(type.GET_ABOUT_POST_ERROR, {
          error
        })

        commit(SHOW_LOADER, {
          message: 'There was an error fetching the data'
        })
      })
  }
}

export default actions;