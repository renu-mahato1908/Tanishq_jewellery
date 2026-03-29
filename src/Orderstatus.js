// // import React from 'react'
// // import { Container, Row, Col, Table } from 'react-bootstrap'


// // const Orderstatus = () => {
// //   return (
// //     <div>
// //         <section>
// //             <Container>
// //                 <Row>
// //                     <Col>

// //                     </Col>
// //                 </Row>
// //             </Container>
// //         </section>
// //     </div>
// //   )
// // }

// // export default Orderstatus




// import axios from 'axios';
// import { useState, useEffect } from 'react';
// import { Container, Row, Col, ProgressBar } from "react-bootstrap";
// import { FaCheckCircle } from "react-icons/fa";

// const OrderStatus = ({ status }) => {
//   const steps = [
//     "Ordered",
//     "Shipped",
//     "Out for Delivery",
//     "Delivered"
//   ];

//   const currentStep = steps.indexOf(status);


//    const [orderstatus, setorderstatus] = useState(0);


//       useEffect(() => {

//           axios.get("localhost:8090/api/ssorders/69b3870caec753209bde8bea/status")
//               .then((response) => {
//                   console.log(" order status",response.data)
//                   setorderstatus(response.data.length);
//               })

//       }, [])

//   return (
//     <Container className="mt-4">
//       <Row className="justify-content-center">
//         <Col md={10}>
//           <div className="p-4 shadow rounded bg-white">

//             <h5 className="mb-4">Order Status</h5>

//             {/* Progress Bar */}
//             <ProgressBar now={((currentStep + 1) / steps.length) * 200} className="mb-4" />


//             <div className="d-flex justify-content-between text-center">
//               {steps.map((step, index) => (
//                 <div key={index} style={{ width: "45%" }}>


//                   <div>
//                     {index <= currentStep ? (
//                       <FaCheckCircle color="green" size={25} />
//                     ) : (
//                       <FaCheckCircle color="lightgray" size={25} />
//                     )}
//                   </div>


//                   <p
//                     style={{
//                       fontWeight: index === currentStep ? "bold" : "normal",
//                       color: index <= currentStep ? "green" : "gray",
//                       marginTop: "8px"
//                     }}
//                   >
//                     {step}
//                   </p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default OrderStatus;







// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardFooter,
//   MDBCardHeader,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//   MDBProgress,
//   MDBProgressBar,
//   MDBRow,
//   MDBTypography,
// } from "mdb-react-ui-kit";
// import React from "react";

// export default function OrderDetails3() {


//   return (
//     <>
//       <section
//         className="h-100 gradient-custom"
//         style={{ backgroundColor: "#eee" }}
//       >
//         <MDBContainer className="py-5 h-100">
//           <MDBRow className="justify-content-center align-items-center h-100">
//             <MDBCol lg="10" xl="8">
//               <MDBCard style={{ borderRadius: "10px" }}>
//                 <MDBCardHeader className="px-4 py-5">
//                   <MDBTypography tag="h5" className="text-muted mb-0">
//                     Thanks for your Order,{" "}
//                     <span style={{ color: "#a8729a" }}>Anna</span>!
//                   </MDBTypography>
//                 </MDBCardHeader>
//                 <MDBCardBody className="p-4">
//                   <div className="d-flex justify-content-between align-items-center mb-4">
//                     <p
//                       className="lead fw-normal mb-0"
//                       style={{ color: "#a8729a" }}
//                     >
//                       Receipt
//                     </p>
//                     <p className="small text-muted mb-0">
//                       Receipt Voucher : 1KAU9-84UIL
//                     </p>
//                   </div>

//                   <MDBCard className="shadow-0 border mb-4">
//                     <MDBCardBody>
//                       <MDBRow>
//                         <MDBCol md="2">
//                           <MDBCardImage
//                             src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/13.webp"
//                             fluid
//                             alt="Phone"
//                           />
//                         </MDBCol>
//                         <MDBCol
//                           md="2"
//                           className="text-center d-flex justify-content-center align-items-center"
//                         >
//                           <p className="text-muted mb-0">Samsung Galaxy</p>
//                         </MDBCol>
//                         <MDBCol
//                           md="2"
//                           className="text-center d-flex justify-content-center align-items-center"
//                         >
//                           <p className="text-muted mb-0 small">White</p>
//                         </MDBCol>
//                         <MDBCol
//                           md="2"
//                           className="text-center d-flex justify-content-center align-items-center"
//                         >
//                           <p className="text-muted mb-0 small">
//                             Capacity: 64GB
//                           </p>
//                         </MDBCol>
//                         <MDBCol
//                           md="2"
//                           className="text-center d-flex justify-content-center align-items-center"
//                         >
//                           <p className="text-muted mb-0 small">Qty: 1</p>
//                         </MDBCol>
//                         <MDBCol
//                           md="2"
//                           className="text-center d-flex justify-content-center align-items-center"
//                         >
//                           <p className="text-muted mb-0 small">$499</p>
//                         </MDBCol>
//                       </MDBRow>
//                       <hr
//                         className="mb-4"
//                         style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
//                       />
//                       <MDBRow className="align-items-center">
//                         <MDBCol md="2">
//                           <p className="text-muted mb-0 small">Track Order</p>
//                         </MDBCol>
//                         <MDBCol md="10">
//                           <MDBProgress
//                             style={{ height: "6px", borderRadius: "16px" }}
//                           >
//                             <MDBProgressBar
//                               style={{
//                                 borderRadius: "16px",
//                                 backgroundColor: "#a8729a",
//                               }}
//                               width={65}
//                               valuemin={0}
//                               valuemax={100}
//                             />
//                           </MDBProgress>
//                           <div className="d-flex justify-content-around mb-1">
//                             <p className="text-muted mt-1 mb-0 small ms-xl-5">
//                               Out for delivery
//                             </p>
//                             <p className="text-muted mt-1 mb-0 small ms-xl-5">
//                               Delivered
//                             </p>
//                           </div>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBCardBody>
//                   </MDBCard>

//                   {/* <MDBCard className="shadow-0 border mb-4">
//                     <MDBCardBody>
//                       <MDBRow>
//                         <MDBCol md="2">
//                           <MDBCardImage
//                             src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/1.webp"
//                             fluid
//                             alt="Phone"
//                           />
//                         </MDBCol>
//                         <MDBCol
//                           md="2"
//                           className="text-center d-flex justify-content-center align-items-center"
//                         >
//                           <p className="text-muted mb-0">iPad</p>
//                         </MDBCol>
//                         <MDBCol
//                           md="2"
//                           className="text-center d-flex justify-content-center align-items-center"
//                         >
//                           <p className="text-muted mb-0 small">Pink rose</p>
//                         </MDBCol>
//                         <MDBCol
//                           md="2"
//                           className="text-center d-flex justify-content-center align-items-center"
//                         >
//                           <p className="text-muted mb-0 small">
//                             Capacity: 32GB
//                           </p>
//                         </MDBCol>
//                         <MDBCol
//                           md="2"
//                           className="text-center d-flex justify-content-center align-items-center"
//                         >
//                           <p className="text-muted mb-0 small">Qty: 1</p>
//                         </MDBCol>
//                         <MDBCol
//                           md="2"
//                           className="text-center d-flex justify-content-center align-items-center"
//                         >
//                           <p className="text-muted mb-0 small">$399</p>
//                         </MDBCol>
//                       </MDBRow>
//                       <hr
//                         className="mb-4"
//                         style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
//                       />
//                       <MDBRow className="align-items-center">
//                         <MDBCol md="2">
//                           <p className="text-muted mb-0 small">Track Order</p>
//                         </MDBCol>
//                         <MDBCol md="10">
//                           <MDBProgress
//                             style={{ height: "6px", borderRadius: "16px" }}
//                           >
//                             <MDBProgressBar
//                               style={{
//                                 borderRadius: "16px",
//                                 backgroundColor: "#a8729a",
//                               }}
//                               width={20}
//                               valuemin={0}
//                               valuemax={100}
//                             />
//                           </MDBProgress>
//                           <div className="d-flex justify-content-around mb-1">
//                             <p className="text-muted mt-1 mb-0 small ms-xl-5">
//                               Out for delivary
//                             </p>
//                             <p className="text-muted mt-1 mb-0 small ms-xl-5">
//                               Delivered
//                             </p>
//                           </div>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBCardBody>
//                   </MDBCard> */}

//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="fw-bold mb-0">Order Details</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Total</span> $898.00
//                     </p>
//                   </div>

//                   <div className="d-flex justify-content-between pt-2">
//                     <p className="text-muted mb-0">Invoice Number : 788152</p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Discount</span> $19.00
//                     </p>
//                   </div>

//                   <div className="d-flex justify-content-between">
//                     <p className="text-muted mb-0">
//                       Invoice Date : 22 Dec,2019
//                     </p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">GST 18%</span> 123
//                     </p>
//                   </div>

//                   <div className="d-flex justify-content-between mb-5">
//                     <p className="text-muted mb-0">
//                       Recepits Voucher : 18KU-62IIK
//                     </p>
//                     <p className="text-muted mb-0">
//                       <span className="fw-bold me-4">Delivery Charges</span>{" "}
//                       Free
//                     </p>
//                   </div>
//                 </MDBCardBody>
//                 <MDBCardFooter
//                   className="border-0 px-4 py-5"
//                   style={{
//                     backgroundColor: "#a8729a",
//                     borderBottomLeftRadius: "10px",
//                     borderBottomRightRadius: "10px",
//                   }}
//                 >
//                   <MDBTypography
//                     tag="h5"
//                     className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
//                   >
//                     Total paid: <span className="h2 mb-0 ms-2">$1040</span>
//                   </MDBTypography>
//                 </MDBCardFooter>
//               </MDBCard>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       </section>
//     </>
//   );
// }






// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardFooter,
//   MDBCardHeader,
//   MDBCardImage,
//   MDBCol,
//   MDBContainer,
//  
//   MDBRow,
//   MDBTypography,
// } from "mdb-react-ui-kit";

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function OrderDetails3() {

//   const [orders, setOrders] = useState([]);

//   useEffect(() => {

//     axios.get("http://localhost:8090/api/ssorders")
//       .then((response) => {
//         console.log(response.data)
//         setOrders(response.data);
//       })

//   }, [])



//   return (
//     <section className="h-100 gradient-custom" style={{ backgroundColor: "#eee" }}>
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center">
//           <MDBCol lg="10" xl="8">

//             {orders.map((order, index) => (
//               <MDBCard key={index} style={{ borderRadius: "10px", marginBottom: "20px" }}>

//                 <MDBCardHeader className="px-4 py-5">
//                   <MDBTypography tag="h5" className="text-muted mb-0">
//                     Order ID: {order._id}
//                   </MDBTypography>
//                 </MDBCardHeader>

//                 <MDBCardBody className="p-4">

//                   {/* Products */}
//                   {order.products.map((item, i) => (
//                     <MDBCard className="shadow-0 border mb-4" key={i}>
//                       <MDBCardBody>
//                         <MDBRow>


//                           <MDBCol md="3">
//                             <p>Product Image</p>
//                             <MDBCardImage
//                               src="https://via.placeholder.com/100"
//                               fluid
//                             />
//                           </MDBCol>

//                           <MDBCol md="3" className="d-flex align-items-center">
//                             <p>Product Name</p>
//                             <p>{item.productName}</p>
//                           </MDBCol>

//                           <MDBCol md="3" className="d-flex align-items-center">
//                              <p>Quantity:</p>
//                             <p>{item.quantity}</p>
//                           </MDBCol>

//                           <MDBCol md="3" className="d-flex align-items-center">
//                             <p>Price</p>
//                             <p>₹ {item.price}</p>
//                           </MDBCol>

//                         </MDBRow>
//                       </MDBCardBody>
//                     </MDBCard>
//                   ))}

//                   {/* Status Bar */}
//                   <MDBProgress style={{ height: "6px" }}>
//                     <MDBProgressBar
//                       width={order.status === "Delivered" ? 100 : 60}
//                     />
//                   </MDBProgress>

//                   <div className="mt-3">
//                     <p>Status: {order.status}</p>
//                     <p>Total: ₹ {order.totalAmount}</p>
//                   </div>

//                 </MDBCardBody>

//                 <MDBCardFooter style={{ backgroundColor: "#a8729a" }}>
//                   <MDBTypography className="text-white">
//                     Date: {order.createdAt}
//                   </MDBTypography>
//                 </MDBCardFooter>

//               </MDBCard>
//             ))}

//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }






import {
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBProgress,
  MDBProgressBar,
} from "mdb-react-ui-kit";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OrderDetails3() {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/api/ssorders")
      .then((response) => {
        setOrders(response.data);
      });
  }, []);

  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center">
          <MDBCol lg="10" xl="8">

            {orders.map((order, index) => (
              <MDBCard key={index} className="mb-4">

                <MDBCardHeader>
                  <MDBTypography tag="h5">
                    Order ID: {order.id}
                  </MDBTypography>
                </MDBCardHeader>

                <MDBCardBody>

                  {/* TABLE START */}
                  <MDBTable align="middle" responsive>
                    <MDBTableHead>
                      <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </MDBTableHead>

                    <MDBTableBody>
                      {order.products.map((item, i) => (
                        <tr key={i}>
                          <td>
                            <img
                              src="https://via.placeholder.com/80"
                              alt="product"
                              style={{ width: "60px" }}
                            />
                          </td>
                          <td>{item.productName}</td>
                          <td>{item.quantity}</td>
                          <td>₹ {item.price}</td>
                        </tr>
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                  {/* TABLE END */}

                  <MDBProgress style={{ height: "6px" }}>
                  <MDBProgressBar
                    width={order.status === "Delivered" ? 100 : 60}
                  />
                </MDBProgress>

                  <div className="mt-3">
                    <p><b>Status:</b> {order.status}</p>
                    <p><b>Total:</b> ₹ {order.totalAmount}</p>
                  </div>




                </MDBCardBody>

                

                <MDBCardFooter style={{ backgroundColor: "#a8729a" }}>
                  <MDBTypography className="text-white">
                    Date: {new Date(order.createdAt).toLocaleString()}
                  </MDBTypography>
                </MDBCardFooter>

              </MDBCard>




            ))}

          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}