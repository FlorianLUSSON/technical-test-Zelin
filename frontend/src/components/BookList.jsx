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

  // Filtrer les livres avec Have=true
  const booksWithHave = books.filter((book) => book.Have === true);

  // Filtrer les livres avec Have=false
  const booksWithoutHave = books.filter((book) => book.Have === false);

  return (
    <div className="flex">
      <div className="w-3/4 p-4">
        <h2 className="text-2xl font-semibold mb-4">Liste des Livres acquis</h2>
        <ul>
          {booksWithHave.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onEdit={() => setSelectedBook(book)}
            />
          ))}
        </ul>
      </div>

      <div className="w-1/4 p-2 bg-gray-200">
        <h2 className="text-lg font-semibold mb-4">Non-Acquis</h2>
        <ul>
          {booksWithoutHave.map((book) => (
            <BookItem
              key={book.id}
              book={book}
              onEdit={() => setSelectedBook(book)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BookList;
