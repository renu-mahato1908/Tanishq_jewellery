import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import './add_product.css';

const SignupSchema = Yup.object().shape({
  Product_name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  Product_price: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  Product_category: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  Gender: Yup.number()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),

  Product_desc: Yup.string()
    .min(40, 'Too Short!')
    .max(80, 'Too Long!')
    .required('Required'),



});

const Add_products = () => {
  return (
    <div className='text-center'>
      <h3>Add product</h3>
      <Formik
        initialValues={{
          Product_name: '',
          Product_price: '',
          Product_category: '',
          Product_desc: '',
          Gender: '',

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
              <h1>Add Product</h1>

              <Row>
                <Col>
                  <label>Product Name:</label>

                </Col>
                <Col>
                  <Field name="Product_name" />

                  {errors.Product_name && touched.Product_name ? (
                    <div>{errors.Product_name}</div>
                  ) : null}
                </Col>

              </Row>

              <Row>
                <Col>
                  <label>Product price:</label>

                </Col>
                <Col>
                  <Field name="Product_price" />
                  {errors.Product_price && touched.Product_price ? (
                    <div>{errors.Product_price}</div>
                  ) : null}
                </Col>

              </Row>


              <Row>
                <Col>
                  <label>Product category:</label>

                </Col>
                <Col>
                  
                  <Field as="select" name="city">
                    <option value=""> ----Select category----- </option>
                    <option value="Gold">Gold</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Wedding">Wedding</option>
                  </Field>
                </Col>

              </Row>


              <Row>
                <Col>
                  <label>Product Description:</label>

                </Col>
                <Col>
                  <Field name="Product_desc" />
                  {errors.Product_desc && touched.Product_desc ? (
                    <div>{errors.Product_desc}</div>
                  ) : null}
                </Col>

              </Row>

              <Row>
                <Col>
                  <label>Gender:</label>
                </Col>

                <Col>
                  <label>
                    <Field type="radio" name="picked" value="Male" />
                    Male
                  </label>
                  <label>
                    <Field type="radio" name="picked" value="Female" />
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
    </div>
  )
}

export default Add_products