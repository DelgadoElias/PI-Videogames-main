const { Router } = require('express');


const router = Router();

// -------------------------------------------------------------
// GET

router.get('/:id',(req,res) => {
    // Obtener el detalle de un videojuego en particular
    /**
     * Debe traer solo los datos pedidos en la ruta de detalle 
     * de videojuego.
     * 
     * Incluir los géneros asociados..
     */
       
    // Le pasamos por query?

    const { id} = req.query
        
    res.send('soy la ruta de un solo videogame')
})

// -------------------------------------------------------------
// POST

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
});

// -------------------------------------------------------------
// PUT
router.put('/:id',(req,res) => {
    // Obtener el detalle de un videojuego en particular
    /**
     * Debe traer solo los datos pedidos en la ruta de detalle 
     * de videojuego.
     * 
     * Incluir los géneros asociados..
     */
       
    // Le pasamos por query?

    const { id} = req.query
        
    res.send('soy la ruta de un solo videogame')
})
// -------------------------------------------------------------
// DELETE

router.delete('/:id',(req,res) => {
    // Obtener el detalle de un videojuego en particular
    /**
     * Debe traer solo los datos pedidos en la ruta de detalle 
     * de videojuego.
     * 
     * Incluir los géneros asociados..
     */
       
    // Le pasamos por query?

    const { id} = req.query
        
    res.send('soy la ruta de un solo videogame')
})



// En el caso de que manden algún id..
// Creo que esta parte sería por query

module.exports = router;