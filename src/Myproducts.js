import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Spinner from 'react-bootstrap/Spinner';



const Myproducts = () => {

  const [products, setproducts] = useState();

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      console.log(response.data);
      setproducts(response.data);
    });

  }, []);


  return (
    <div>
      <Container>
        <Row>
          <Col>
            {
              products ?
                products.map((product, index) => {
                  return (
                    <div>
                      {/* {product.id},{product.title} */}

                    </div>
                  )
                }
                )
                :
                //  "please wait"
                <Spinner animation="border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
            }


          </Col>
        </Row>
      </Container>

      <section>
        <Container>

          <Row>
            {
              products?.map((product, index) => {
                return (
                  <Col key={index}>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={product.image} />
                      <Card.Body>
                        <Card.Title>{product.title}</Card.Title>
                        <Card.Text>
                          {product.price},{product.id}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>


                  </Col>



                );
              }
              )
            }
          </Row>
        </Container>
      </section>



    </div>
  )
}

export default Myproducts

