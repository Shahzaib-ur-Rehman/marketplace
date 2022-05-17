import "./App.css";
import Header from "./components/Header";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import Tabs from "./components/Tabs";
import { Button } from "react-bootstrap";
library.add(fas, fab);

function App() {
  return (
    <main>
      <Header />
      <section>
        <Container fluid="md" className="sectionMain">
          <Row>
            <Col>
              <Tabs />
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default App;
