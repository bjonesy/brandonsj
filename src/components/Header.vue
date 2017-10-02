<template>
	<header id="site-header" class="site-header animated fadeIn">
		<div class="container">
			<div class="row">
				<div class="site-title col-12 col-md-7">
					<router-link class="nav-link" to="/" exact>
						<h1>Brandon Jones</h1>
					</router-link>
				</div>
				<div class="col-12 col-md-5">
					<!-- Navigation -->
					<app-nav></app-nav>
				</div>
			</div>
		</div>
	</header>
</template>

<script type="text/babel">
  import appNav from '../components/Nav.vue'

  export default {
    components: {
      appNav
    }
  }
</script>

<style lang="sass" scoped>
	@import '~styles/variables';

	.site-header {
		color: #34495e;
		font-family: $font-family-theme;
		padding: 25px 0;

		@media screen and (max-width: 575px) {
			padding: 25px 0 0 0;
		}
	}

	.site-title {

		h1 {
			margin: 0px;
		}

		a {
			color: #34495e;
			padding: 0px;
			&:hover {
				color: #4fc08d;
			}
		}
		@media screen and (max-width: 768px) {
			text-align: center
		}
	}
</style>
