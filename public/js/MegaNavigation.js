export const MegaNavigation = {
    props: ['name'],
    data() {
        return {
            visible: false,
        }
    },
    template: `
    <div class="navigation__wrapper">
        <a href="#" class="navigation__title" @click="visible=!visible">{{this.name}}</a>
        <div class="mega" v-show="visible"> 
            <div class="mega__item">
                <a href="product.html" class="mega__title">Women</a>
                <a href="product.html" class="mega__link">Dressed</a>
                <a href="product.html" class="mega__link">Tops</a>
                <a href="product.html" class="mega__link">Sweaters/Knits</a>
                <a href="product.html" class="mega__link">Jackets/Coats</a>
                <a href="product.html" class="mega__link">Blazers</a>
                <a href="product.html" class="mega__link">Denim</a>
                <a href="product.html" class="mega__link">Leggings/Pants</a>
                <a href="product.html" class="mega__link">Skirts/Shorts</a>
                <a href="product.html" class="mega__link">Accessories</a>
            </div>
            <div class="mega__item">
                <div>
                    <a href="product.html" class="mega__title">Women</a>
                    <a href="product.html" class="mega__link">Dressed</a>
                    <a href="product.html" class="mega__link">Tops</a>
                    <a href="product.html" class="mega__link">Sweaters/Knits</a>
                    <a href="product.html" class="mega__link">Jackets/Coats</a>
                </div>
                <div>
                    <a href="product.html" class="mega__title">Women</a>
                    <a href="product.html" class="mega__link">Dressed</a>
                    <a href="product.html" class="mega__link">Tops</a>
                    <a href="product.html" class="mega__link">Sweaters/Knits</a>
                </div>
            </div>
            <div class="mega__item">
                <div>
                    <a href="product.html" class="mega__title">Women</a>
                    <a href="product.html" class="mega__link">Dressed</a>
                    <a href="product.html" class="mega__link">Tops</a>
                    <a href="product.html" class="mega__link">Sweaters/Knits</a>
                    <a href="product.html" class="mega__link">Jackets/Coats</a>
                </div>
                <a href="product.html"><img src="img/mega-man.png" alt="mega-man"></a>
            </div>
        </div>
    </div>
    `,
}