import {ProductItem} from "./ProductItem.js";

export const Products = {
    inject: ['getJson'],
    props: ['numOfProducts'],
    components: {
      ProductItem,
    },
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        this.getJson(`/api/products`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    },
    template: `products`,
}