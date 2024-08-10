import React, { useEffect, useState } from 'react';
import './News.css';
import { Timeline } from 'react-ts-tradingview-widgets';

import { nanoid } from 'nanoid';
import NewsCard from '../../components/NewsCard.jsx'
import NavIntro from '../../components/NavIntro';
import Loading from '../../components/Loading';

function News() {
  let [stockNews, setStockNews] = useState();
  let [cryptoNews, setCryptoNews] = useState();

  useEffect(() => {
    async function fetchData() {
      const responseStock = await fetch(
        `https://api.marketaux.com/v1/news/all?exchanges=NYSE,NASDAQ&filter_entities=true&limit=3&language=en&published_after=2023-04-10T03:15&api_token=${process.env.REACT_APP_NEWS_API}`
      );

      const responseEthereum = await fetch(
        `https://protected-ridge-45795-fa6808efefb4.herokuapp.com/${process.env.REACT_APP_DATABASE_KEY}/newsApi/crypto`
      );
      const ethereumtResponseJson = await responseEthereum.json();
      let cryptoNewsContent = [];
      let count = 0;
      while (count < 6) {
        let curNews = ethereumtResponseJson['articles'].shift();
        if (curNews.urlToImage === undefined || curNews.urlToImage === null) {
          continue;
        }
        cryptoNewsContent.unshift(
          <NewsCard
            key={nanoid()}
            title={curNews.title}
            description={curNews.description}
            imageUrl={curNews.urlToImage}
            url={curNews.url}
            alt={curNews.author}
            time={curNews.publishedAt}
          />
        );
        count++;
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
      setCryptoNews(cryptoNewsContent);
      setStockNews(stockNewsContent);
    }
    fetchData();
  }, []);

  return (
    <div className="news-wrapper">
      <NavIntro activePage={'news'} />
      {stockNews && cryptoNews ? (
        <div className="news-content-container">
          <div className="news-container">
            <div className="news-title">Stock Market News</div>
            <div className="news-cards">{stockNews}</div>
          </div>
          <div className="news-container">
            <div className="news-title">Crypto Market News</div>
            <div className="news-cards">{cryptoNews}</div>
          </div>
          <div className="news-container">
            <div className="news-title">Market Snap</div>
            <Timeline
              copyrightStyles={{
                parent: {
                  fontSize: '0px',
                  display: 'none',
                },
              }}
              colorTheme="dark"
              feedMode="market"
              market="crypto"
              height={500}
              width="100%"
            ></Timeline>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default News;
