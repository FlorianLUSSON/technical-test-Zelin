const express = require("express");
const router = express.Router();
const bookModel = require("../models/bookModel");

router.post("/", (req, res) => {
  const {
    Name,
    Author,
    Evaluation,
    Last_update,
    Have,
    Summary,
    Image,
    Opinion,
  } = req.body;

  const newBook = new bookModel({
    Name,
    Author,
    Evaluation,
    Last_update,
    Have,
    Summary,
    Image,
    Opinion,
  });

  newBook
    .save()
    .then(() => {
      res.status(201).json({ message: "Livre créée avec succès" });
    })
    .catch((err) => {
      console.error("Erreur lors de la création du livre:", err);
      res.status(500).send("Erreur serveur");
    });
});

router.get("/", async (req, res) => {
  try {
    const books = await bookModel.find();
    res.json(books);
  } catch (error) {
    console.error("Erreur lors de la récupération de tous les livres:", error);
    res.status(500).send("Erreur serveur");
  }
});

router.get("/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const book = await bookModel.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }
    res.json(book);
  } catch (error) {
    console.error("Erreur lors de la récupération du livre:", error);
    res.status(500).send("Erreur serveur");
  }
});

router.put("/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const updatedBook = await bookModel.findByIdAndUpdate(
      bookId,
      {
        $set: {
          Name: req.body.Name,
          Author: req.body.Author,
          Evaluation: req.body.Evaluation,
          Last_update: req.body.Last_update,
          Have: req.body.Have,
          Summary: req.body.Summary,
          Image: req.body.Image,
          Opinion: req.body.Opinion,
        },
      },
      { new: true }
    );

    if (!updatedBook) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }

    res.json(updatedBook);
  } catch (error) {
    console.error("Erreur lors de la modification du livre:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

router.delete("/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    const deletedBook = await bookModel.findByIdAndDelete(bookId);

    if (!deletedBook) {
      return res.status(404).json({ message: "Livre non trouvé" });
    }

    res.json({ message: "Livre supprimé avec succès", deletedBook });
  } catch (error) {
    console.error("Erreur lors de la suppression du livre:", error);
    res.status(500).json({ message: "Erreur serveur" });
  }
});

module.exports = router;
