<template>
    <div id="site-home" class="container animated fadeIn">
        <loader></loader>
        <section v-if="!homepost.isFetching" class="site-home__intro row">
            <div class="col-12">
                <div class="jumbotron text-center">
                    <h2 class="display-5">{{homepost.data.acf.work_title}}</h2>
                    <p class="lead work">{{homepost.data.acf.work_company}}</p>
                    <hr class="my-4">
                    <p class="lead passion">{{homepost.data.acf.home_phrase}}</p>
                    <p class="lead">
                        <router-link class="btn btn-primary btn-lg" to="/about" role="button">Learn More</router-link>
                        <a :href="homepost.data.acf.resume_url" target="_blank" class="btn btn-primary btn-lg">Resume</a>
                    </p>
                </div>
            </div>
        </section>
        <section class="site-home_skills-boxes row" v-if="!homepost.isFetching">
            <div class="col-12">
                <h3 class="site-home__skills text-center">{{homepost.data.acf.skills_title}}</h3>
            </div>
            <div class="col-12 col-md-4" v-for="home in homepost.data.acf.skills_boxes">
                <div :data="home" class="card text-center">
                    <div class="card-body">
                        <i :class="['fa', home.skills_box_icon, 'fa-5x']" aria-hidden="true"></i>
                        <h4 class="card-title">{{home.skills_box_title}}</h4>
                        <p class="card-text">{{home.skills_box_text}}</p>
                    </div>
                </div>
            </div>
        </section>
        <section class="site-home__contact row" v-if="!homepost.isFetching">
            <div class="col-12">
                <div class="jumbotron row">
                    <h4 class="lead--bold col-12 col-md-9">{{homepost.data.acf.home_contact_banner}}</h4>
                    <a class="btn btn-primary btn-lg col-12 col-md-3" :href="homepost.data.acf.email_url" role="button">Contact</a>
                </div>
            </div>
        </section>
    </div>
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
      'homepost',
      'loader'
    ])
  }
</script>

<style lang="sass" scoped>
    @import '~styles/variables';

    #site-home {
        color: #34495e;
        font-family: $font-family-theme;
        min-height: 350px;
        position: relative;
    }

    .jumbotron {
        background-color: white;
        padding: 20px 0 0px 0;

        @media screen and (max-width: 575px) {
            margin: 0px;
            padding: 20px 0 0px 0;
            text-align: center;
        }
    }

    .lead.work {
        font-size: 1.6rem;

        @media screen and (max-width: 768px) {
            font-size: 1.25rem;
        }
    }

    .lead.passion {
        font-size: 1.5rem;
        font-weight: normal;

        @media screen and (max-width: 575px) {
            font-size: 1.3rem;
        }
    }

    .site-home {
        &__skills {
            margin-bottom: 0px;
        }

        &__contact {
            margin-top: 20px;

            .lead {
                &--bold {
                    margin: 10px 0 0 0;

                    @media screen and (max-width: 768px) {
                        margin-bottom: 20px;
                        text-align: center;
                    }
                }
            }
        }
    }

    .card {
        border: 0px;

        &-title {
            margin-top: 15px;
        }
    }

    .btn {
        color: #fff;
        background-color: #4fc08d;
        border: 1px solid #4fc08d;
        font-family: $font-family-theme;
        font-weight: 400;
        letter-spacing: 0.1em;
        text-transform: uppercase;

        &:hover {
            background-color: #34495e;
            border: 1px solid #34495e;
            color: white;
        }

        @media screen and (max-width: 575px) {
            margin-bottom: 10px;
            text-align: center;
            width: 100%;

            &:nth-child(3) {
                margin-bottom: 0px;
            }
        }
    }
</style>
