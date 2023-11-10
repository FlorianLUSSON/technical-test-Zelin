import React from "react";

const BookItem = ({ book }) => {
  return (
    <li className="mb-4">
      <div className="bg-white p-4 shadow-md rounded-md">
        <h3 className="text-xl font-semibold">{book.title}</h3>
        <p className="text-gray-600">{book.author}</p>
        {/* Ajoutez d'autres détails du livre si nécessaire */}
      </div>
    </li>
  );
};

export default BookItem;
