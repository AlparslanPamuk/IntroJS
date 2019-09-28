import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";

export default class App extends Component {
  render() {
    let titleProduct = "Product List";
    let titleCategory = "Category List";
    return (
      <div>
        <Container>
          <Row>
            <Navi />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList title={titleCategory} />
            </Col>

            <Col xs="9">
              <ProductList title={titleProduct} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
