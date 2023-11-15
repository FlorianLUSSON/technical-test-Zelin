import React, { useState } from "react";
import AddBookModal from "./AddBookModal"; // Importez le composant du modal d'ajout de livre
import api from "../services/api"; // Importez le service API si ce n'est pas déjà fait

const Header = () => {
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const handleOpenAddModal = () => {
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  const handleAddBook = async (newBook) => {
    try {
      await api.addBook(newBook); // Envoyez une requête à l'API pour ajouter le livre
      console.log("Nouveau livre ajouté :", newBook); // Affichez le nouveau livre ajouté (optionnel)
      handleCloseAddModal(); // Fermez le modal après l'ajout du livre
    } catch (error) {
      console.error("Erreur lors de l'ajout du livre :", error);
    }
  };

  return (
    <>
      <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-3xl font-semibold">Ma Bibliothèque Personnelle</h1>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded-md"
          onClick={handleOpenAddModal} // Ouvre le modal au clic sur le bouton
        >
          Ajouter un livre
        </button>
      </header>
      {/* Modal d'ajout de livre */}
      <AddBookModal
        isOpen={isAddModalOpen}
        onClose={handleCloseAddModal}
        onAdd={handleAddBook} // Passer la fonction pour ajouter un livre au modal
      />
    </>
  );
};

export default Header;
