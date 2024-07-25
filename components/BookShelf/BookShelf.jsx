import { useState } from 'react';

const BookShelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
      ]);
    const [newBook, setNewBook] = useState({
        title: '',
        author: '',
    });


    const handleInputChange = (event) => {
        const {name, value} = event.target 
        setNewBook({
            ...newBook,
            [name]: value
        })

    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setBooks([...books, newBook])
        setNewBook({
            title: '',
            author:''
        })

    }
            
    return(
        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                <form onSubmit={handleSubmit}>
                    <label htmlFor='title'>Title:</label>
                    <input id='title' name="title" value={newBook.title} onChange={handleInputChange} />
                    <label htmlFor="author">Author:</label>
                    <input id="author" name="author" value={newBook.author} onChange={handleInputChange} />
                    <button type="submit">Add Book</button>
                      
                    
                </form>
            </div>
            <div className="bookCardsDiv">

                <ul>
                    <div className="bookCard">
                    {books.map((book) => (
                        <li key={book}>
                            <h2>{book.title}</h2>
                        <p>{book.author}</p>
                        </li>
                    ))}
                    </div>
                </ul>
            </div>
        </div>
    );      
                          
}

export default BookShelf