import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductInfo = ({ list, match }) => {
  console.log(match);
  const product = list.find((el) => Number(el.id) === Number(match.params.id));
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.imgSrc} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Link to="/product">
            <Button variant="primary">Go back</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductInfo;
