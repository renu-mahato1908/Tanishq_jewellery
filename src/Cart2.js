import axios from 'axios';
import React, { useState, useEffect, use } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Cart2 = () => {

  const [cartItems, setCartItems] = useState([]);
  const [nocartItems, setNoCartItems] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8090/api/ssproducts${currentUser.id}`)
      .then((response) => {
        setCartItems(response.data.items);
        setNoCartItems(response.data.itemCount)
        console.log(response.data)
        console.log(response.data.items)

      })
  }, []);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser.id) {
      console.log(currentUser);
    }
    // if (currentUser && currentUser.roles[0] === "ROLE_ADMIN") {
    //   console.log(currentUser.roles[0]);

    //   navigate("/Dashboard");
    // }
  }, []);

  return (

    <section>
      <Container>
        <Row>
          <Col>
            <h1>No of Items : {nocartItems}</h1>
            {
              cartItems ?


                cartItems.map((cartItem, index) => {
                  return (

                    // <p key={index}>{cartItem.productId}</p>,
                    // <p key={index}>{cartItem.quantity}</p>,
                    // <p key={index}>{cartItem.price}</p>


                    // <div key={index}>
                    //   <p>{cartItem.productId}</p>
                    //   <p>{cartItem.quantity}</p>
                    //   <p>{cartItem.price}</p>
                    // </div>

                    <Table striped bordered hover>
                      <thead>
                        <tr>
                          <th>Sl</th>
                          <th> Product  Name</th>
                          <th>Quantity</th>
                          
                          <th>Price</th>
                          
                        </tr>
                      </thead>
                      <tbody>
                        {
                          cartItems.map((cartItem, index) => {
                            return (



                              <tr>
                                <td>{index + 1}</td>
                                <td>{cartItem.productId}</td>
                                {/* <td>{<img src={product.images[0]}/>}</td> */}
                                {/* <td><img src={`http://localhost:8090/upload/${product.images[0]}`} /></td> */}


                                <td>{cartItem.quantity}</td>
                                <td>{cartItem.price}</td>
                            
                               




                              </tr>
                            )
                          })


                        }
                      </tbody>
                    </Table>
                  )
                })
                : " no item available"
            }

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cart2
