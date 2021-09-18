import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductDetails = ({ el }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={el.imgSrc} />
        <Card.Body>
          <Card.Title>{el.name}</Card.Title>
          <Card.Text>{el.price}</Card.Text>
          <Button variant="primary">
            <Link to={`/details/${el.id}`}>Go somewhere</Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetails;
