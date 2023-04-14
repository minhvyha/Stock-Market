import React, { useEffect, useState } from 'react';
import './News.css';
import { nanoid } from 'nanoid';
import NewsCard from '../../components/NewsCard';
import NavIntro from '../../components/NavIntro';

function News() {
  let [stockNews, setStockNews] = useState();
  let [cryptoNews, setCryptoNews] = useState();

  useEffect(() => {
    async function fetchData() {
      const responseStock = await fetch(
        `https://api.marketaux.com/v1/news/all?exchanges=NYSE,NASDAQ&filter_entities=true&limit=3&published_after=2023-04-10T03:15&api_token=${process.env.REACT_APP_NEWS_API}`
      );

      const responseEthereum = await fetch(
        `https://newsapi.org/v2/everything?q=crypto&apiKey=${process.env.REACT_APP_CRYPTO_NEWS_API}&language=en`
      )
      const ethereumtResponseJson = await responseEthereum.json()
      let cryptoNewsContent = []
      let count = 0
      while (count < 6){
        console.log(1)
        let curNews = ethereumtResponseJson['articles'].shift()
        if ( curNews.urlToImage === undefined || curNews.urlToImage === null){
          continue
        }
        cryptoNewsContent.unshift(
          <NewsCard key={nanoid()}
          title={curNews.title}
          description={curNews.description}
          imageUrl={curNews.urlToImage}
          url={curNews.url}
          alt={curNews.author}
          time={curNews.publishedAt} />
        )
        count++
      }


      const stockResponseJson = await responseStock.json();
      let stockNewsContent = stockResponseJson['data'].map((info) => {
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
      console.log(cryptoNewsContent)
      setCryptoNews(cryptoNewsContent)
      setStockNews(stockNewsContent);
    }
    fetchData();
  }, []);

  return (
    <div className="news-wrapper">
      <NavIntro activePage={'news'} />
      <div className="news-cards">{stockNews}</div>
      {cryptoNews}
    </div>
  );
}

export default News;
