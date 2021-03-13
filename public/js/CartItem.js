export const CartItem = {
    props: ['img', 'cartItem'],
    emits: ['remove'],
    template: `
        <div class="cart__item">
            <div class="cart__preview">
                <a href="single_page.html"><img :src="img" class="cart__img" alt="preview"></a>
            </div>
            <div class="cart__details">
                <p><a href="single_page.html" class="cart__title">{{cartItem.product_name}}</a></p>
                <img src="img/stars.png" alt="stars">
                <p class="cart__quantity">{{cartItem.quantity}} x \${{cartItem.price}}</p>
            </div>
            <button class="cart__delete" @click="$emit('remove', cartItem)">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
        </div>`,
}