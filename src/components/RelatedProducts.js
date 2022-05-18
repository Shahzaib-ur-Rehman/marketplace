import React, { Fragment, useEffect } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { requestGetProductList } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import "./relatedProduct.css";
const RelatedProducts = () => {
  const dispatch = useDispatch();
  let { loading, ProductList } = useSelector((state) => state.productList);

  useEffect(() => {
    dispatch(requestGetProductList());
  }, []);

  return (
    <Fragment>
      {ProductList.map((product) => {
        return (
          <div className="col-md-6 col-lg-4 g-5">
            <Link to="/productDetail/1" className="cardLink">
              <div class="card">
                <div className="imgWrapper">
                  <Card.Img
                    variant="top"
                    src={product.image}
                    height={250}
                    width={350}
                  />
                </div>
                <div class="card-body">
                  <h5 class="card-title">{product.title}</h5>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </Fragment>
  );
};

export default RelatedProducts;
