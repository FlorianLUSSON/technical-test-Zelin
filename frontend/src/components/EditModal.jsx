import React, { useState, useEffect } from "react";
import api from "../services/api";

const EditModal = ({ isOpen, onClose, book, onSave }) => {
  const [editedBook, setEditedBook] = useState({
    Name: "",
    Author: "",
    Evaluation: 1,
    Have: false,
    Summary: "",
    Image: "",
    Opinion: "",
  });

  useEffect(() => {
    setEditedBook({
      Name: book.Name,
      Author: book.Author,
      Evaluation: book.Evaluation,
      Have: book.Have,
      Summary: book.Summary,
      Image: book.Image,
      Opinion: book.Opinion,
    });
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      await api.updateBook(book._id, editedBook);
      onSave(editedBook);
      onClose();
    } catch (error) {
      console.error("Erreur lors de la sauvegarde du livre :", error);
      throw error;
    }
  };

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-999 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={onClose}
      ></div>
      <div className={`modal ${isOpen ? "block" : "hidden"}`}>
        <div className="modal-container fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 p-4 rounded-md z-999">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nom
            </label>
            <input
              type="text"
              name="Name"
              value={editedBook.Name}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Auteur
            </label>
            <input
              type="text"
              name="Author"
              value={editedBook.Author}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Évaluation
            </label>
            <select
              name="Evaluation"
              value={editedBook.Evaluation}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            >
              {[1, 2, 3, 4, 5].map((rating) => (
                <option key={rating} value={rating}>
                  {rating}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Possédé
            </label>
            <input
              type="checkbox"
              name="Have"
              checked={editedBook.Have}
              onChange={() =>
                setEditedBook((prevBook) => ({
                  ...prevBook,
                  Have: !prevBook.Have,
                }))
              }
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Résumé
            </label>
            <textarea
              name="Summary"
              value={editedBook.Summary}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Avis
            </label>
            <textarea
              name="Opinion"
              value={editedBook.Opinion}
              onChange={handleChange}
              className="w-full border rounded-md p-2"
            />
          </div>

          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Sauvegarder
          </button>
          <button onClick={onClose} className="text-gray-500 px-4 py-2">
            Annuler
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
