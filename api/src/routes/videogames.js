const { Router } = require('express');
// Modelos requeridos
const { Videogame } = require('../db.js')

const router = Router();

// Videogames..

router.get('/',(req,res, next) => {

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

        // Si no pasan por query...

    // Funciona!!
    (async()=>{ // Función autoinvocada
        // No findByPk --> UUID
        const instancias = await Videogame.findAll();
        res.send(instancias);
    })().catch(error => next(error)); 
    
    // Videogame.findAll()
    // .then( x => res.send(x))
})

// -------------------------------------------------------------
// POST

router.post((req,res) => {

    // Ahora veo que hago con esto

});

// -------------------------------------------------------------
// PUT

router.put((req,res) => {
    

    res.send('Soy el put del router')
});

// -------------------------------------------------------------
router.delete((req,res) => {
    

    res.send('Soy el delete del router')
});

module.exports = router;