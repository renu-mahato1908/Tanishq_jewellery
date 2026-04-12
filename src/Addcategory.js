import axios from 'axios';
import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Breadcrumb, ListGroup } from 'react-bootstrap';
import './Addtocategory.css';
import Table from 'react-bootstrap/Table';
import * as formik from 'formik';
import * as Yup from 'yup';
import { Form, Field } from 'formik';
import { RiDeleteBinLine } from "react-icons/ri";
import { Link } from 'react-router';


const AddCategory = () => {

  const { Formik } = formik;

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/api/cats").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });

  }, []);

  const schema = Yup.object().shape({
    name: Yup.string()
      .required("Category name is required")
      .test(
        "checkDuplicateCategory",
        "Category Name already exists",
        async function (value) {
          if (!value) return false;
          const exists = await checkNameExists(value);
          return !exists;
        }
      ),


  });



  const checkNameExists = async (name) => {
    // API call
    const response = await fetch(`http://localhost:8090/api/cats/check?name=${name} `);
    const data = await response.json();
    return data.exists; // Should return true if name exists
  };

  const handleSubmit = (formData) => {
    // console.log("Testing");
    console.log(formData);
    axios.post("http://localhost:8090/api/cats", formData)
    console.log("successfully category added");
    window.location.reload();
  }

  const handleDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:8090/api/cats/${id}`).then((response) => {
      console.log(response.data);
      console.log("successfully category delete");
      window.location.reload();



    });

  }

  return (
    <div>
      <section>
        <Container>
          <Row className='cat'>
            <Col>

              <Breadcrumb>
                <Breadcrumb.Item href="Dashboard">Dashboard</Breadcrumb.Item>
                <Breadcrumb.Item href='AddCategory'>Category</Breadcrumb.Item>
              </Breadcrumb>
            </Col>
          </Row>
          <Row className='canvas2'>
            <Col md={4}>
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
            <Col md={8} className='heading' >
              <Row>

                
                  <h1>Category</h1>
                  <Formik
                    validationSchema={schema}
                    onSubmit={handleSubmit}
                    // onSubmit={handleDelete}
                    initialValues={{
                      name: '',

                    }}
                  >
                    {({ handleSubmit, handleChange, values, touched, errors }) => (
                      <div className='category'>


                        <Form>
                          <Row>

                            <Col className='heading'>
                              <label>Add category</label>
                              {/* <h1>Category</h1> */}
                            </Col>
                          </Row>
                          <Row>
                            <Col>
                              <Field name="name" />
                              {errors.name && touched.name ? (
                                <div>{errors.name}</div>
                              ) : null}
                            </Col>
                          </Row>



                          <button type="submit" className=' cate-btn'>Submit</button>
                        </Form>
                      </div>
                    )}
                  </Formik>

              

                

              </Row>

            </Col>

          </Row>
        </Container>
      </section>



      <section>
        <Container>
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Sl</th>
                    <th> Name</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    categories.map((category, index) => {
                      return (
                        // <p>{category.name}</p>


                        <tr>
                          <td>{index + 1}</td>
                          <td>{category.name}</td>
                          <td><button onClick={() => handleDelete(category.id)}>
                            {<RiDeleteBinLine />
                            }

                          </button></td>
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

    </div>

  )
}

export default AddCategory;