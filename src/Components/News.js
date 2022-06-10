import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import { Alert, Col, Row } from "react-bootstrap";


const SERVER_URL = "http://localhost:3001/news";
const News = () => {
  const [data, setData] = useState([]);
  const [storeData, setStoreData] = useState([]);
  const [error, setError] = useState("");
  const getAllStoreData = async () => {
    try {
      const sData = await axios.get(SERVER_URL);
      setStoreData(sData.data);
    } catch (err) {
      console.log(err, "Error in fetch data");
    }
  };
  const getData = async () => {
    try {
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=604ad27b0e0f4d69befd55b433ee8f80`;
      const parsedData = await axios.get(url);
      setData(parsedData.data.articles);
    } catch (err) {
      setError(err?.message);
    }
  };

  const handleClick = async (title) => {
    try {
      const appendData = data?.find((d) => d.title === title);
      await axios.post(SERVER_URL, {
        id: title,
        ...appendData,
      });
      const initialData = storeData;
      initialData.push({ id: title, ...appendData });
      setStoreData(initialData);
      // render again
      setData([...data]);
    } catch (err) {
      setError(err?.message);
    }
  };

  useEffect(() => {
    getData();
    getAllStoreData();
  }, []);

  if (error) {
    return <Alert variant="danger">{error}</Alert>;
  }

  return (

    <Row>
      {data.length > 0 &&
        data.map((item, i) => (
          <Col sm={4} key={i} style={{ display: "flex", flexDirection: "row" }}>
            <NewsItem
              url={item.urlToImage}
              author={item.author}
              title={item.title}
              key={item.url}
              handleClick={handleClick}
              storeData={storeData}
            />
          </Col>
        ))}
    </Row>


  );
};
export default News;
