<template>
	<section id="site-about" class="container">
		<loader></loader>
		<section class="row" v-if="!aboutpost.isFetching">
			<div class="site-about__header col-12">
				<h2>About</h2>
			</div>
			<div class="col-12">
				<p class="lead">{{aboutpost.data.acf.post_message}}</p>
			</div>
		</section>
		<section class="site-about__skills row" v-if="!aboutpost.isFetching">
			<div class="site-about__skills-one col-12 col-md-4" v-for="about in aboutpost.data.acf.about_boxes">
				<ul :data="about" class="list-group">
					<li class="list-group-item list-group-item-dark">{{about.about_box_title}}</li>
					<li class="list-group-item" v-for="item in about.about_box_list_items">{{item.about_box_list_item}}</li>
				</ul>
			</div>
		</section>
	</section>
</template>

<script type="text/babel">
  import { mapActions, mapState } from 'vuex'
  import store from '../store/index'
  import loader from '../components/Loader.vue'

  export default {
    components: {
      loader
    },

    methods: {
      ...mapActions([
        'getAboutPost'
      ])
    },

    beforeRouteEnter(to, from, next) {
      store.dispatch('getAboutPost')
        .then(() => {
          next()
        })
    },

    computed: mapState([
      'aboutpost',
      'loader'
    ])
  }
</script>

<style lang="sass" scoped>
	@import '~styles/variables';

	#site-about {
		color: #34495e;
		font-family: $font-family-theme;
		min-height: 350px;
		padding-bottom: 40px;
		padding-top: 20px;
		position: relative;
		.site-about__skills {
			margin-top: 20px;

			@media screen and (max-width: 768px) {
				.site-about__skills-one {
					margin-bottom: 25px;
				}
				.site-about__skills-two {
					margin-bottom: 25px;
				}
			}
		}

		@media screen and (max-width: 575px) {
			padding-bottom: 0px;
		}
	}
</style>
