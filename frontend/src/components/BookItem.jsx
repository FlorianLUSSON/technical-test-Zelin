import React, { useState } from "react";
import EditModal from "./EditModal";

const BookItem = ({ book, onEdit, onDelete }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isConfirmationOpen, setConfirmationOpen] = useState(false);

  const handleEditClick = () => {
    setModalOpen(true);
  };

  const handleDeleteClick = () => {
    setConfirmationOpen(true);
  };

  const handleDeleteConfirmed = () => {
    onDelete(book._id);
    setConfirmationOpen(false);
  };

  const handleCancelDelete = () => {
    setConfirmationOpen(false);
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
          className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 py-1 rounded"
          onClick={handleEditClick}
        >
          Éditer
        </button>

        <button
          className="absolute bottom-2 right-20 bg-red-500 text-white px-2 py-1 rounded"
          onClick={handleDeleteClick}
        >
          Supprimer
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

        {isConfirmationOpen && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-4 rounded-md">
              <p>Êtes-vous sûr de vouloir supprimer ce livre ?</p>
              <div className="flex justify-between mt-4">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={handleDeleteConfirmed}
                >
                  Oui
                </button>
                <button
                  className="bg-gray-300 px-4 py-2 rounded"
                  onClick={handleCancelDelete}
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default BookItem;
