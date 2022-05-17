import React, { useEffect } from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { requestGetProductList } from "../redux/actions/actions";
const ProductList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestGetProductList());
  }, []);

  return <Col>kk</Col>;
};

export default ProductList;
