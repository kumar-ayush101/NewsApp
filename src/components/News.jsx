import React, { useEffect, useState } from "react";
import { fetchNews } from "./NewsService.jsx";

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        const news = await fetchNews(category);
        setArticles(news);
        setLoading(false);
      } catch (error) {
        console.error('Error', error);
        setLoading(false);
      }
    };
    getNews();
  }, [category]);

  if (loading) {
    return <p>Loading......</p>;
  }

  return (
    <div>
      <div>
      <h1>Top {category} news</h1>
      </div>
      
      <ul style={{ padding: 0, listStyleType: 'none' }}>
        {articles.map((article, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <h2>{article.title}</h2>
            {article.urlToImage && (
              <img src={article.urlToImage} alt={article.title} />
            )}
            <p>{article.description}</p>
            <a href={article.url} target="_blank">read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
