import axios from 'axios';
import React, { useState, useEffect, use } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';

import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router';


const Cart = () => {

  const [cartItems, setCartItems,] = useState([]);
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

  }, [currentUser]);

  // const handleDelete = () => {
  //   console.log("delete button clicked")
  //   alert("delete button clicked");

  // }

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${id}`).then((response) => {
      console.log(response.data);
      console.log("Cart item deleted");
      window.location.reload();



    });

  }






  const [products, setProducts] = useState({});



  useEffect(() => {
    axios.get("http://localhost:8090/api/ssproducts")
      .then((res) => {
        const productMap = {};
        res.data.forEach(products => {
          productMap[products.id] = products;
        });
        setProducts(productMap);
      });
  }, []);

  



  const quantityUpdate = (productId, newQuantity) => {
    console.log(productId)
    console.log(newQuantity)
    if (newQuantity < 1) return;
    axios.put(`http://localhost:8090/api/carts/user/${currentUser.id}/item/${productId}`, { quantity: newQuantity }).then((response) => {
      console.log(response.data);
      console.log("Cart item updated");
      window.location.reload();



    });

  }

  const calculateTotal = () => {
    console.log(products)
    if (!Array.isArray(cartItems)) return 0;
    return cartItems.reduce((total, product) => {
      return total + (product.quantity * product.productDetails.productPrice);
    }, 0);
  }

  const subTotal = calculateTotal();

  
    // axios.delete(`http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
    //   console.log(response.data);
    //   console.log("Cart item deleted");
    //   window.location.reload();



    // });




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
                  <th>Image</th>
                  <th> Product  Name</th>
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
                        <td>

                          {products[cartItem.productId] && (
                            <img
                              src={`http://localhost:8090/upload/${products[cartItem.productId].images[0]}`}
                              alt="product"
                              width="60"
                              height="60"
                            />
                          )}
                        </td>

                        <td>
                          {products[cartItem.productId]?.productName}
                        </td>

                        {/* <td>{cartItem.productName}</td> */}
                        <td className="text-center">
                          <button className="btn btn-sm btn-danger me-2" onClick={() => quantityUpdate(cartItem.productId, cartItem.quantity - 1)} disabled={cartItem.quantity <= 1}>-</button>


                          <span>{cartItem.quantity}</span>

                          <button className="btn btn-sm btn-success ms-2" onClick={() => quantityUpdate(cartItem.productId, cartItem.quantity + 1)}>+</button>


                        </td>

                        <td>₹{cartItem.price * cartItem.quantity}</td>

                        <td><button onClick={() => handleDelete(cartItem.productId)}>
                          {<RiDeleteBinLine />}</button></td>






                      </tr>
                    )
                  })


                }
              </tbody>
            </Table>

            <p>Total Amount = &#8377; {subTotal}</p>
            {/* <Link to={'/Address'}> <button  >Next</button></Link> */}

            <Link to="/Address">
              <button>Next</button>
            </Link>


          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cart
