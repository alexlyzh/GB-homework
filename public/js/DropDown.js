export const DropDown = {
    emits: ['hideDropDown'],
    props: ['menu'],

    data() {
        return {
            dropDownVisible: false,
        }
    },
    methods: {
        toggleVisible () {
            this.dropDownVisible = !this.dropDownVisible;
        }
    },
    template: `
    <form action="#" class="searchbar">
        <div class="drop-down" v-show="dropDownVisible">
            <a href="product.html" class="drop-down__title">Women</a>
            <div class="drop-down__wrap">
                <a href="product.html" class="drop-down__link">Dressed</a>
                <a href="product.html" class="drop-down__link">Tops</a>
                <a href="product.html" class="drop-down__link">Sweaters/Knits</a>
                <a href="product.html" class="drop-down__link">Jackets/Coats</a>
                <a href="product.html" class="drop-down__link">Blazers</a>
                <a href="product.html" class="drop-down__link">Denim</a>
                <a href="product.html" class="drop-down__link">Leggings/Pants</a>
                <a href="product.html" class="drop-down__link">Skirts/Shorts</a>
                <a href="product.html" class="drop-down__link">Accessories</a>
            </div>
            <a href="product.html" class="drop-down__title">Men</a>
            <div class="drop-down__wrap">
                <a href="product.html" class="drop-down__link">Tees/Tank tops</a>
                <a href="product.html" class="drop-down__link">Skirts/Polos</a>
                <a href="product.html" class="drop-down__link">Sweaters</a>
                <a href="product.html" class="drop-down__link">Sweatshirts/Hoodies</a>
                <a href="product.html" class="drop-down__link">Blazers</a>
                <a href="product.html" class="drop-down__link">Jackets/vests</a>
            </div>
        </div>
        <a href="#" class="searchbar__browse" @click="toggleVisible">Browse &blacktriangledown;</a><input type="text" class="searchbar__input-txt" placeholder="Search for Item..."><button type="submit" class="searchbar__submit"><i class="fa fa-search" aria-hidden="true"></i></button>
    </form>
    `,
}