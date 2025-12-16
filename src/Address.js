import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Address.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    addressLine1: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    addressLine2: Yup.string()
        .min(2, 'Too Short!')
        .max(10, 'Too Long!')
        .required('Required'),

    post: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    state: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    city: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    pin: Yup.number()
        .min(2, 'Too Short!')
        // .max(8, 'must be 8 digit')
        .required('Required'),
});
const Address = () => {
    return (
        <div className='text-center'>
            <Formik
                initialValues={{
                    name: '',
                    addressLine1: '',
                    addressLine2: '',
                    post:'',
                    state: '',
                    city: '',
                    pin: ''
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div className='address'>
                            <h2>Address</h2>

                            <Row>
                                <Col>
                                    <label>Name:</label>
                                </Col>

                                <Col>
                                    <Field name="name" />
                                    {errors.name && touched.name ? (
                                        <div>{errors.name}</div>
                                    ) : null}
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <label>Address Line1:</label>
                                </Col>

                                <Col>
                                    <Field name="addressLine1" />
                                    {errors.addressLine1 && touched.addressLine1 ? (
                                        <div>{errors.addressLine1}</div>
                                    ) : null}
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <label>Address Line2:</label>
                                </Col>

                                <Col>
                                    <Field name="addressLine2" />
                                    {errors.addressLine2 && touched.addressLine2 ? (
                                        <div>{errors.addressLine2}</div>
                                    ) : null}
                                </Col>
                            </Row>

                                    <Row>
                                <Col>
                                    <label>Post:</label>
                                </Col>

                                <Col>
                                    <Field name="post" />
                                    {errors.post && touched.post ? (
                                        <div>{errors.post}</div>
                                    ) : null}
                                </Col>
                            </Row>


                            <Row>
                                <Col>
                                    <label>State:</label>
                                </Col>

                                <Col>
                                    <Field name="state" />
                                    {errors.state && touched.state ? (
                                        <div>{errors.state}</div>
                                    ) : null}
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <label>City:</label>
                                </Col>

                                <Col>
                                    <Field name="city" />
                                    {errors.city && touched.city ? (
                                        <div>{errors.city}</div>
                                    ) : null}
                                </Col>
                            </Row>


                            <Row>
                                <Col>
                                    <label>Pin:</label>
                                </Col>

                                <Col>
                                    <Field name="pin" />
                                    {errors.pin && touched.pin ? (
                                        <div>{errors.pin}</div>
                                    ) : null}
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <button type="submit">Submit</button>
                                </Col>
                            </Row>
                        </div>


                    </Form>
                )}
            </Formik>
        </div>


    )
}

export default Address