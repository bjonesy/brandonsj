<template>
	<div>
		<!-- Header -->
		<app-header></app-header>

		<!-- Main content -->
		<section role="main">
			<router-view></router-view>
		</section>

		<!-- Footer -->
		<app-footer></app-footer>
	</div>
</template>

<script type="text/babel">
	import appHeader from '../components/Header.vue'
	import appFooter from '../components/Footer.vue'
	import { mapActions } from 'vuex'

	export default {
		components: {
			appHeader,
		  	appFooter
		},

		methods: {
			...mapActions([
              'getHomePost',
			  'getAboutPost'
			])
		},

		created(){
          this.getHomePost(),
		  this.getAboutPost()
		}
	}
</script>

<style lang="sass" scoped>
	@import '~styles/variables';
</style>
