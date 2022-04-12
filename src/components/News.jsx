// moment js
import moment from "moment";
import Card from "./Card";

const News = ({ newsData }) => {
  return (
    <div className="p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
      {newsData.map((news) => (
        <Card
          source={news.source.name}
          publishedAt={moment(news.publishedAt).format("LLL")}
          title={news.title}
          description={news.description}
          author={news.author}
          image={news.urlToImage}
        />
      ))}
    </div>
  );
};

export default News;
