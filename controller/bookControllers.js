const Book = require('../models/bookModel')


//========================= function to get all books===================================

const getBooks = async(req, res) =>{
    const books = await Book.find()
    res.status(200).json(books)
}

//========================= function to get a single book by id==========================

const getOneBook = async(req,res) =>{
    const book = await Book.findOne({_id:req.params.id})
    if (book) {
        res.send(book)
    }
    res.send({"result":"no book found"})
}

//========================= function to set a new book===================================

const setBooks = async(req, res) =>{
    const book = await Book.create({
        title: req.body.title,
        author: req.body.author,
        year: req.body.year,
        genre: req.body.genre,
        image: req.body.image,
        description: req.body.description
    })
    res.status(200).json(book)
}

//========================= function to update a book===================================

const updateBooks = async(req, res) =>{
    const book = await Book.findById(req.params.id)

    if(!book){
        res.status(400)
    }
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body,{
        new:true,
    })
    res.status(200).json(updatedBook)
}

//========================= function to delete a book using id ===================================
const deleteBooks = async(req, res) =>{
    const book = await Book.findById(req.params.id)
    if (!book){
        res.status(400)
    } 
   await book.remove()

   res.status(200).json({id:req.params.id})

}


module.exports = {
    getBooks,
    getOneBook,
    setBooks,
    updateBooks,
    deleteBooks
}