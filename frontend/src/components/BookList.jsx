import React from "react";
import BookItem from "./BookItem";

const booksData = [
  { id: 1, title: "Titre du Livre 1", author: "Auteur 1" },
  { id: 2, title: "Titre du Livre 2", author: "Auteur 2" },
  // ... autres livres
];

const BookList = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Liste des Livres</h2>
      <ul>
        {booksData.map((book) => (
          <BookItem key={book.id} book={book} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
