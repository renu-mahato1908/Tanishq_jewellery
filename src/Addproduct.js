// import axios from 'axios';
// import React, { useState, useEffect } from 'react'
// import { Formik, Form, Field } from 'formik';
// import * as Yup from 'yup';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router";

// import './Addproduct.css';







// const Addproduct = () => {

//   const SignupSchema = Yup.object().shape({


//     productName: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),
//     productPrice: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),

//     productCategory: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),



//     productDescription: Yup.string()
//       .min(10, 'Too Short!')
//       .max(80, 'Too Long!')
//       .required('Required'),

//     productGender: Yup.string()
//       .min(2, 'Too Short!')
//       .max(50, 'Too Long!')
//       .required('Required'),





//   });
//   let navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { user: currentUser } = useSelector((state) => state.auth);
//   useEffect(() => {
//     if (currentUser) {
//       console.log(currentUser);
//     }
//     if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
//       console.log(currentUser.roles[0]);

//       navigate("/Home");
//     }
//   }, [currentUser]);

//   const handleFileChange = (e) => {
//     setSelectedImages(e.target.files);
//   };



//   const [categories, setCategories] = useState();
//   const [selectedImages, setSelectedImages] = useState([]);


//   useEffect(() => {
//     axios.get("http://localhost:8090/api/cats").then((response) => {
//       console.log(response.data);
//       setCategories(response.data);
//     });

//   }, []);

//   // const categories = [
//   //   {
//   //     'id': 1,
//   //     'category': 'gold',

//   //   },
//   //   {
//   //     'id': 2,
//   //     'category': 'diamond',

//   //   },
//   //   {
//   //     'id': 3,
//   //     'category': 'wedding'
//   //   },
//   //   {
//   //     'id': 4,
//   //     'category': 'rings'

//   //   }
//   // ]
//   return (
//     <div className='text-center'>
//       <h2>Add product</h2>
//       <Formik
//         initialValues={{
//           productName: '',
//           productPrice: '',
//           productCategory: '',
//           productDescription: '',
//           productGender: '',
//           // file: null,


//         }}





//         validationSchema={SignupSchema}
//         onSubmit={async (values, { resetForm }) => {
//           const formData = new FormData();

//           formData.append("userId", currentUser.id);

//           Object.keys(values).forEach((key) => {
//             formData.append(key, values[key]);
//           });

//           for (let i = 0; i < selectedImages.length; i++) {
//             formData.append("images", selectedImages[i]);
//           }

//           try {
//             const res = await axios.post(
//               "http://localhost:8090/api/ssproducts",
//               formData,
//               {
//                 headers: {
//                   "Content-Type": "multipart/form-data",
//                 },
//               }
//             );
//             console.log("Upload success:", res.data);
//             alert("Product added successfully!");
//             resetForm();
//             setSelectedImages([]);
//           } catch (err) {
//             console.error("Upload failed:", err);
//             alert("Failed to add product");
//           }
//         }}
//       >
//         {({ errors, touched }) => (
//           <Form>
//             <div className='addproduct'>


//               <Row>

//                 <Col md={6}>
//                   <label>Product Name:</label>

//                 </Col>
//                 <Col md={6}>
//                   <Field name="productName" />

//                   {errors.productName && touched.productName ? (
//                     <div>{errors.productName}</div>
//                   ) : null}
//                 </Col>

//               </Row>

//               <Row>
//                 <Col md={6}>
//                   <label>Product price:</label>

//                 </Col>
//                 <Col md={6}>
//                   <Field name="productPrice" />
//                   {errors.productPrice && touched.productPrice ? (
//                     <div>{errors.productPrice}</div>
//                   ) : null}
//                 </Col>

//               </Row>



//               <Row>
//                 <Col md={6}>
//                   <label>Product category:</label>

//                 </Col>
//                 <Col md={6}>

//                   <Field as="select" name="productCategory">
//                     <option value=""> ----Select category----- </option>
//                     {
//                       categories ?
//                         categories.map((category, index) => {
//                           return (
//                             <option value={category.name} key={index}>{category.name}</option>




//                           )
//                         })
//                         :

//                         "Loading ..."
//                     }


//                   </Field>
//                 </Col>




//               </Row>


//               <Row>
//                 <Col md={6}>
//                   <label>Product Description:</label>

//                 </Col>
//                 <Col md={6}>
//                   <Field name="productDescription" />
//                   {errors.productDescription && touched.productDescription ? (
//                     <div>{errors.productDescription}</div>
//                   ) : null}
//                 </Col>

//               </Row>

//               <Row>
//                 <Col md={6}>
//                   <label>Gender:</label>
//                 </Col>

//                 <Col md={6}>
//                   <label>
//                     <Field type="radio" name="productGender" value="Male" />
//                     Male
//                   </label>
//                   <label>
//                     <Field type="radio" name="productGender" value="Female" />
//                     Female
//                   </label>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col md={6}>Images</Col>
//                 <Col md={6}>
//                   <input
//                     type="file"
//                     multiple
//                     accept="image/*"
//                     onChange={handleFileChange}
//                   />
//                   {selectedImages.length > 0 && (
//                     <div>{selectedImages.length} image(s) selected</div>
//                   )}
//                 </Col>
//               </Row>

//               {/* 
//               <Row>
//                 <Form.Group className="position-relative mb-3">
//                   <Col>

//                     <Form.Label>File</Form.Label>
//                   </Col>
//                   <Col>
//                     <Form.Control
//                       type="file"
//                       required
//                       name="file"
//                       onChange={handleChange}
//                       isInvalid={!!errors.file}
//                     />
//                   </Col>
//                   <Form.Control.Feedback type="invalid" tooltip>
//                     {errors.file}
//                   </Form.Control.Feedback>
//                 </Form.Group>
//               </Row> */}



//               <Row>
//                 <Col>
//                   <button className='addbtn'>Add Product</button>

//                   {/* <Link to={'/Addnewaddress'}> <button type="button" className='newbtn'>

//                     Add new address

//                     <img src='https://icons.veryicon.com/png/o/miscellaneous/o2o-middle-school-project/plus-104.png'></img>
//                   </button></Link> */}




//                 </Col>
//                 {/* <h4>Add new Address</h4> */}
//                 {/* <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4d3tRjWStr7nI-0IV-0QHVhf0tZxrICif8g&s'></img> */}


//               </Row>
//             </div>


//           </Form>
//         )}
//       </Formik>


//     </div>
//   )
// }

// export default Addproduct



import axios from "axios";
import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Container, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import "./Addproduct.css";

const Addproduct = () => {
  const navigate = useNavigate();
  const { user: currentUser } = useSelector((state) => state.auth);

  const [categories, setCategories] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);

  // 🔐 Admin check
  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    } else if (currentUser.roles[0] !== "ROLE_ADMIN") {
      navigate("/home");
    }
  }, [currentUser, navigate]);

  // 📦 Fetch categories
  useEffect(() => {
    axios.get("http://localhost:8090/api/cats").then((res) => {
      setCategories(res.data);
    });
  }, []);

  // 📸 Image handler
  const handleFileChange = (e) => {
    setSelectedImages(e.target.files);
  };

  // ✅ Validation
  const SignupSchema = Yup.object().shape({
    productName: Yup.string().min(2).required("Required"),
    productPrice: Yup.string().required("Required"),
    productCategory: Yup.string().required("Required"),
    productDescription: Yup.string().min(10).required("Required"),
    productGender: Yup.string().required("Required"),
  });

  return (
    <Container className="text-center">
      <h2>Add Product</h2>

      <Formik
        initialValues={{
          productName: "",
          productPrice: "",
          productCategory: "",
          productDescription: "",
          productGender: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          const formData = new FormData();

          formData.append("userId", currentUser.id);

          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });

          for (let i = 0; i < selectedImages.length; i++) {
            formData.append("images", selectedImages[i]);
          }

          try {
            await axios.post(
              "http://localhost:8090/api/ssproducts",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                  Authorization: `Bearer ${currentUser.accessToken}`,
                },
              }
            );

            alert("✅ Product added successfully");
            resetForm();
            setSelectedImages([]);
          } catch (err) {
            console.error(err.response?.data || err.message);
            alert("❌ Product added failed");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="addproduct">
            {/* Product Name */}
            <Row>
              <Col md={6}>Product Name</Col>
              <Col md={6}>
                <Field name="productName" />
                {errors.productName && touched.productName && (
                  <div className="error">{errors.productName}</div>
                )}
              </Col>
            </Row>

            {/* Price */}
            <Row>
              <Col md={6}>Price</Col>
              <Col md={6}>
                <Field name="productPrice" />
                {errors.productPrice && touched.productPrice && (
                  <div className="error">{errors.productPrice}</div>
                )}
              </Col>
            </Row>

            {/* Category */}
            <Row>
              <Col md={6}>Category</Col>
              <Col md={6}>
                <Field as="select" name="productCategory">
                  <option value="">-- Select Category --</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.name}>
                      {cat.name}
                    </option>
                  ))}
                </Field>
              </Col>
            </Row>

            {/* Description */}
            <Row>
              <Col md={6}>Description</Col>
              <Col md={6}>
                <Field name="productDescription" />
                {errors.productDescription &&
                  touched.productDescription && (
                    <div className="error">
                      {errors.productDescription}
                    </div>
                  )}
              </Col>
            </Row>

            {/* Gender */}
            <Row>
              <Col md={6}>Gender</Col>
              <Col md={6}>
                <label>
                  <Field type="radio" name="productGender" value="Male" />
                  Male
                </label>
                <label style={{ marginLeft: "10px" }}>
                  <Field type="radio" name="productGender" value="Female" />
                  Female
                </label>
              </Col>
            </Row>

            {/* Images */}
            <Row>
              <Col md={6}>Images</Col>
              <Col md={6}>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {selectedImages.length > 0 && (
                  <p>{selectedImages.length} image(s) selected</p>
                )}
              </Col>
            </Row>

            {/* Submit */}
            <Row>
              <Col>
                <button type="submit" className="addbtn">
                  Add Product
                </button>
              </Col>
            </Row>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Addproduct;
