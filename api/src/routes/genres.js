const { Router } = require('express');


const router = Router();


// genres..
router.get('/',(req,res) => {

    /**
     * Obtener todos los tipos de géneros de videojuegos 
     * posibles.
     * 
     * En una primera instancia debemos traerlos desde rawg y 
     * guardarlos en us propia BDD y ya usarlos desde allí.
     */

    res.send('soy la ruta de los genres')
})


module.exports = router;