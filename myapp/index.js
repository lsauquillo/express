
//Este es el cuadro de mandos  de mi aplicacion

const express = require('express');
const path = require('path');
const routes = require('./routes/index.js')

const morgan = require('morgan');
const favicon = require('express-favicon');
const bodyParser = require('body-parser');

const app = express();

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname , '/views') );
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next) => {
    console.log('${req.url} - ${req.method}');
    next();
});

app.use('/', require('./routes/index'));

app.use(routes);

app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(favicon(__dirname + '/images/favicon.ico'));
//Puede sustituir a bodyParser?
//app.use(express.urlencoded({ extended: true }));

var urlencodedParser = bodyParser.urlencoded({extended: false});
/*
app.post('/products',urlencodedParser, function(req,res){
    //var username = req.body[nuevo-producto];
    console.log(req.body);
    console.log(req.body['nuevo_producto']);
    res.end("Hola joder");
  });
*/

app.listen(app.get('port'), () => {
    console.log('Servidor funcionando en ', app.get('port'));
});