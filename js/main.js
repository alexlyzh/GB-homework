import {Cart} from "./Cart.js";
import {Products} from "./Products.js";
import {Navigation} from "./Navigation.js";
import {DropDown} from "./DropDown.js";

const App = {
    components: {
        Cart,
        Products,
        Navigation,
        'drop-down': DropDown,
    },
    data() {
        return {
        }
    },
    methods: {
    },
}

Vue.createApp(App).mount('#app');