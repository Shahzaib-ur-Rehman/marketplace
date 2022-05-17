import React, { Fragment, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestGetProductList } from "../redux/actions/actions";
import "./productlist.css";
const ProductList = () => {
  const dispatch = useDispatch();
  let { loading, ProductList } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(requestGetProductList());
  }, []);

  return (
    <Fragment>
      {ProductList.map((product) => {
        return (
          <Col className="g-5">
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                className="img-fluid"
                src={product.image}
                height="250"
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                {/* <Card.Text>{product.description}</Card.Text> */}
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Fragment>
  );
};

export default ProductList;
