import * as ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";
// import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.myScrollMagic = ScrollMagic;
});
