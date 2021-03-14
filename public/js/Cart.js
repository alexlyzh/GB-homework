import {CartItem} from "./CartItem.js";

export const Cart = {
    inject: ['getJson', 'putJson', 'postJson', 'deleteJson'],
    props: ['isbigcart'],
    components: {
        'cart-item': CartItem,
    },
    data() {
        return {
            showCart: false,
            cartItems: [],
        }
    },
    computed: {
        totalPrice () {
            if (this.cartItems.length) {
                let price = 0;
                this.cartItems.forEach(el => {
                    price += el.price * el.quantity;
                });
                return price;
            }
            return 0;
        },
    },

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
        deleteProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.deleteJson(`/api/cart/${find.id_product}`, product)
                    .then(data => {
                        if (data.result) {
                            this.cartItems.splice(this.cartItems.indexOf(find),1);
                        }
                    });
            }
        },
        clearCart() {
            if (this.cartItems.length) {
                this.postJson(`/api/cart`, {clear: true})
                    .then(data => {
                        if (data.result) {
                            this.cartItems = [];
                        }
                    });
            }
        },
        change(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.putJson(`/api/cart/${find.id_product}`, { quantity: product.quantity, inputUpd: true })
            }
        },
        remove(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.putJson(`/api/cart/${find.id_product}`, { quantity: -1 })
                    .then(data => {
                        if(data.result){
                            if(product.quantity > 1){
                                product.quantity--
                            } else {
                                this.cartItems.splice(this.cartItems.indexOf(product), 1)
                            }
                        }
                    })
            }
        },
    },
    template: `
        <div v-if="!this.isbigcart">
            <button class="cart_btn" @click="showCart = !showCart"><img src="img/cart.png" alt="cart"></button>
            <div class="cart" v-show="showCart">
                <p v-if="!cartItems.length" class="cart__empty">Cart is empty</p>
                <div class="cart__wrapper">
                    <cart-item
                    v-for="item of cartItems" 
                    :key="item.id_product"
                    :img="item.img"
                    :cartItem="item"
                    @remove="remove"
                    :isbigcart="this.isbigcart"
                    ></cart-item>
                </div>
                <div class="cart__info">
                    <div class="cart__text" v-if="cartItems.length">
                        <p class="cart__total">Total</p>
                        <p class="cart__price">\${{totalPrice}}</p>
                    </div>
                    <a href="checkout.html" class="cart__checkout">Checkout</a>
                    <a href="shopping_cart.html" class="cart__to-cart">Go to cart</a>
                </div>
            </div>
        </div>
        <div v-else>
            <form action="" method="post"></form>
            <table class="details">
                <tbody>
                    <tr>
                        <th>Product Details</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th>Shipping</th>
                        <th>Subtotal</th>
                        <th>ACTION</th>
                    </tr>
                    <cart-item
                    v-for="item of cartItems" 
                    :key="item.id_product"
                    :cartItem="item"
                    :isbigcart="this.isbigcart"
                    @remove="remove"
                    @change="change"
                    @deleteProduct="deleteProduct"
                    ></cart-item>
                </tbody>
            </table>
            <div class="opposite-sides">
                <button class="button-site button-site_shopping_cart" @click="clearCart">Clear Shopping Cart</button>
                <a href="product.html" class="button-site button-site_shopping_cart">Continue Shopping</a>
            </div>
            <div class="address">
                <div class="address__shipping">
                    <p class="address__p title">Shipping Address</p>
                    <form action="#" class="destination">
                        <select name="country" class="address__form-item country">
                            <option value="Bangladesh" selected>Bangladesh</option>
                            <option value="Russia">Russia</option>
                        </select>
                        <input type="text" class="address__form-item state" placeholder="State">
                        <input type="text" class="address__form-item zip" placeholder="Postcode / Zip">
                        <button class="address__submit">Get a Quote</button>
                    </form>
                </div>
                <div class="address__coupon">
                    <p class="address__p title">coupon discount</p>
                    <p class="address__p line">Enter your coupon code if you have one</p>
                    <form action="#" class="coupon">
                        <input type="text" class="address__form-item state" placeholder="State">
                        <button class="address__submit">Apply coupon</button>
                    </form>
                </div>
                <div class="address__total">
                    <p class="address__subtotal">Sub total \${{totalPrice}}</p>
                    <p class="address__grand-total title">GRAND TOTAL <span class="address__grand-sum">\${{totalPrice}}</span></p>
                    <a href="checkout.html" class="address__button">Proceed to checkout</a>
                </div>
            </div>
        </div>`,
}