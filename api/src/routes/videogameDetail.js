const { Router } = require('express');


const router = Router();


// En el caso de que no pasen nada...
router.post('/',(req,res) => {
    // Recibe los datos recolectados desde el formulario controlado de la ruta de reación de videojuego por body..
    
    /**
     * Formulario enviado por body...
     * Nombre:
     * Descripción:
     * Lanzamiento:
     * Rating:
     * 
     * 
     * Observaciones:
     * - Posibilidad de seleccionar/agregar varios géneros.
     * - Posibilidad de seleccionar/agregar varias plataformas.
     * 
     * 
     */
    
    const { name, description, launch, rating} = req.body
    
    // Conforme a los datos del formulario...
    // Creamos un videojuego...
    
    res.send('soy la ruta de un solo videogame')
})


// En el caso de que manden algún id..
// Creo que esta parte sería por query

module.exports = router;