export const CartItem = {
    data() {
        return {

        }
    },
    methods: {

    },
    template: `
        <div class="cart__item">
            <div class="cart__preview">
                <a href="single_page.html"><img src="img/manpic_1.png" class="cart__img" alt="preview"></a>
            </div>
            <div class="cart__details">
                <p><a href="single_page.html" class="cart__title">Rebox zane</a></p>
                <img src="img/stars.png" alt="stars">
                <p class="cart__quantity">1 x $250</p>
            </div>
            <button class="cart__delete">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
        </div>`,
}