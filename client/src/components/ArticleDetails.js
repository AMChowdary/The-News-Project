import React from "react";

const ArticleDetails = ({ article }) => {
  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetails;
