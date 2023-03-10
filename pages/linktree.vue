<template>
    <Navigation/>

    <div class="introduction mx-auto w-2/4">
        <div class="introduction__image text-center">            
            <img class="rounded-full w-60 my-4 mx-auto" src="~/assets/images/Isabella-Molterer.jpg" alt="Isabella Molterer" />
            <h1 class="has--separator">
                Isabella<br>
                <span class="subline has--outline">Web Developer</span>
            </h1>
        </div>

        <div class="introduction__text">   
            <p>Hello and welcome to my portfolio website! I am Isabella, a web developer based in Salzburg, Austria. Explore my website to learn more about my latest projects and experiences.</p>
            <p>If you have any questions or comments, please do not hesitate to reach out to me. I would love to hear from you!</p>
        </div>
    </div>

    <LinkTree/>

    <footer>
        <div class="flex flex-nowrap justify-between">
            <div class="regulartory__links links">
                <NuxtLink class="link link__imprint underline" to="/imprint" target="_blank">Imprint</NuxtLink>
                |
                <NuxtLink class="link link__privacy underline" to="/privacy" target="_blank">Privacy</NuxtLink>
            </div>
            <Socials/>
            <span>&copy; Isabella Molterer</span>
        </div>

    </footer>
</template>

<script setup>
const colorMode = useColorMode()
console.log(colorMode.preference)
</script>

<style lang="scss">

$color--white: #F5F5F5;
$color--black: #111111;

$color--background-dm: #1A1A1A;
$color--background-lm: $color--white;

$color--primary: #EA5657;
$color--secondary: #C5CAFF;

$color--gradient: linear-gradient(0.25turn, $color--primary, $color--secondary);

$spacing: 2.125rem;

@font-face {
    font-family: Poppins;
    src: url(../_nuxt/assets/fonts/Poppins-Regular.ttf);
}

@font-face {
    font-family: Poppins-SemiBold;
    src: url(../_nuxt/assets/fonts/Poppins-SemiBold.ttf);
}

@font-face {
    font-family: Poppins-Black;
    src: url(../_nuxt/assets/fonts/Poppins-Black.ttf);
}

body {
    background-color: $color--white;
    color: $color--black;
    font-family: Poppins, sans-serif;
}

h1 {
    font-family: Poppins-Black, sans-serif;
    font-size: 4.688rem;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: $spacing * 2;
}

p {
    margin-bottom: 0.5rem;
}

.navigation {
    margin: 4.688rem 4.688rem 0;
}

footer {
    margin: 4.688rem;
}

.introduction__text {
    margin: 5.5rem 4rem 2rem;
}

.linktree .link {
    font-family: Poppins-SemiBold;
    color: $color--white;
    background-color: $color--primary;
    width: 250px;
}

.subline {
    position: relative;

    &::after {
        background: $color--gradient;
        content: "";
        position: absolute;
        left: 0;
        bottom: -$spacing;
        height: 7px;
        width: 100%;
    }
}

.has--outline {
    -webkit-text-fill-color: $color--background-dm; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: $color--white;
}

.dark-mode {
    body {
        background-color: $color--background-dm;
        color: $color--white;
    }

    footer {
        color: $color--white;
    }

    .has--outline {
        -webkit-text-fill-color: $color--background-dm; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: $color--white;
    }
}
</style>