/* CSS */
import "@js/parts/css";

/* Non-alpine JS */
// 

/**
 * Alpine JS
 * Best to put it last so that all other potential JS is available
 * when components start getting initialized.
*/
import Alpine from 'alpinejs';
import alpineComponent from "@js/parts/alpineComponent";

/* Register components */
Alpine.data('alpineComponent', alpineComponent); 

Alpine.start();

/**
 * Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
 */
if (import.meta.hot) {
  import.meta.hot.accept(() => {
    console.log("HMR");
  });
}
