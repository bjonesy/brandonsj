<template>
	<div class="loader" v-if="loader.show">
		<i class="fa fa-spinner fa-pulse fa-3x fa-fw loader-spin"></i>
	</div>
	<div class="loader" v-else style="display:none">
		<i class="fa fa-spinner fa-pulse fa-3x fa-fw loader-spin"></i>

	</div>
</template>

<script type="text/babel">
	import Vue from 'vue'
	import { mapActions, mapState } from 'vuex'

	export default Vue.component('loader', {
		computed: mapState([
			'loader'
		])
	})
</script>

<style lang="sass" scoped>
	@import '~styles/variables';

	.hide-loader {
		display: none;
	}

	.loader {
		background: white;
		display: block;
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 2;
	}

	.loader-spin {
		position: absolute;
		top: 30%;
		left: 45%;
		transform: translate(-50%, -50%);
		text-align: center;
	}
</style>
