export const CartItem = {
    props: ['img', 'cartItem', 'isbigcart'],
    emits: ['remove', 'change', 'deleteProduct'],
    template: `
        <div class="cart__item" v-if="!this.isbigcart">
            <div class="cart__preview">
                <a href="single_page.html"><img :src="cartItem.img" class="cart__img" alt="preview"></a>
            </div>
            <div class="cart__details">
                <p><a href="single_page.html" class="cart__title">{{cartItem.product_name}}</a></p>
                <img src="img/stars.png" alt="stars">
                <p class="cart__quantity">{{cartItem.quantity}} x \${{cartItem.price}}</p>
            </div>
            <button class="cart__delete">
                <i class="fa fa-times-circle" aria-hidden="true" @click="$emit('remove', cartItem)"></i>
            </button>
        </div>
        <tr v-if="this.isbigcart">
            <td>
                <div class="details__art">
                    <a href="single_page.html"><img :src="cartItem.img" alt="cart_img" class="cart_image"></a>
                    <div class="details__text">
                        <span class="details__text-headline">{{cartItem.product_name}}</span>
                        <span class="details_text-specs"><span>Color:</span> Red</span><span class="details_text-specs"><span>Size:</span>Xll</span>
                    </div>
                </div>
            </td>
            <td><span class="details__unit-price">\${{cartItem.price}}</span></td>
            <td><input class="details__input" type="number" @change="$emit('change', cartItem)" v-model.lazy="cartItem.quantity"></td>
            <td><span class="details__shipping">Free</span></td>
            <td><span class="details__subtotal">\${{cartItem.price * cartItem.quantity}}</span></td>
            <td><button class="details__action"><i class="fa fa-times-circle" aria-hidden="true" @click="$emit('deleteProduct', cartItem)"></i></button></td>
        </tr>`,
}