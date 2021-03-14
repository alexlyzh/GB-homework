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
            return this.products.filter(el => new RegExp(this.page,'i').test(el.page));
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
                console.log(this.filtered)
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