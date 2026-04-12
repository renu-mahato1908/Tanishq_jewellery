import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Breadcrumb, ListGroup } from 'react-bootstrap';
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
      <section>
        <Container>
          <Row>
            <Col className='heading'>
              <h1>Add product</h1>
            </Col>
          </Row>
        </Container>
      </section>



      <section>
        <Container>
          <Row>
            <Col>

              <Breadcrumb>
                <Breadcrumb.Item href="Dashboard">Dashboard</Breadcrumb.Item>

                <Breadcrumb.Item href="Addproduct"> Add Products</Breadcrumb.Item>


              </Breadcrumb>

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
                      <section>
                        <Container>

                          <Row className="canvas2">
                            <Col md={2} >
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

                            <Col md={9} className='addproductform'>

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
                                  <button type="submit"
                                    className='addbtn'>Add Product</button>

                                </Col>


                              </Row>

                            </Col>


                          </Row>
                        </Container>
                      </section>




                    </div>



                  </Form>








                )}

              </Formik>

            </Col>
          </Row>
        </Container>
      </section>


    </div >
  )
}

export default Addproduct;


