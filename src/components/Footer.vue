<template>
    <footer class="site-footer container animated fadeIn">
        <nav class="nav row text-center" v-if="!homepost.isFetching">
            <a class="nav-link col-12 col-md-4" :href="homepost.data.acf.github_url" target="_blank"><i class="fa fa-github fa-2x" aria-hidden="true"></i></a>
            <a class="nav-link col-12 col-md-4" :href="homepost.data.acf.linkedin_url" target="_blank"><i class="fa fa-linkedin fa-2x" aria-hidden="true"></i></a>
            <a class="nav-link col-12 col-md-4" :href="homepost.data.acf.email_url"><i class="fa fa-envelope fa-2x" aria-hidden="true"></i></a>
        </nav>
        <hr class="my-4">
        <div class="row">
            <div class="col-12 col-sm-7">
                <p class="site-footer__devstack">Built with <a href="https://wordpress.org/" target="_blank">WordPress</a>, <a href="https://vuejs.org" target="_blank">Vue</a>, <a href="https://vuex.vuejs.org/en/" target="_blank">Vuex</a>, <a href="https://router.vuejs.org/en/" target="_blank">Vue-Router</a> and <a href="https://webpack.js.org/" target="_blank">Webpack</a></p>
            </div>
            <div class="col-12 col-sm-5">
                <p class="text-right">&copy; 2017 Brandon Jones </p>
            </div>
        </div>
    </footer>
</template>

<script type="text/babel">
  import { mapActions, mapState } from 'vuex'
  import store from '../store/index'
  import loader from '../components/Loader.vue'

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

    .site-footer {
        color: #34495e;
        font-family: $font-family-theme;
        padding-bottom: 15px;
        padding-top: 15px;

        &__devstack {
            a {
                color: #4fc08d;

                &:hover {
                    color: #3b8070;
                    text-decoration: none;
                }
            }
        }

        .nav {
            margin-top: 15px;
            a {
                color: #34495e;

                &:hover {
                    color: #4fc08d;
                }
            }
        }

        @media screen and (max-width: 575px) {
            text-align: center;

            .nav {
                -ms-flex-pack: center!important;
                justify-content: center!important;
            }
        }

        .text-right {
            @media screen and (max-width: 575px) {
                text-align: center!important;
            }
        }
    }
</style>
