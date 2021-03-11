import {CartItem} from "./CartItem.js";

export const Cart = {
    components: {
        'cart-item': CartItem,
    },
    data() {
        return {
            visible: false,
        }
    },
    methods: {

    },
    template: `
        <button class="cart_btn" @click="visible = !visible"><img src="img/cart.png" alt="cart"></button>
        <div class="cart" v-show="visible">
            <cart-item></cart-item>
            <div class="cart__info">
                <div class="cart__text">
                    <p class="cart__total">total</p>
                    <p class="cart__price">$500</p>
                </div>
                <a href="checkout.html" class="cart__checkout">Checkout</a>
                <a href="shopping_cart.html" class="cart__to-cart">Go to cart</a>
            </div>
        </div>`,
}