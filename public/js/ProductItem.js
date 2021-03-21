export const ProductItem = {
    props: ['element'],
    template: `
        <div class="product">
            <img :src="element.img" alt="product-1" class="product__img">
            <div class="add-to-cart">
                <a href="single_page.html" class="product__link"></a>
                <div class="product__pad">
                    <button type="button" class="product__cart product__button" @click="$root.$refs.cart.addProduct(element)">Add to Cart</button>
                </div>
            </div>
            <div class="product__caption">
                <a href="#" class="product__caption_a">{{ element.product_name }}</a>
                <a href="#" class="product__caption_a">\${{ element.price }}</a>
            </div>
        </div>
`,
}