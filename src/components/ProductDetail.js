import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./productDetail.css";
import HeartImage from "../images/heart.png";
import Copy from "../images/copy.png";
import arrowUp from "../images/arrow_up.png";
import vectorIcon from "../images/Vector.png";
import Chart from "./Chart";
import ProductList from "./ProductList";
import RelatedProducts from "./RelatedProducts";
const ProductDetail = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col md={6}>
          {/* <Button className="customBtn">Back</Button> */}
          <span className="btn customBtn">Back</span>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col md={6}>
          <div className="productDetailImgWrapper">
            <img
              src="https://picsum.photos/200/300"
              width={450}
              height={450}
              className="ProductDetailImage"
            />
          </div>
          <Row className="mt-4 mt-lg-5">
            <h4 class="font-semibold text-white mb-3 mb-md-0">
              Product Details
            </h4>
            <Col md={12}>
              <tbody>
                <tr>
                  <th class="border-t-0  align-middle border-l-0 border-r-0 text-white whitespace-nowrap  text-left">
                    Name
                  </th>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-white whitespace-nowrap p-4">
                    Robolux System AIO
                  </td>
                </tr>
                <tr>
                  <th class="border-t-0  align-middle border-l-0 border-r-0 text-white whitespace-nowraptext-left">
                    Licence Type
                  </th>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-white whitespace-nowrap p-4">
                    Machine Licence
                  </td>
                </tr>
                <tr>
                  <th class="border-t-0  align-middle border-l-0 border-r-0 text-white whitespace-nowrap  text-left">
                    Version
                  </th>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-white whitespace-nowrap p-4">
                    2.1 Kernel
                  </td>
                </tr>
                <tr>
                  <th class="border-t-0  align-middle border-l-0 border-r-0 text-white whitespace-nowrap  text-left">
                    Release Date
                  </th>
                  <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-white whitespace-nowrap p-4">
                    16 Aug 2020
                  </td>
                </tr>
              </tbody>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <div className="d-flex justify-content-between align-items-center my-3 mt-md-0 mb-lg-3">
            <div>
              <h2 className="mb-0">Robolux Sytem AIO</h2>
            </div>
            <div className="heartImgWrapper">
              <img src={HeartImage} className="iconImage" />
            </div>
          </div>
          <div className="d-flex justify-content-between py-3">
            <div>
              <Button className="variantBtn">MACHINE LICENCE</Button>
            </div>
            <div className="heartImgWrapper">
              <img src={Copy} className="iconImage" />
            </div>
          </div>
          <div className="py-3">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
              blandit vitae volutpat odio odio aliquam id. Maecenas pretium, vel
              massa nunc habitasse eget mauris tristique.
            </span>
          </div>
          <div className="py-3 priceSection">
            <div className="mb-3">
              <h6>Current price</h6>
            </div>
            <div className="">
              <h4 className="d-inline-block">6.25 ETH</h4>
              <span className="tradeBtn">
                <img src={arrowUp} className="arrowUpIcon" />
                <span className="tradeNumber">1.2%</span>
              </span>
            </div>
            <div className="my-3 my-lg-4">
              <Button className="primary">
                <span>
                  <img src={vectorIcon} className="vectorIcon" />
                </span>
                <span className="BuyNowBtn">Buy Now</span>
              </Button>
            </div>
          </div>
          <div>
            <div class="rounded-t mb-0  py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full  max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-white">Product Description</h3>
                </div>
              </div>
            </div>
            <div class="block w-full overflow-x-auto">
              <p class="flex flex-wrap items-center border-t-0  align-middle border-l-0 border-r-0 text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi
                blandit vitae volutpat odio odio aliquam id. Maecenas pretium,
                vel massa nunc habitasse eget mauris tristique.
              </p>
              <a>
                <p class="flex flex-wrap items-center border-t-0  align-middle border-l-0 border-r-0  readMoreLink">
                  read more
                </p>
              </a>
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row className="mt-4  mt-lg-5">
        <Col md={6}>
         
        </Col>
      </Row> */}

      <Row className="mt-4 mt-md-3 mt-lg-5">
        <h4 class="font-semibold text-white mb-3 mb-md-4 mb-lg-5">
          Product Description
        </h4>
        <Col md={12} className="graphStyling">
          <Chart />
        </Col>
      </Row>
      <Row className="mt-4 mt-lg-5">
        <h4 class="font-semibold text-white mb-3">RELATED PRODUCTS</h4>
        <Col md={12}>
          <Row>
            {" "}
            <RelatedProducts />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
