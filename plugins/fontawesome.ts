/* import the fontawesome core */
import { library, config } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

// This is important, we are going to let Nuxt worry about the CSS
config.autoAddCss = false;

/* add each imported icon to the library */
library.add(faGithub, faLinkedinIn, faPaperPlane);

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
