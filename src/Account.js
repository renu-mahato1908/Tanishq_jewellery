import React, { useEffect } from "react";
import { Container, Col, Row, ListGroup } from "react-bootstrap";
import { Link } from 'react-router';



import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Account = () => {
       let navigate = useNavigate();
       const dispatch = useDispatch();
       const { user: currentUser } = useSelector((state) => state.auth);
       useEffect(() => {
              if (currentUser) {
                     console.log(currentUser);
              }
              else {
                     navigate("/Login");
              }

       }, []);
       return (




              <section>
                     <Container>
                            <Row>
                                   <Col md={4}>
                                          <ListGroup className="float-list">
                                                 <ListGroup.Item as="li">Account</ListGroup.Item>
                                                 <ListGroup.Item as="li">
                                                        <Link to="/Cart" className="text-decoration-none text-dark">Cart</Link></ListGroup.Item>
                                                 <ListGroup.Item as="li">
                                                        <Link to="/Wishlist" className="text-decoration-none text-dark">
                                                        Wishlist
                                                        </Link></ListGroup.Item>

                                                 <ListGroup.Item as="li">
                                                        <Link to="/Addnewaddress" className="text-decoration-none text-dark">
                                                        Add new Address
                                                        </Link></ListGroup.Item>
                                                 <ListGroup.Item as="li">Orders</ListGroup.Item>
                                                 <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                                          </ListGroup>


                                   </Col>


                                   <Col md={8}>
                                          <div >
                                                 <h3>Account</h3>
                                                 {
                                                        currentUser ?
                                                               <div className="account">
                                                                      <p>Mobile : {currentUser.username}</p>
                                                                      <p>Email : {currentUser.email}</p>
                                                               </div> : ""
                                                 }


                                          </div>
                                   </Col>
                            </Row>
                     </Container>
              </section>

       )
}

export default Account



// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Container, Row, Col, ListGroup } from "react-bootstrap";

// const Account = () => {

//        const [currentUser, setCurrentUser] = useState();
//        const [activeTab, setActiveTab] = useState("Account");



//        useEffect(() => {
//               axios.get(`http://localhost:8090/api/user/${currentUser.id}`)
//                      .then((response) => {

//                      console.log(response.data)


//                      })
//        }, []);






//        const renderContent = () => {
//               switch (activeTab) {
//                      case "Account":
//                             return (


//                              <>
//                              {currentUser && (
//                                    <div className="account">
//                                           <p>Mobile : {currentUser.mobile}</p>
//                                           <p>Email : {currentUser.email}</p>
//                                    </div>
//                                           )}
//                                           <h3>Account</h3>
//                                           <p>Mobile : {currentUser.username}</p>
//                                           <p>Email : {currentUser.email}</p>
//                                    </>
//                             );

//                      case "Cart":
//                             return (
//                                    <>
//                                           <h3>Cart</h3>
//                                           {currentUser.cart?.length > 0 ? (
//                                                  currentUser.cart.map((item) => (
//                                                         <div key={item.id} className="border p-2 mb-2">
//                                                                <p>{item.productName}</p>
//                                                                <p>₹{item.price} × {item.qty}</p>
//                                                         </div>
//                                                  ))
//                                           ) : (
//                                                  <p>Cart empty</p>
//                                           )}
//                                    </>
//                             );

//                      default:
//                             return null;
//               }
//        };

//        return (
//               <section>
//                      <Container>
//                             <Row>
//                                    <Col md={4}>
//                                           <ListGroup>
//                                                  <ListGroup.Item
//                                                         action
//                                                         active={activeTab === "Account"}
//                                                         onClick={() => setActiveTab("Account")}
//                                                  >
//                                                         Account
//                                                  </ListGroup.Item>

//                                                  <ListGroup.Item
//                                                         action
//                                                         active={activeTab === "Cart"}
//                                                         onClick={() => setActiveTab("Cart")}
//                                                  >
//                                                         Cart
//                                                  </ListGroup.Item>
//                                           </ListGroup>
//                                    </Col>

//                                    <Col md={8}>
//                                           {renderContent()}
//                                    </Col>
//                             </Row>
//                      </Container>
//               </section>
//        );
// };

// export default Account;