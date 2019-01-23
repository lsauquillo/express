const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const items = [
    {id: 1, name: 'producto1'},
    {id: 2, name: 'producto2'},
    {id: 3, name: 'producto3'},
    {id: 4, name: 'producto4'}
];

//GET
router.get('/', (req, res, next) => {
    res.render('index.ejs' , {
        title: 'Pagina de Inicio'
    });
});

router.get('/login', (req, res, next) => {
    res.render('login.ejs' , {
        title: 'Usuarios'
    });
});

router.get('/products', (req, res, next) => {
    res.render('products.ejs' , {
        title: 'Lista de Productos',
        items: items 
    });
});

router.get('*', (req, res) => {
    res.end("Archivo no encontrado!");
});

//POST
var urlencodedParser = bodyParser.urlencoded({extended: false});
router.post('/products',urlencodedParser, function(req,res){
    //var username = req.body[nuevo-producto];
    console.log(req.body);
    console.log(req.body['nuevo_producto']);
    const nuevo_producto = req.body['nuevo_producto'];
    items.push({id: items.length + 1, name: nuevo_producto});
    res.redirect('/products');
  });

  router.post('/login',urlencodedParser, function(req,res){
    //var username = req.body[nuevo-producto];
    console.log(req.body);
    //console.log(req.body['nuevo_producto']);
    res.end("Hola con post desde login");
  });

module.exports = router;
