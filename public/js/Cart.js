import {CartItem} from "./CartItem.js";

export const Cart = {
    inject: ['getJson', 'putJson', 'postJson'],
    components: {
        'cart-item': CartItem,
    },
    data() {
        return {
            showCart: false,
            cartItems: [],
        }
    },
    template: `
        <button class="cart_btn" @click="showCart = !showCart"><img src="img/cart.png" alt="cart"></button>
        <div class="cart" v-show="showCart">
            <cart-item
            v-for="item of cartItems" 
            :key="item.id_product"
            :img="item.img"
            :cartItem="item"
            @remove="remove"
            ></cart-item>
            <div class="cart__info">
                <div class="cart__text">
                    <p class="cart__total">Total</p>
                    <p class="cart__price">$500</p>
                </div>
                <a href="checkout.html" class="cart__checkout">Checkout</a>
                <a href="shopping_cart.html" class="cart__to-cart">Go to cart</a>
            </div>
        </div>`,
    mounted() {
        this.getJson(`/api/cart`)
            .then(data => {
                for (let el of data.contents) {
                    this.cartItems.push(el);
                }
            });
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.putJson(`/api/cart/${find.id_product}`, { quantity: 1 })
                    .then(data => {
                        if (data.result) {
                            find.quantity++
                        }
                    });
                return
            }

            const prod = Object.assign({quantity: 1}, product);
            this.postJson(`/api/cart`, prod)
                .then(data => {
                    if (data.result) {
                        this.cartItems.push(prod);
                    }
                });
        },
        remove(product){
            this.getJson(`$/api/cart/${find.id_product}`)
                .then(data => {
                    if(data.result){
                        if(product.quantity > 1){
                            product.quantity--
                        } else {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1)
                        }
                    }
                })
        },
    },
}