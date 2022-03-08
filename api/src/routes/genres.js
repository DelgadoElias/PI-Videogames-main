const { default: axios } = require('axios');
const { Router } = require('express');
const { Genre } = require('../db.js');

const router = Router();

/**
 * Get all the genres available in the database
 */
router.get('/', async(req, res) => {
    try {
        const instancias = await Genre.findAll();
        res.send(instancias);
    } catch (e) {
        next(e);
    }

})

/**
 * Get an specific genre from the database
 * @params {String} id - id of the genre to retrieve
 */
router.get('/:id', async(req, res, next) => {

    const id = req.params.id;

    try {
        let instanciado = await axios.get(`https://api.rawg.io/api/genres/${id}?key=232664f6fc6541e2a787c5d2528caac5`)
        res.send(instanciado.data);
    } catch (e) {
        next(e);
    }

})


/**
 * Create a new genre
 * @description post a new genre with the data sent in body params
 * @params { String } name - name of the new genre
 */
router.post('/', async(req, res, next) => {

    const { name } = req.body;

    try {
        const newGenre = await Genre.create({
        name
    });
    res.status(201).send(newGenre);

    } catch (e) {
        next(e);
    }

})
/**
 * Update an existing genre
 * @params {String} id - id of the update genre
 */
router.put('/:id', async(req, res, next) => {

        const { name } = req.body;
        const id = req.params.id;

        try {
            const updated = await Genre.update({ name }, {
                where: { id: id },
            })
            res.status(201).send(updated);
        } catch (e) {
            next(e);
        }
    })

/**
 * Destroy a genre from the db
 * @params {String} id - The id of the genre to destroy
 */
router.delete('/:id', async(req, res, next) => {

    const { id } = req.params
    try {
        const destroyedGenre = await Genre.destroy({ where: { id: id } })
        res.send(200)
    } catch (e) {
        next(e)
    }

})



// -------------------------------------------------------------
module.exports = router;