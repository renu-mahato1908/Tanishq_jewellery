import axios from 'axios';
import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Breadcrumb } from 'react-bootstrap';
import './Addtocategory.css';
import { data } from 'react-router';
import Table from 'react-bootstrap/Table';
import * as formik from 'formik';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';







const Addtocategory = () => {

  const { Formik } = formik;

  const schema = yup.object().shape({
    name: yup.string().required(),

  });

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8090/api/cats").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });

  }, []);

  const handleSubmit=(formData)=>{
    // console.log("Testing");
    console.log(formData);
    axios.post("http://localhost:8090/api/cats",formData)
    console.log("successfully category added");
    window.location.reload();
  }

  return (
    <div>

      <Container>
        <Row className='cat'>
          <Col>
            <h2>Category</h2>
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
                  <th><img src='https://cdn-icons-png.flaticon.com/128/1159/1159633.png' alt=''></img></th>
                </tr>
              </thead>
              <tbody>
                {
                  categories.map((category, index) => {
                    return (
                      // <p>{category.name}</p>


                      <tr>
                        <td>#</td>
                        <td>{category.name}</td>
                      </tr>
                    )
                  })


                }
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            
            <div className='text-center'>
              <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={{
                  name: '',
                  
                }}
              >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                 <div className='abc'>
                   <Form noValidate onSubmit={handleSubmit}>
                    <Row className="mb-3">
                      <Form.Group as={Col} md="12" controlId="validationFormik01">
                        <Form.Label>Add category</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          isValid={touched.name && !errors.name}
                        />
                      </Form.Group>
                      </Row>
                    <Button type="submit">Add</Button>
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