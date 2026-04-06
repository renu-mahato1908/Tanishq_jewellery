






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
} from "mdb-react-ui-kit";

import React, { useEffect, useState } from "react";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
export default function OrderDetails3() {

   let navigate = useNavigate();
      const dispatch = useDispatch();
      const { user: currentUser } = useSelector((state) => state.auth);
      useEffect(() => {
          if (currentUser) {
              console.log(currentUser);
          }
         
      }, []);

  const [orders, setOrders] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:8090/api/ssorders/user/${currentUser.id}`)
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => console.log(err));
  }, [currentUser.id]);


 




  const OrderStatus = ({ status }) => {
    const steps = [
      "Ordered",
      "Shipped",
      "Out for Delivery",
      "Delivered"
    ];

    const currentStep = steps.findIndex(
      step => step.toLowerCase() === status.toLowerCase()
    );

    return (
      <div style={{ position: "relative", width: "100%", marginTop: "20px" }}>

        {/* Background Line */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: 0,
            width: "100%",
            height: "4px",
            backgroundColor: "#ddd",
            zIndex: 0
          }}
        />

        {/* Active Line */}
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: 0,
            width: `${currentStep === -1
              ? 0
              : (currentStep / (steps.length - 1)) * 100
              }%`,
            height: "4px",
            backgroundColor: "green",
            zIndex: 1,
            transition: "0.4s ease"
          }}
        />

        {/* Steps */}
        <div className="d-flex justify-content-between position-relative">

          {steps.map((step, index) => (
            <div key={index} style={{ textAlign: "center", zIndex: 2 }}>

              {/* Circle */}
              <div
                style={{
                  width: "25px",
                  height: "25px",
                  borderRadius: "50%",
                  backgroundColor: index <= currentStep ? "green" : "#ccc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  margin: "auto"
                }}
              >
                {index < currentStep ? "✓" : index + 1}
              </div>

              {/* Label */}
              <p
                style={{
                  fontSize: "12px",
                  marginTop: "5px",
                  color: index <= currentStep ? "green" : "#999",
                  fontWeight: index === currentStep ? "bold" : "normal"
                }}
              >
                {step}
              </p>

            </div>
          ))}

        </div>
      </div>
    );
  };

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



                      {order.products?.map((item, i) => {
                        if (!item || !item.productId) return null;

                        return (
                          <tr key={i}>
                            <td>
                              {item.productId?.images?.length > 0 && (
                                <img
                                  src={`http://localhost:8090/upload/${item.productId.images[0]}`}
                                  width="60"
                                  alt="product"
                                />
                              )}
                            </td>

                            <td>{item.productId?.productName}</td>
                            <td>{item.quantity}</td>
                            <td>₹ {item.price}</td>
                          </tr>
                        );
                      })}
                    </MDBTableBody>
                  </MDBTable>



                </MDBCardBody>


                <div className="px-4 pb-3">
                  <OrderStatus status={order.status} />
                </div>



                <div className="mt-3">
                  <p><b>Status:</b> {order.status}</p>
                  <p><b>Total:</b> ₹ {order.totalAmount}</p>
                </div>

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