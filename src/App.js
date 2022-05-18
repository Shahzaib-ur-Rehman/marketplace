import "./App.css";
import Header from "./components/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "./components/Tabs";
import { Button } from "react-bootstrap";
import ProductList from "./components/ProductList";
library.add(fas, fab);

function App() {
  return (
    <main className="main">
      <Header />
      <section class="sectionMain">
        <Container fluid="lg" className="my-3">
          <Row>
            <Col class="px-0">
              <Tabs />
            </Col>
          </Row>
          <Row>
            <ProductList />
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default App;
