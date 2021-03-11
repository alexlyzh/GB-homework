import {MegaNavigation} from "./MegaNavigation.js";

export const Navigation = {
    components: {
      'mega-nav': MegaNavigation,
    },
    data() {
        return {
            visibleHome: false,
            // visibleMan: false,
            // visibleWomen: false,
            // visibleKids: false,
            // visibleAccs: false,
            // visibleFeat: false,
            // visibleHot: false,
        }
    },
    calculated: {
    },
    methods: {
    },

    template: `
    <nav class="navigation container">
        <div class="navigation__wrapper">
            <mega-nav v-if="visibleHome"></mega-nav>
            <a href="#" @mouseover="visibleHome = !visibleHome" class="active-nav navigation__title">Home</a>
        </div>  
        <div class="navigation__wrapper">
<!--            <mega-nav v-if="visibleHome"></mega-nav>-->
            <a href="product.html" @mouseover="visibleHome = !visibleHome" class="navigation__title">Man</a>
        </div>
        <div class="navigation__wrapper">
<!--            <mega-nav v-if="visibleHome"></mega-nav>-->
            <a href="checkout.html" @mouseover="visibleHome = !visibleHome" class="navigation__title">Women</a>
        </div>
        <div class="navigation__wrapper">
<!--            <mega-nav v-if="visibleHome"></mega-nav>-->
            <a href="#" @mouseover="visibleHome = !visibleHome" class="navigation__title">Kids</a>
        </div>
        <div class="navigation__wrapper">
<!--            <mega-nav v-if="visibleHome"></mega-nav>-->
            <a href="#" @mouseover="visibleHome = !visibleHome" class="navigation__title">Accessories</a>
        </div>
        <div class="navigation__wrapper">
<!--            <mega-nav v-if="visibleHome"></mega-nav>-->
            <a href="#" @mouseover="visibleHome = !visibleHome" class="navigation__title"> Featured</a>
        </div>
        <div class="navigation__wrapper">
<!--            <mega-nav v-if="visibleHome"></mega-nav>-->
            <a href="single_page.html" @mouseover="visibleHome = !visibleHome" class="navigation__title">Hot Deals</a>
        </div>
    </nav>
    `,
}