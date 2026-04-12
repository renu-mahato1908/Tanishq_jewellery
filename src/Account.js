import React, { useEffect } from "react";
import { Container, Col, Row, ListGroup, Breadcrumb } from "react-bootstrap";
import { Link } from 'react-router';



import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

const Account = () => {
       let navigate = useNavigate();
       // const dispatch = useDispatch();
       const { user: currentUser } = useSelector((state) => state.auth);
       useEffect(() => {
              if (currentUser) {
                     console.log(currentUser);
              }
              else {
                     navigate("/Login");
              }

       }, [currentUser]);
       return (


              <div>

                     <section></section>
                     <section>
                            <Container>
                                   <Row>
                                          <Col className="heading">
                                                 <h1>Account</h1>
                                          </Col>
                                   </Row>
                            </Container>
                     </section>


                     <section>
                            <Container>
                                   <Row>
                                          <Col>

                                                 <Breadcrumb>
                                                        <Breadcrumb.Item>
                                                               <Link to="/Dashboard">Dashboard</Link>
                                                        </Breadcrumb.Item>

                                                        <Breadcrumb.Item>
                                                               <Link to="/Account">Account</Link>
                                                        </Breadcrumb.Item>




                                                 </Breadcrumb>

                                          </Col>
                                   </Row>
                            </Container>
                     </section>



                     <section>
                            <Container>



                                   <Row className="canvas2">
                                          <Col md={3}>
                                                 <ListGroup>

                                                        <ListGroup.Item className="menuItem">
                                                               <Link to="/Dashboard">
                                                                      <img src="https://cdn-icons-png.flaticon.com/512/1946/1946488.png" alt="" />
                                                                      <span><h6>Dashboard</h6></span>
                                                               </Link>
                                                        </ListGroup.Item>

                                                        <ListGroup.Item className="menuItem">
                                                               <Link to="/Account">
                                                                      <img src="https://static.vecteezy.com/system/resources/previews/006/732/119/non_2x/account-icon-sign-symbol-logo-design-free-vector.jpg" alt="" />
                                                                      <span><h6>Account</h6></span>
                                                               </Link>
                                                        </ListGroup.Item>

                                                        <ListGroup.Item className="menuItem">
                                                               <Link to="/Addproduct">
                                                                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1Tr9fKwJjakFaxvBR7WFtttuKJq4lXwfnpA&s" alt="" />
                                                                      <span><h6>Add Product</h6></span>
                                                               </Link>
                                                        </ListGroup.Item>

                                                        <ListGroup.Item className="menuItem">
                                                               <Link to="/Products">
                                                                      <img src="https://cdn-icons-png.flaticon.com/512/1311/1311095.png" alt="" />
                                                                      <span><h6>Products</h6></span>
                                                               </Link>
                                                        </ListGroup.Item>

                                                        <ListGroup.Item className="menuItem">
                                                               <Link to="/AddCategory">
                                                                      <img src="https://static.vecteezy.com/system/resources/thumbnails/029/163/312/small/add-files-glyph-icon-add-folder-symbol-empty-folder-new-directory-for-document-portfolio-storage-online-gallery-flat-logo-pictogram-illustration-design-on-white-background-eps-10-vector.jpg" alt="" />
                                                                      <span><h6>Add Category</h6></span>
                                                               </Link>
                                                        </ListGroup.Item>


                                                        <ListGroup.Item className="menuItem">
                                                               <Link to="/OrdersDetail">
                                                                      <img src="https://static.vecteezy.com/system/resources/thumbnails/029/163/312/small/add-files-glyph-icon-add-folder-symbol-empty-folder-new-directory-for-document-portfolio-storage-online-gallery-flat-logo-pictogram-illustration-design-on-white-background-eps-10-vector.jpg" alt="" />
                                                                      <span><h6>Orders </h6></span>
                                                               </Link>
                                                        </ListGroup.Item>

                                                 </ListGroup>
                                          </Col>





                                          <Col md={5}>
                                                 <div >
                                                        {/* <h3>Account</h3> */}
                                                        {
                                                               currentUser ?
                                                                      <div className="account">
                                                                             <p> <strong>Mobile :</strong> {currentUser.username}</p>
                                                                             <p> <strong>Email : </strong>{currentUser.email}</p>
                                                                             {/* <p> <strong>Name : </strong>{currentUser.name}</p> */}

                                                                      </div> : ""
                                                        }


                                                 </div>
                                          </Col>


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

                                                        <ListGroup.Item as="li">
                                                               <Link to="/Orderstatus" className="text-decoration-none text-dark">
                                                                      Order Status
                                                               </Link>


                                                        </ListGroup.Item>
                                                 </ListGroup>


                                          </Col>
                                   </Row>
                            </Container>
                     </section>

              </div>

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