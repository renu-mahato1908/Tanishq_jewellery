import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';
import './add_product.css';

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
    </div>
  )
}

export default Add_products