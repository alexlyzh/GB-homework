const add = (cart, req) => {
    if (req.body.clear){
        cart.contents = [];
        return JSON.stringify(recalculate(cart), null, 4);
    }
    cart.contents.push(req.body);
    return JSON.stringify(recalculate(cart), null, 4);
}

const update = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);

    if (req.body.inputUpd) {
        find.quantity = +req.body.quantity;
        return JSON.stringify(recalculate(cart), null, 4);
    }

    find.quantity += req.body.quantity;
    if (find.quantity < 1) {
        cart.contents.splice(cart.contents.indexOf(find), 1);
    }
    return JSON.stringify(recalculate(cart), null, 4);
}

const del = (cart, req) => {
    const find = cart.contents.find(el => el.id_product === +req.params.id);
    cart.contents.splice(cart.contents.indexOf(find), 1);
    return JSON.stringify(recalculate(cart), null, 4);
}

const recalculate = cart => {
    cart.amount = 0;
    cart.countGoods = 0;
    if (cart.contents.length){
        cart.contents.forEach(el => {
            cart.amount += (el.quantity * el.price);
            cart.countGoods++;
        });
    }
    return cart;
}

module.exports = {
    add,
    update,
    del
}