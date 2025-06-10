import Book from "./book";

export default function BookStore({books}){
    return (
        <div>
            <h1>Book : {books.length}</h1>
            {
                books.map(book=> <Book book={book}></Book>)
            }
        </div>
    )
}       