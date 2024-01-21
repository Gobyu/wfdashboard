import { useEffect, useState } from "react";

const NewsComponent = ({ refresh, NewsVisible }) => {
  const [warframeNews, setwarframeNews] = useState([]);
  useEffect(() => {
    fetch("https://api.warframestat.us/pc/news").then((res) => {
      return res.json().then((data) => {
        let news_list = [];
        for (const news of data) {
          let expiryYear = new Date(news.date).getFullYear();
          let expiryMonth = new Date(news.date).getMonth() + 1;
          let expiryDate = new Date(news.date).getDate();
          let expiryHour = new Date(news.date).getHours();
          const newsObj = {
            message: news.message,
            link: news.link,
            expiryYear: expiryYear,
            expiryMonth: expiryMonth,
            expiryDate: expiryDate,
            expiryHour: expiryHour,
          };
          news_list.push(newsObj);
        }
        setwarframeNews(news_list);
      });
    });
  }, [refresh && NewsVisible]);

  return (
    <>
      {NewsVisible && (
        <div className="Components" id="NewsSection">
          <h1 className="ComponentTitle">News</h1>
          {warframeNews.toReversed().map((news) => (
            <div className="NewsList">
              <a className="NewsTitle" href={news.link} target="_blank">
                {news.message}
              </a>
              <h3>
                Date: {news.expiryMonth}-{news.expiryDate}-{news.expiryYear}{" "}
                {news.expiryHour}:00
              </h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default NewsComponent;
