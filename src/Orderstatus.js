
// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardFooter,
//   MDBCardHeader,
//   MDBCol,
//   MDBContainer,
//   MDBRow,
//   MDBTypography,
//   MDBTable,
//   MDBTableHead,
//   MDBTableBody,
// } from "mdb-react-ui-kit";

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaCheckCircle } from "react-icons/fa";

// export default function OrderDetails3() {

//   const [orders, setOrders] = useState([]);

//   // useEffect(() => {
//   //   axios.get("http://localhost:8090/api/ssorders")
//   //     .then((response) => {
//   //       setOrders(response.data);
//   //     })
//   //     .catch((err) => console.log(err));
//   // }, []);


//     useEffect(() => {
//     axios.get("http://localhost:8090/api/ssorders/user/6960aa3770913404a8ca89df")
//       .then((response) => {
//         setOrders(response.data);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const OrderStatus = ({ status }) => {
//     const steps = [
//       "Ordered",
//       "Shipped",
//       "Out for Delivery",
//       "Delivered"
//     ];

//     const currentStep = steps.indexOf(status);

//     const getProgressData = (status) => {
//       switch (status) {
//         case "Ordered":
//           return { width: 25, color: "info" };      // blue
//         case "Shipped":
//           return { width: 50, color: "warning" };   // yellow
//         case "Out for Delivery":
//           return { width: 75, color: "primary" };   // dark blue
//         case "Delivered":
//           return { width: 100, color: "success" };  // green
//         default:
//           return { width: 0, color: "secondary" };  // gray
//       }
//     };

//     return (
//       <div className="d-flex justify-content-between align-items-center mt-3">

//         {steps.map((step, index) => (
//           <div key={index} className="text-center" style={{ width: "25%", position: "relative" }}>

//             {/* LINE */}
//             {index !== steps.length - 1 && (
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   left: "50%",
//                   width: "100%",
//                   height: "3px",
//                   backgroundColor: index < currentStep ? "green" : "#ccc",
//                   zIndex: 0
//                 }}
//               ></div>
//             )}

//             {/* CIRCLE */}
//             <FaCheckCircle
//               size={20}
//               style={{
//                 position: "relative",
//                 zIndex: 1,
//                 backgroundColor: "#fff",
//                 borderRadius: "50%"
//               }}
//               color={index <= currentStep ? "green" : "#ccc"}
//             />

//             {/* TEXT */}
//             <p
//               style={{
//                 fontSize: "12px",
//                 marginTop: "5px",
//                 color: index <= currentStep ? "green" : "#ccc",
//                 fontWeight: index === currentStep ? "bold" : "normal"
//               }}
//             >
//               {step}
//             </p>

//           </div>
//         ))}

//       </div>
//     );
//   };

//   return (
//     <section className="h-100" style={{ backgroundColor: "#eee" }}>
//       <MDBContainer className="py-5 h-100">
//         <MDBRow className="justify-content-center">
//           <MDBCol lg="10" xl="8">

//             {orders.map((order, index) => (
//               <MDBCard key={index} className="mb-4">

//                 {/* HEADER */}
//                 <MDBCardHeader>
//                   <MDBTypography tag="h5">
//                     Order ID: {order.id}
//                   </MDBTypography>
//                 </MDBCardHeader>

//                 {/* BODY */}
//                 <MDBCardBody>

//                   {/* TABLE */}
//                   <MDBTable align="middle" responsive>
//                     <MDBTableHead>
//                       <tr>
//                         <th>Image</th>
//                         <th>Product Name</th>
//                         <th>Quantity</th>
//                         <th>Price</th>
//                       </tr>
//                     </MDBTableHead>

//                     <MDBTableBody>
//                       {order.products.map((item, i) => (
//                         <tr key={i}>
//                           <td>
//                             <img
//                               src="https://via.placeholder.com/80"
//                               alt="product"
//                               style={{ width: "60px" }}
//                             />
//                           </td>
//                           <td>{item.productName}</td>
//                           <td>{item.quantity}</td>
//                           <td>₹ {item.price}</td>
//                         </tr>
//                       ))}
//                     </MDBTableBody>
//                   </MDBTable>

//                   <OrderStatus status={order.status} />

//                   {/* ORDER INFO */}
//                   <div className="mt-3">
//                     <p><b>Status:</b> {order.status}</p>
//                     <p><b>Total:</b> ₹ {order.totalAmount}</p>
//                   </div>

//                 </MDBCardBody>

//                 {/* FOOTER */}
//                 <MDBCardFooter style={{ backgroundColor: "#a8729a" }}>

//                   <MDBTypography className="text-white">
//                     Date: {new Date(order.createdAt).toLocaleString()}
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
} from "mdb-react-ui-kit";

import React, { useEffect, useState } from "react";
import axios from "axios";

export default function OrderDetails3() {

  const [orders, setOrders] = useState([]);

  
  useEffect(() => {
    axios
      .get("http://localhost:8090/api/ssorders/user/6960aa3770913404a8ca89df")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

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