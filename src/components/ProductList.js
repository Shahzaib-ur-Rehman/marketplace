import React, { Fragment, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestGetProductList } from "../redux/actions/actions";
import { Link } from "react-router-dom";
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
          <div className="col-md-6 col-lg-4 g-md-5 my-3">
            <Link to="/productDetail/1" className="cardLink">
              <div className="card">
                <div className="imgWrapper">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    height={250}
                    width={350}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">{product.description}</p>
                  <div className="productType">
                    <span className="smallProductType">Hot Sell</span>
                    <span className="btnGo">Go SomeWhere</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </Fragment>
  );
};

export default ProductList;
