<template>
	<nav class="nav justify-content-end" v-if="!homepost.isFetching">
		<router-link class="nav-link" to="/" exact>Home</router-link>
		<router-link class="nav-link" to="/about">About</router-link>
		<a :href="homepost.data.acf.email_url" class="nav-link">Contact</a>
	</nav>
</template>

<script type="text/babel">
  	import { mapActions, mapState } from 'vuex'
  	import store from '../store/index'
  	import loader from '../components/Loader.vue'
	import Vue from 'vue'

	Vue.component('app-nav');

    export default {

      methods: {
        ...mapActions([
          'getHomePost'
        ])
      },

      beforeRouteEnter(to, from, next) {
        store.dispatch('getHomePost')
          .then(() => {
            next()
          })
      },

      computed: mapState([
        'homepost'
      ])
    }
</script>

<style lang="sass" scoped>
	@import '~styles/variables';

	.nav {

		a {
			color: #34495e;
			font-size: 1.2rem;

			&:hover {
				color: #4fc08d;
			}

			&.active {
				color: #3b8070;
				font-weight: 700;

				&:hover {
					color: #4fc08d;
				}
			}
		}

		@media screen and (max-width: 768px) {
			-ms-flex-pack: center!important;
			justify-content: center!important;
		}
	}
</style>
