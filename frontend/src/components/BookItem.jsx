import React from "react";
import EditModal from "./EditModal";

const BookItem = ({ book, onEdit }) => {
  const [isModalOpen, setModalOpen] = React.useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  return (
    <li className="mb-4 relative">
      <div className="bg-white p-4 shadow-md rounded-md">
        <h3 className="text-xl font-semibold">{book.Name}</h3>
        <p className="text-gray-600">Auteur: {book.Author}</p>
        <p className="text-gray-600">Évaluation: {book.Evaluation}</p>
        <p className="text-gray-600">
          Dernière mise à jour: {book.Last_update}
        </p>

        <button
          className="absolute bottom-0 right-0 bg-blue-500 text-white px-2 py-1 rounded"
          onClick={handleEditClick}
        >
          Éditer
        </button>

        <EditModal
          isOpen={isModalOpen}
          onClose={() => setModalOpen(false)}
          book={book}
          onSave={(editedBook) => {
            onEdit(editedBook);
            setModalOpen(false);
          }}
        />
      </div>
    </li>
  );
};

export default BookItem;
