const BASE_URL = "http://localhost:3000";

const api = {
  getBooks: async () => {
    try {
      const response = await fetch(`${BASE_URL}/books`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Erreur lors de la récupération des livres : ${errorMessage}`
        );
      }

      return response.json();
    } catch (error) {
      console.error("Erreur dans getBooks :", error);
      throw error;
    }
  },

  deleteBook: async (bookId) => {
    try {
      const response = await fetch(`${BASE_URL}/books/${bookId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Erreur lors de la suppresion du livre : ${errorMessage}`
        );
      }
    } catch (error) {
      console.error("Erreur dans deleteBook :", error);
      throw error;
    }
  },

  postBook: async (bookData) => {
    try {
      const response = await fetch(`${BASE_URL}/books`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookData), // Envoyer les données du livre
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Erreur lors de l'ajout d'un livre : ${errorMessage}`);
      }

      return response.json();
    } catch (error) {
      console.error("Erreur dans postBook :", error);
      throw error;
    }
  },

  updateBook: async (bookId, updatedBookData) => {
    try {
      const response = await fetch(`${BASE_URL}/books/${bookId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedBookData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
          `Erreur lors de la mise à jour du livre : ${errorMessage}`
        );
      }

      return response.json();
    } catch (error) {
      console.error("Erreur dans updateBook :", error);
      throw error;
    }
  },
};

export default api;
