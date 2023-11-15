import React, { useState, useEffect } from "react";
import BookItem from "./BookItem";
import api from "../services/api";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const data = await api.getBooks();
        setBooks(data);
      } catch (error) {
        throw error;
      }
    };
    fetchBooks();
  }, []);

  const booksWithHave = books.filter((book) => book.Have === true);

  const booksWithoutHave = books.filter((book) => book.Have === false);

  const updateBookLocally = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) => (book.id === updatedBook.id ? updatedBook : book))
    );
  };

  const deleteBook = async (bookId) => {
    try {
      await api.deleteBook(bookId);
      setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookId));
    } catch (error) {
      console.error("Erreur lors de la suppression du livre :", error);
    }
  };

  return (
    <div className="flex">
      <div className="w-4/6 p-4">
        <h2 className="text-2xl font-semibold mb-4">Liste des Livres acquis</h2>
        <ul>
          {booksWithHave.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onEdit={updateBookLocally}
              onDelete={deleteBook}
            />
          ))}
        </ul>
      </div>

      <div className="w-2/6 p-2 bg-gray-200">
        <h2 className="text-lg font-semibold mb-4">Non-Acquis</h2>
        <ul>
          {booksWithoutHave.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onEdit={updateBookLocally}
              onDelete={deleteBook}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
