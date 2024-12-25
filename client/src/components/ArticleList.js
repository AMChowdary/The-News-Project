import React, { useEffect, useState } from "react";
import axios from "axios";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await axios.get("http://localhost:5000/api/articles");
      setArticles(response.data);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article._id}>
          <h2>{article.title}</h2>
          <p>{article.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
