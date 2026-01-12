import axios from 'axios';
import React, { useState, useEffect, use } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router';


const Cart = () => {

  const [cartItems, setCartItems] = useState([]);
  const [nocartItems, setNoCartItems] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8090/api/carts/user/${currentUser.id}`)
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
    if (currentUser && currentUser.roles[0] === "ROLE_ADMIN") {
      console.log(currentUser.roles[0]);

      navigate("/Cart");
    }
  }, [currentUser]);

  const handleDelete=()=>{
    console.log("delete button clicked")
    alert("delete button clicked");
  }

  return (

    <section>
      <Container>
        <Row>
          <Col>
            <h1>No of Items : {nocartItems}</h1>




            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Sl</th>
                  <th> Product  Id</th>
                  <th>Quantity</th>

                  <th>Price</th>
                  <th>Delete</th>

                </tr>
              </thead>
              <tbody>
                {
                  cartItems.map((cartItem, index) => {
                    return (



                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{cartItem.productId}</td>



                        <td>{cartItem.quantity}</td>
                        <td>{cartItem.price}</td>
                        <td><button onClick={() => handleDelete()}>
                          {<RiDeleteBinLine />}</button></td>






                      </tr>
                    )
                  })


                }
              </tbody>
            </Table>

            <p>Total Amount</p>
           <Link to={'/Address'}> <button>Next</button></Link>


          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cart
