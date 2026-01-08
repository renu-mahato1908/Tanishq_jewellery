import axios from 'axios';
import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import './Addtocategory.css';
import { data } from 'react-router';
import Table from 'react-bootstrap/Table';
import * as formik from 'formik';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import Button from 'react-bootstrap/Button';
import { RiDeleteBinLine } from "react-icons/ri";



const Addtocategory = () => {

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

      <Container>
        <Row className='cat'>
          <Col>
            
            <Breadcrumb>
              <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
              <Breadcrumb.Item active>Category</Breadcrumb.Item>
            </Breadcrumb>
          </Col>
        </Row>
        <Row>
          <Col md={6} className='icon' >
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
          <Col md={6}>

            <div className='text-center'>
              <h2>Category</h2>
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

                        <Col>
                          <label>Add category</label>
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
            </div>

          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Addtocategory