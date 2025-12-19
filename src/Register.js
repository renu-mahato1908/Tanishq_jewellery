import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './register.css';
import { Container, Row, Col } from 'react-bootstrap';

const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastName: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),

    mobile_no: Yup.number()

        .min(10, 'Minimum value is 1')

        .required('Number is required'),

    Password: Yup.string()
        .min(2, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),


});

const Register = () => {
    return (
        <div className='text-center'>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    mobile_no: '',
                    Password: '',
                }}
                validationSchema={SignupSchema}
                onSubmit={values => {
                    // same shape as initial values
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (

                    <Form>

                        <div className='abc'>
                            <h2>Register</h2>
                            <Row>
                                <Col>
                                    <label>firstName</label>
                                </Col>


                                <Col >
                                    <Field name="firstName" />
                                    {errors.firstName && touched.firstName ? (
                                        <div>{errors.firstName}</div>
                                    ) : null}



                                </Col>
                            </Row>

                            <Row>
                                <Col  >
                                    <label>lastName</label>
                                </Col>

                                <Col>
                                    <Field name="lastName" />
                                    {errors.lastName && touched.lastName ? (
                                        <div>{errors.lastName}</div>
                                    ) : null}
                                </Col>
                            </Row>

                            <Row>
                                <Col >
                                    <label>Email</label>
                                </Col>

                                <Col>
                                    <Field name="email" type="email" />
                                    {errors.email && touched.email ?
                                        <div>{errors.email}</div> : null}


                                </Col>

                            </Row>


                            <Row>
                                <Col >
                                    <label>Mobile no</label>
                                </Col>

                                <Col>
                                    <Field name="mobile_no" type="mobile_no" />
                                    {errors.mobile_no && touched.mobile_no ?
                                        <div>{errors.mobile_no}</div> : null}


                                </Col>

                            </Row>

                            <Row>
                                <Col>
                                    <label>Password:</label>
                                </Col>

                                <Col>
                                    <Field name="Password" />
                                    {errors.Password && touched.Password ? (
                                        <div>{errors.Password}</div>
                                    ) : null}
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <button type="submit">Submit</button>

                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <p>if already registered? </p>
                                    <h6><a href='./Login'>login here</a></h6>


                                </Col>
                            </Row>
                        </div>



                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default Register