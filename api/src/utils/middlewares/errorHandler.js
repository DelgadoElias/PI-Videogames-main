//--------------------------------------------------------------

  // Control centralizado de errores. Ayuda mucho a encontrar más rápido todo jaja

// Middleware de control de errores.
function errorHandler (err, req, res, next){ // eslint-disable-line no-unused-vars
    const status = err.status || 500; // Si no tiene nada manda 500
    const message = err.message || err; // Si nos olvidamos mandamos err
    console.error(err); // Mostramos el error
    res.status(status).send(message); // Deolvemos todo junto en el send..
  };


  //--------------------------------------------------------------
  //--------------------------------------------------------------
  module.exports = errorHandler;