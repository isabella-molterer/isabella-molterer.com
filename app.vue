<script setup>
    import { Icon } from '#components'

    const colorMode = useColorMode()
    console.log(colorMode.preference)
</script>

<template>
    <div class="container mx-auto">
        <header>
            <Navigation/>
        </header>

        <div class="introduction mx-auto">
            <div class="introduction__image text-center">            
                <img class="my-4 mx-auto profile-image" src="~/assets/images/Isabella-Molterer.jpg" alt="Isabella Molterer" />
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

        <footer class="flex justify-between gap-6 text-center">
            <div class="regulartory__links links">
                <NuxtLink class="link link__imprint underline" to="/imprint" target="_blank">Imprint</NuxtLink>
                |
                <NuxtLink class="link link__privacy underline" to="/privacy" target="_blank">Privacy</NuxtLink>
            </div>
            <Socials/>
            <span>&copy; Isabella Molterer</span>
        </footer>
    </div>
</template>


<style lang="scss">

$color--white: #F5F5F5;
$color--black: #111111;

$color--background-dm: #1A1A1A;
$color--background-lm: $color--white;

$color--primary: #EA5657;
$color--secondary: #C5CAFF;

$color--gradient: linear-gradient(0.25turn, $color--primary, $color--secondary);

$breakpoint--sm: 600px;
$breakpoint--md: 768px;
$breakpoint--lg: 992px;
$breakpoint--xl: 1200px;

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

html, body {
    max-width: 100%;
    overflow-x: hidden;
}

body {
    background-color: $color--white;
    color: $color--black;
    font-family: Poppins, sans-serif;
    margin: 0 1.5rem;
}

h1 {
    font-family: Poppins-Black, sans-serif;
    font-size: 2.5rem;
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: $spacing * 2;

    @media screen and (min-width: $breakpoint--md) {
        font-size: 4.688rem;
        margin-bottom: $spacing * 2;
    }
}

p {
    margin-bottom: 0.5rem;
}

.navigation {
    margin: 1.5rem 0rem 2rem;

    @media screen and (min-width: $breakpoint--md) {
        margin: 3rem 4.688rem 0;
    }
}

.profile-image {
    mask-image: url(~/assets/images/mask.svg);
    mask-size: contain;
    mask-repeat: no-repeat;
    width: 100%;
    max-width: 300px;    
}

.icon,
.icon path {
    fill: $color--black; 
    transition: all 300ms ease;

    &:hover {
        fill: $color--primary; 
        transition: all 300ms ease;
    }
}

footer {
    transition: all 300ms ease;
    margin: 3rem 0rem;
    padding-top: 3rem;
    flex-direction: column;
    border: 2px solid;
    border-image-slice: 1;
    border-width: 2px;
    border-image-source: $color--gradient;
    border-left: 0;
    border-right: 0;
    border-bottom: 0;

    @media screen and (min-width: $breakpoint--md) {
        flex-direction: row;
    }

    .link:hover {
        transition: all 300ms ease;
        color: $color--primary;
    }
}

.introduction__text {
    margin: 5.5rem 4rem 2rem;
    max-width: 620px;
    padding: 1rem 0;
    margin: 0 auto;
}

.linktree .link {
    font-family: Poppins-SemiBold;
    color: $color--white;
    background-color: $color--primary;
    border: 2px solid $color--primary;
    width: 100%;
    transition: all 300ms ease;

    @media screen and (min-width: $breakpoint--sm) {
        max-width: 350px;
    }    

    &:hover {
        background-color: transparent;
        color: $color--primary;
        transition: all 300ms ease;
    }
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

    select {
        background: $color--black;
    }

    .icon:hover {
        path {
            fill: $color--primary; 
            transition: all 300ms ease;
        }
    }

    .icon,
    .icon path {
        fill: $color--white;
    }

    .has--outline {
        -webkit-text-fill-color: $color--background-dm; /* Will override color (regardless of order) */
        -webkit-text-stroke-width: 1px;
        -webkit-text-stroke-color: $color--white;
    }
}
</style>