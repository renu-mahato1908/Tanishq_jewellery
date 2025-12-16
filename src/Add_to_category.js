import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col } from 'react-bootstrap';



const SignupSchema = Yup.object().shape({
  productName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  productPrice: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const Add_to_category = () => {



  return (
    <div className='text-center'>
      <h2>Add to cart</h2>
      <Formik
        initialValues={{
          productName: '',
          productPrice: '',

        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div>
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
                <button type="submit">Submit</button>

              </Row>




            </div>
          </Form>
        )}
      </Formik>
    </div>

  )
}

export default Add_to_category