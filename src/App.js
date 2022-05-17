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
      <section>
        <Container fluid="md" className="sectionMain my-3">
          <Row>
            <Col>
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
