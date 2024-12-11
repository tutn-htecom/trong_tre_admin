<template>
    <v-app dark>
        <div id="error-page">
            <div class="content">
                <h2 class="header" data-text="404">
                    404
                </h2>
                <h4  v-if="error.statusCode === 404" data-text="Opps! Page not found">
                    {{ pageNotFound }}
                </h4>
                <p>
                    Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem.
                </p>
                <div class="btns">
                    <NuxtLink to="/"> Home page </NuxtLink>
                    <NuxtLink to="/"> Back </NuxtLink>
                </div>
            </div>
        </div>
    </v-app>
</template>

<script>
export default {
    name: 'EmptyLayout',
    layout: 'empty',
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred',
        }
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError
        return {
            title,
        }
    },
}
</script>

<style scoped>
body {
    height: 100%;
    background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
    background-size: 400%;
}

#error-page {
    position: absolute;
    top: 2%;
    left: 10%;
    right: 10%;
    bottom: 13%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
}

#error-page .content {
    max-width: 600px;
    text-align: center;
}

.content h2.header {
    font-size: 18vw;
    line-height: 1em;
    position: relative;
}

.content h2.header:after {
    position: absolute;
    content: attr(data-text);
    top: 0;
    left: 0;
    right: 0;
    background: -webkit-repeating-linear-gradient(-45deg, #71b7e6, #69a6ce, #b98acc, #ee8176, #b98acc, #69a6ce, #9b59b6);
    background-size: 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.25);
    animation: animate 10s ease-in-out infinite;
}

@keyframes animate {
    0% {
        background-position: 0 0;
    }

    25% {
        background-position: 100% 0;
    }

    50% {
        background-position: 100% 100%;
    }

    75% {
        background-position: 0% 100%;
    }

    100% {
        background-position: 0% 0%;
    }
}

.content h4 {
    font-size: 1.5em;
    margin-bottom: 20px;
    text-transform: uppercase;
    color: #000;
    font-size: 2em;
    max-width: 600px;
    position: relative;
}

.content h4:after {
    position: absolute;
    content: attr(data-text);
    top: 0;
    left: 0;
    right: 0;
    text-shadow: 1px 1px 2px rgba(255, 255, 255, 0.4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.content p {
    font-size: 1.2em;
    color: #0d0d0d;
}

.content .btns {
    margin: 25px 0;
    display: inline-flex;
}

.content .btns a {
    display: inline-block;
    margin: 0 10px;
    text-decoration: none;
    border: 2px solid #69a6ce;
    color: #69a6ce;
    font-weight: 500;
    padding: 10px 25px;
    border-radius: 25px;
    text-transform: uppercase;
    transition: all 0.3s ease;
}

.content .btns a:hover {
    background: #69a6ce;
    color: #fff;
}</style>
