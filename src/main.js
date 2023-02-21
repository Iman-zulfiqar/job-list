import { createApp } from "vue";
import App from "./App.vue";

// import "./assets/main.css";
// import "./style.css";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faTimes, faUserSecret } from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faTimes);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
