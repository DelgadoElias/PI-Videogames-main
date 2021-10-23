const { Router } = require('express');


const router = Router();

// Videogames..

router.get('/',(req,res) => {

    // Puede recibir parámetros por query..
    const { name } = req.query;
    
    // ------------------------------------

    /**
     * Obtener un listado de los videojuegos.
     * Debe devolver solo los datos para la ruta principal.
     */

        // ------------------------------------------------
        // Si pasan query... ------------------------------
        // ------------------------------------------------
    
        /**
     * Obtener un listado de los primeros 15 videojuegos que
     * contengan la palabra ingresada como query..
     */

        // Pasarlo a lowerCase para comparación de names


        if(name){
            res.status(200)
            res.send(name)
            return;
        }

    res.send('soy la ruta de los videogames')
})

module.exports = router;