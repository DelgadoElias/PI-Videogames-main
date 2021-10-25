const { Router } = require('express');
// Modelos requeridos
const { Videogame } = require('../db.js')

const router = Router();

// Videogames..
//--------------------------------------------------------------

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
     * 
     * 
     * let page = 1;
     * let indix = 15;
     * 
     * 
     * -- Leemos los primeros 15 normalmente.
     * -- Botón dar a otra página.
     * 
     * where: {  id > page*indix && id < (page + 1)*indix }
     * results:
     * --> 15  al  30
     * --> 30  al  45
     * --> 45  al  60
     *  
     */

        // Pasarlo a lowerCase para comparación de names
        if(name){
            res.status(200)
            res.send(name)
            return;
        }

        // Si no pasan por query... Leemos todos


        
        // Funciona!!
        return (async()=>{ // Función autoinvocada
            // No findByPk --> UUID
            const instancias = await Videogame.findAll();
            res.send(instancias);
        })().catch(error => next(error)); 

        // TODO: instancias es un Array, hay que tomar los primeros 15 para mostrar.
      
    // Videogame.findAll().then( x => res.send(x)).catch((x) => { next(x) })
})

//--------------------------------------------------------------



module.exports = router;