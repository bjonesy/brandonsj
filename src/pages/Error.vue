<template>
    <section id="error" class="error-container container text-center animated fadeIn">
        <section class="404-header row">
            <div class="col-12">
                <div class="jumbotron">
                    <h1  class="display-3">404 Error</h1>
                </div>
            </div>
        </section>
        <hr class="my-4">
        <section class="error-content row">
            <div class="col-12">
                <h3>Page not found.</h3>
                <p>If you entered a web address please make sure it is correct.</p>
                <i class="fa fa-question fa-5x" aria-hidden="true"></i>
            </div>
        </section>
    </section>
</template>

<style lang="sass" scoped>
    @import '~styles/variables';

    #error {
        min-height: 300px;

        .jumbotron {
            background-color: white;
            margin: 0px;

            @media (min-width: 576px) {
                padding: 2rem 2rem 3rem;
            }

            @media screen and (max-width: 768px) {
                padding: 2rem 2rem 0rem;
            }
        }
    }

    i {
        color: #4fc08d;
    }

    h1 {
        color: #34495e;
    }
</style>
