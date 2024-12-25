import React, { useState } from "react";
import ArticleForm from "../components/ArticleForm";
import ArticleList from "../components/ArticleList";

const Dashboard = () => {
  const [articles, setArticles] = useState([]);

  const handleArticleSubmit = (article) => {
    setArticles([...articles, article]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <ArticleForm onSubmit={handleArticleSubmit} />
      <ArticleList articles={articles} />
    </div>
  );
};

export default Dashboard;
