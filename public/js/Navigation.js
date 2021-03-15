import {MegaNavigation} from "./MegaNavigation.js";

export const Navigation = {
    components: {
      'mega-nav': MegaNavigation,
    },
    data() {
        return {
            labels: ['Home','Men','Women','Kids','Accessories','Featured','Hot deals'],
        }
    },

    template: `
    <nav class="navigation container">
        <mega-nav v-for="el of labels" :name="el"></mega-nav>
    </nav>
    `,
}