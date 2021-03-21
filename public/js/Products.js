import {ProductItem} from "./ProductItem.js";

export const Products = {
    inject: ['getJson'],
    props: ['page'],
    components: {
      'product-item': ProductItem,
    },
    data() {
        return {
            products: [],
        }
    },
    computed: {
        filtered() {
            return this.products.filter(el => {
                return el.page.includes(this.page);
            }); // new RegExp(this.page,'i').test(el.page)
        }
    },
    methods: {
    },
    mounted() {
        this.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    },
    template: `
        <div class="product-cards">
            <product-item
            v-for="el of filtered"
            :key="el.id_product"
            :element="el"
            ></product-item>
        </div>
    `,
}