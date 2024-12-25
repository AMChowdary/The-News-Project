const express = require("express");
const Article = require("../models/Article");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Get all articles
router.get("/", async (req, res) => {
    try {
        const articles = await Article.find().sort({ date: -1 });
        res.json(articles);
    } catch (error) {
        res.status(500).json({ message: "Error fetching articles", error });
    }
});

// Create a new article
router.post("/", protect, async (req, res) => {
    const { title, content, tags } = req.body;
    try {
        const article = new Article({
            title,
            content,
            tags,
            author: req.user.id, // Author is the logged-in user
        });
        const savedArticle = await article.save();
        res.status(201).json(savedArticle);
    } catch (error) {
        res.status(400).json({ message: "Error creating article", error });
    }
});

// Update an article
router.put("/:id", protect, async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) return res.status(404).json({ message: "Article not found" });

        if (article.author.toString() !== req.user.id)
            return res.status(403).json({ message: "Unauthorized to update this article" });

        const updatedArticle = await Article.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedArticle);
    } catch (error) {
        res.status(400).json({ message: "Error updating article", error });
    }
});

// Delete an article
router.delete("/:id", protect, async (req, res) => {
    try {
        const article = await Article.findById(req.params.id);
        if (!article) return res.status(404).json({ message: "Article not found" });

        if (article.author.toString() !== req.user.id)
            return res.status(403).json({ message: "Unauthorized to delete this article" });

        await article.remove();
        res.json({ message: "Article deleted" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting article", error });
    }
});

module.exports = router;
