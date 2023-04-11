import React, { useEffect, useState } from "react";
import "./News.css";
import NavIntro from "../../components/NavIntro";

function News() {
  let [news, setNews] = useState()

  useEffect(() =>{
    async function fetchData(){
      const response = await fetch(`https://api.marketaux.com/v1/news/all?exchanges=NYSE&filter_entities=true&limit=3&published_after=2023-04-10T03:15&api_token=${process.env.REACT_APP_NEWS_API}`)
      const responseJson = await response.json()
      setNews(responseJson['data'])
    }
    fetchData()
  }, [])
  return (
    <div>
      <NavIntro activePage={"learn"} />
    </div>
  );
}

export default News;
