import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import './add_product.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { data } from 'react-router';

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



  productDesc: Yup.string()
    .min(10, 'Too Short!')
    .max(80, 'Too Long!')
    .required('Required'),

  gender: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),



});

const Add_products = () => {

  const [categories, setCategories] = useState();

  useEffect(() => {
    axios.get("http://localhost:8090/api/cats").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });

  }, []);

  // const categories = [
  //   {
  //     'id': 1,
  //     'category': 'gold',

  //   },
  //   {
  //     'id': 2,
  //     'category': 'diamond',

  //   },
  //   {
  //     'id': 3,
  //     'category': 'wedding'
  //   },
  //   {
  //     'id': 4,
  //     'category': 'rings'

  //   }
  // ]
  return (
    <div className='text-center'>
      <h3>Add product</h3>
      <Formik
        initialValues={{
          productName: '',
          productPrice: '',
          productCategory: '',
          productDesc: '',
          gender: '',

        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className=' addproduct'>


              <Row>
                <Col>
                  <label>Product Name:</label>

                </Col>
                <Col>
                  <Field name="productName" />

                  {errors.productName && touched.productName ? (
                    <div>{errors.productName}</div>
                  ) : null}
                </Col>

              </Row>

              <Row>
                <Col>
                  <label>Product price:</label>

                </Col>
                <Col>
                  <Field name="productPrice" />
                  {errors.productPrice && touched.productPrice ? (
                    <div>{errors.productPrice}</div>
                  ) : null}
                </Col>

              </Row>



              <Row>
                <Col>
                  <label>Product category:</label>

                </Col>
                <Col>

                  <Field as="select" name="productCategory">
                    <option value=""> ----Select category----- </option>
                    {
                      categories ?
                        categories.map((category, index) => {
                        return (
                          <option value={category.name}>{category.name}</option>




                        )
                      })
                      :

                      "Loading ..."
                    }


                  </Field>
                </Col>

              </Row>


              <Row>
                <Col>
                  <label>Product Description:</label>

                </Col>
                <Col>
                  <Field name="productDesc" />
                  {errors.productDesc && touched.productDesc ? (
                    <div>{errors.productDesc}</div>
                  ) : null}
                </Col>

              </Row>

              <Row>
                <Col>
                  <label>Gender:</label>
                </Col>

                <Col>
                  <label>
                    <Field type="radio" name="gender" value="Male" />
                    Male
                  </label>
                  <label>
                    <Field type="radio" name="gender" value="Female" />
                    Female
                  </label>
                </Col>
              </Row>



              <Row>
                <Col>
                  <button type="submit">Addproducts</button>

                </Col>
              </Row>
            </div>


          </Form>
        )}
      </Formik>

      <Container>
        <Row>
          <Col>
            


          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Add_products