import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';
import { RiDeleteBinLine } from "react-icons/ri";

const Addtocart = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/api/cats")
      .then((response) => {
        setCategories(response.data);
      })
  }, []);

  const [count, setCount] = useState(0);
  console.log(count);

  const increase = () => {
    setCount(count + 1);
  }


  const decrease = () => {
    setCount(count - 1);
  }

   const handleDelete = (id) => {
        console.log(id)
       
       
        ;
    
      }

  return (
    <section>
      <Container>
        <h2>Add to Cart</h2>
        <Row>
          <Col md={6}  >
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sl</th>
                  <th>  Product Name</th>
                  <th>Product image</th>
                  <th>Product price</th>
                  <th>Quantity</th>
                  <th>Delete</th>


                </tr>
              </thead>
              <tbody>
                {
                  categories.map((category, index) => {
                    return (
                      // <p>{category.name}</p>


                      <tr>
                        <td>{index + 1}</td>
                        <td>{category.name}</td>
                        <td>{category.image}</td>
                        <td>{category.price}</td>
                        <td>
                          <p>{count}</p>
                          <button onClick={increase}>+</button>
                          <button onClick={decrease}>-</button>
                        </td>
                        <td><button onClick={() => handleDelete(category.id)}>
                          {<RiDeleteBinLine />
                          }

                        </button></td>


                      </tr>
                    )
                  })


                }
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Addtocart;
