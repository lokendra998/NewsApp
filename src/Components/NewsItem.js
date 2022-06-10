import { Button, Card } from "react-bootstrap";

const NewsItem = ({ title, author, url, handleClick, storeData }) => {
  const checkAlreadyStore = (title) => {
    const checkData = storeData?.find(
      ({ title: stTitle }) => stTitle === title
    );
    return !checkData;
  };
  return (
    <Card>
      <Card.Img
        style={{ width: "auto", height: "30vh" }}
        alt="Image not found"
        src={url}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{author}</Card.Text>
        {checkAlreadyStore(title) && (
          <Button onClick={() => handleClick(title)} variant="outline-primary">
            Read later
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};
export default NewsItem;
