import React, { useEffect, useState } from 'react';
import './News.css';
import { nanoid } from 'nanoid';
import NewsCard from '../../components/NewsCard';
import NavIntro from '../../components/NavIntro';

function News() {
  let [news, setNews] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://api.marketaux.com/v1/news/all?exchanges=NYSE,NASDAQ&filter_entities=true&limit=3&published_after=2023-04-10T03:15&api_token=${process.env.REACT_APP_NEWS_API}`
      );
      const responseJson = await response.json();
      let newsContent = responseJson['data'].map((info) => {
        return (
          <NewsCard
            key={info.uuid}
            title={info.title}
            description={info.description}
            imageUrl={info.image_url}
            url={info.url}
            alt={info.source}
            time={info.published_at}
          />
        );
      });
      setNews(newsContent);
    }
    fetchData();
  }, []);

  return (
    <div className="news-wrapper">
      <NavIntro activePage={'news'} />
      <div className="news-cards">{news}</div>
    </div>
  );
}

export default News;
