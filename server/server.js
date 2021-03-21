const express = require('express');
const app = express();
const fs = require('fs');
const cartRouter = require('./cartRouter');


app.use(express.json()); // все данные клиента парсим из json
app.use('/', express.static('public')); // на все запросы по корневому адресу возвращаем директорию public
app.use('/api/cart', cartRouter);

app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf8', (err, data) => {
        if (err) {
            res.send({ result: 0, text: 'error' });
            return;
        }
        res.send(data);
    })
});

app.listen(3000, () => console.log('Server started....'));