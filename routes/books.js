const express = require('express')
const router = express.Router()
const {getBooks,getOneBook, setBooks, updateBooks, deleteBooks} = require('../controller/bookControllers')

router.get('/', getBooks)

router.get('/:id',getOneBook)

router.post('/', setBooks)

router.patch('/:id', updateBooks)

router.delete('/:id', deleteBooks)


module.exports = router