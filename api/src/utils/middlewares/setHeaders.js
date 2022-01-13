// Aqui se encuentran mis headers

//--------------------------------------------------------------
function setHeaders(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Solamente voy a aceptar requests de localhost:3000
    res.header('Access-Control-Allow-Credentials', 'true'); // Autenticación
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Tipos de Headers aceptables
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next(); // Yo no quiero que muera la función acá.
}
//--------------------------------------------------------------
module.exports = setHeaders;