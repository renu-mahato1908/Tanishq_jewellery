import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const Addtocart = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/api/cats")
      .then((response) => {
        setCategories(response.data);
      })
  }, []);

  return (
    <section>
      <Container>
        <h2>Add to Cart</h2>
        <Row>
          {categories.map((category, index) => (
            <Col md={4}>
              <Card>
                <Card.Img variant="top" src={category.image} />
                <Card.Body>
                  <Card.Title>{category.name}</Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Addtocart;
