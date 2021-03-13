export const ProductItem = {
    props: ['img', 'product'],
    template: `
        <div class="product">
            <img :src="img" alt="product-1" class="product__img">
            <div class="add-to-cart">
                <a href="single_page.html" class="product__link"></a>
                <div class="product__pad">
                    <button type="button" class="product__cart product__button">Add to Cart</button>
                </div>
            </div>
            <div class="product__caption">
                <a href="#" class="product__caption_a">{{ product.product_name }}</a>
                <a href="#" class="product__caption_a">{{ product.price }}</a>
            </div>
        </div>
`,
}