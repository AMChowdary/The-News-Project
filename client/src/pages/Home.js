import React, { useEffect, useState } from "react";
import ArticleList from "../components/ArticleList";

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch articles from backend
    const fetchArticles = async () => {
      const response = await fetch("/api/articles");
      const data = await response.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h1>Welcome to the News App</h1>
      <ArticleList articles={articles} />
    </div>
  );
};

export default Home;
