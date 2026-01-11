// import React from 'react';
// import { Container, Col, Row, Table } from 'react-bootstrap';

// const AllProducts = () => {
//   const products = [
//     {
//       id: "1",
//       product_name: "Ripple curve Diamond Ring",
//       product_image:
//         "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf3768930/images/hi-res/55D5PBFZQAA02_2.jpg?sw=480&sh=480",
//       product_price: "20k",
//     },
//     {
//       id: "2",
//       product_name: "Breathtaking Onyx Stone Diamond Stud Earrings for Kids",
//       product_image:
//         "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa25216a5/images/hi-res/50F1D1SIGAGA32_2.jpg?sw=480&sh=480",
//       product_price: "40k",
//     },
//   ];

//   return (
//     <section>
//       <Container>
//         <Row>
//           <Col>
//             <Table striped bordered hover responsive>
//               <thead>
//                 <tr>
//                   <th>Sl No</th>
//                   <th>Product Name</th>
//                   <th>Product Image</th>
//                   <th>Product Price</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {products.length > 0 ? (
//                   products.map((product, index) => (
//                     <tr key={product.id}>
//                       <td>{index + 1}</td>
//                       <td>{product.product_name}</td>
//                       <td>
//                         <img
//                           src={product.product_image}
//                           alt={product.product_name}
//                           width="80"
//                         />
//                       </td>
//                       <td>{product.product_price}</td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="text-center">
//                       Please wait
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </Table>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default AllProducts;


import axios from 'axios';
import React, { useState, useEffect, use } from 'react';
import { Container, Col, Row, Button, Table } from 'react-bootstrap';


import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const AllProducts = () => {

  const [products, setProducts] = useState([]);
  const [nocartItems, setNoCartItems] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8090/api/ssproducts")
      .then((response) => {
        setProducts(response.data.items);
        setNoCartItems(response.data.itemCount)
        console.log(response.data)
        console.log(response.data.items)

      })
  }, []);

  

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
                  <th> Name</th>
                  <th>Image</th>
                  <th>Category</th>
                  <th>Price</th>
                  
                  
                </tr>
              </thead>
              <tbody>
                {
                  products.map((product, index) => {
                    return (



                      <tr>
                        <td>{index + 1}</td>
                        <td>{product.productName}</td>
                        {/* <td>{<img src={product.images[0]}/>}</td> */}
                        <td><img src={`http://localhost:8090/upload/${product.images[0]}`} /></td>


                        <td>{product.productCategory}</td>
                        <td>{product.productPrice}</td>
                        
                        




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
  )
}

export default AllProducts

