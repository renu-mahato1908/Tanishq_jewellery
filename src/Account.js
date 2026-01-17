import React, { useEffect } from "react";


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




              <div className='text-center'>
                     <h3>Account</h3>
                     {
                            currentUser ?
                                   <div className="account">
                                          <p>Mobile : {currentUser.username}</p>
                                          <p>Email : {currentUser.email}</p>
                                   </div> : ""
                     }

                     {/* <section>
                            <Container>
                                   <Row>
                                          <Col>

                                                 <Breadcrumb>
                                                        <Breadcrumb.Item href="Dashboard">Dashboard</Breadcrumb.Item>
                                                        <Breadcrumb.Item href="Products">
                                                               Products
                                                        </Breadcrumb.Item>

                                                 </Breadcrumb>
                                          </Col>
                                   </Row>
                            </Container>
                     </section> */}
              </div>

       )
}

export default Account