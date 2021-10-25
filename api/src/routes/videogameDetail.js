const { Router } = require('express');
// UUID
const { v4: uuidv4 } = require('uuid');
// Models
const { Videogame } = require('../db.js')

// Comienza la magia.
const router = Router();

// -------------------------------------------------------------
// GET

router.get('/',(req,res) => {
    // Obtener el detalle de un videojuego en particular
    /**
     * Debe traer solo los datos pedidos en la ruta de detalle 
     * de videojuego.
     * 
     * Incluir los géneros asociados..
     */
       
    // Le pasamos por query? -----------------------------------

    const { id } = req.query

    // Si no existe el id pasado por query mostraremos otra cosa.
    if(!id){
        res.send('No me pasaste id por query')
        return;

    }


    //Default return;
    //  --------------------------------------------------------

    
})

// -------------------------------------------------------------
// POST

router.post('/',async(req,res, next) => {
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
    
    
    // Conforme a los datos del formulario 'videogame'...
    // Creamos un videojuego...
    const videogame = req.body;
    console.log(req.body);
    
    // Aquí vamos con las pruebas nuevas
    try {
        const instancias = await Videogame.create(
            {...videogame,
            id: uuidv4()});
        res.send(instancias);

    }catch(error){next(error)}; 
        // No findByPk --> UUID

        // Bruto a optimizado, no al revés--
});

// -------------------------------------------------------------
// PUT
router.put('/:id',(req,res,next) => {
    // Obtener el detalle de un videojuego en particular
    /**
     * Debe traer solo los datos pedidos en la ruta de detalle 
     * de videojuego.
     * 
     * Incluir los géneros asociados..
     */
       
    // Le pasamos por query?
    console.log(req.params)
    const { videogame } = req.body;
    const id = req.params.id; 


        // TODO: Poder hacerlo en async await
        // Tengo que buscar si o si?

        async function noSirvoAun(){
            const instancias = await Videogame.update({...videogame},{
                where : { id } 
            })
            res.send(instancias);
        } // .catch(err => res.send(err))

        //   (async()=>{ // Función autoinvocada
    //     const instancias = await Videogame.update({ ...videogame},
    //         {
    //             where : { id }
    //         });
    //         // Así sería para async await?

    //     res.send(instancias);
    // })().catch(error => next(error)); 


            return Videogame.update(videogame,{ where: { id }}).then((x) => {res.send(x)});



    /**
     * return Videogame.update(videogame,{ where : { id } })
     * .then((x) => { res.send(x) })
     * .catch((e) => next(x))
     */
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

    const { id } = req.query
        
    res.send('soy la ruta de un solo videogame')
})



// En el caso de que manden algún id..
// Creo que esta parte sería por query

module.exports = router;