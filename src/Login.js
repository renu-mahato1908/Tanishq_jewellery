import React, { useState, useEffect } from 'react'

import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import './Register.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import { login } from "./slices/auth";
import { clearMessage } from "./slices/message";



const SignupSchema = Yup.object().shape({
    Mobile: Yup.number()
        .min(10, 'must be 10 digit!')
        // .max(50, 'Too Long!')
        .required('Required'),
    Password: Yup.string()
        .min(2, 'Too Short!')
        .max(30, 'Too Long!')
        .required('Required'),
});
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const handleLogin = (formValue) => {
        const { username, password } = formValue;
        setLoading(true);

        dispatch(login({ username, password }))
            .unwrap()
            .then(() => {
                navigate("/home");
            })
            .catch(() => {
                setLoading(false);
            });
    };

    if (isLoggedIn) {
        return <Navigate to="/home" />;
    }
    return (
        <div className='text-center'>

            <Formik
                initialValues={{
                    Mobile: '',
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
                            <h1>Login</h1>

                            <Row>
                                <Col>
                                    <label>Mobile:</label>
                                </Col>

                                <Col>
                                    <Field name="Mobile" />
                                    {errors.Mobile && touched.Mobile ? (
                                        <div>{errors.Mobile}</div>
                                    ) : null}
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
                                    <button type="submit">Login</button>

                                </Col>
                            </Row>
                        </div>


                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Login