import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import './Addproduct.css';







const Addproduct = () => {

  const SignupSchema = Yup.object().shape({


    productName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    productPrice: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),

    productCategory: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),



    productDescription: Yup.string()
      .min(10, 'Too Short!')
      .max(80, 'Too Long!')
      .required('Required'),

    productGender: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),





  });
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    if (currentUser && currentUser.roles[0] == "ROLE_ADMIN") {
      console.log(currentUser.roles[0]);

      navigate("/Addproduct");
    }
  }, [currentUser]);

  const handleFileChange = (e) => {
    setSelectedImages(e.target.files);
  };



  const [categories, setCategories] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8090/api/cats").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });

  }, []);

 
  return (
    <div className='text-center'>
      <h2>Add product</h2>
      <Formik
        initialValues={{
          productName: '',
          productPrice: '',
          productCategory: '',
          productDescription: '',
          productGender: '',
          // file: null,


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
            const res = await axios.post(
              "http://localhost:8090/api/ssproducts",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log("Upload success:", res.data);
            alert("Product added successfully!");
            resetForm();
            setSelectedImages([]);
          } catch (err) {
            console.error("Upload failed:", err);
            alert("Failed to add product");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className='addproduct'>


              <Row>

                <Col md={6}>
                  <label>Product Name:</label>

                </Col>
                <Col md={6}>
                  <Field name="productName" />

                  {errors.productName && touched.productName ? (
                    <div>{errors.productName}</div>
                  ) : null}
                </Col>

              </Row>

              <Row>
                <Col md={6}>
                  <label>Product price:</label>

                </Col>
                <Col md={6}>
                  <Field name="productPrice" />
                  {errors.productPrice && touched.productPrice ? (
                    <div>{errors.productPrice}</div>
                  ) : null}
                </Col>

              </Row>



              <Row>
                <Col md={6}>
                  <label>Product category:</label>

                </Col>
                <Col md={6}>

                  <Field as="select" name="productCategory">
                    <option value=""> ----Select category----- </option>
                    {
                      categories ?
                        categories.map((category, index) => {
                          return (
                            <option value={category.name} key={index}>{category.name}</option>




                          )
                        })
                        :

                        "Loading ..."
                    }


                  </Field>
                </Col>




              </Row>


              <Row>
                <Col md={6}>
                  <label>Product Description:</label>

                </Col>
                <Col md={6}>
                  <Field name="productDescription" />
                  {errors.productDescription && touched.productDescription ? (
                    <div>{errors.productDescription}</div>
                  ) : null}
                </Col>

              </Row>

              <Row>
                <Col md={6}>
                  <label>Gender:</label>
                </Col>

                <Col md={6}>
                  <label>
                    <Field type="radio" name="productGender" value="Male" />
                    Male
                  </label>
                  <label>
                    <Field type="radio" name="productGender" value="Female" />
                    Female
                  </label>
                </Col>
              </Row>
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
                    <div>{selectedImages.length} image(s) selected</div>
                  )}
                </Col>
              </Row>

             



              <Row>
                <Col>
                  <button  type="submit"
                  className='addbtn'>Add Product</button>

                 </Col>
               

              </Row>
            </div>


          </Form>
        )}
      </Formik>


    </div>
  )
}

export default Addproduct


