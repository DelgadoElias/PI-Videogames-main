const { Router } = require('express');


const router = Router();

router.get('/',(req,res) => {
    res.send('soy la ruta de los videogames')
})

module.exports = router;