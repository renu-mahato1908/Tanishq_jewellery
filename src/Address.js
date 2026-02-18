import axios from 'axios';
import { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './Address.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";




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
        .max(50, 'Too Long!')
        .required('Required'),

    city: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    district: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    state: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

    pin: Yup.number()
        .min(2, 'Too Short!')
        // .max(8, 'must be 8 digit')
        .required('Required'),
    mobile: Yup.number()
        .min(10, '10 num must be required'),
    email: Yup.string()
        .email("Invalid email")
        .required("Required"),

    addressType: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),

});

const AddressSchema = Yup.object().shape({
    addressId: Yup.string()
        .required("Required"),
})


const Address = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    const [addresses, setAddresses] = useState([])
    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
        }
        // if (currentUser && currentUser.roles[0] === "ROLE_ADMIN") {
        //     console.log(currentUser.roles[0]);

        //     navigate("/Home");
        // }
    }, []);

    const handleSubmit = () => {
        console.log("Submit button clicked")
        alert("submit button clicked");
    }

    const handleAddress = () => {
        console.log("Submit button clicked")
        alert("submit button clicked");
        axios.post("http://localhost:8090/api/addresses").then((response) => {
            console.log(response.data)
        })
    }


    useEffect(() => {
        axios.get(`http://localhost:8090/api/addresses/user/${currentUser.id}`).then((response) => {
            console.log(response.data);
            setAddresses(response.data);


        });





    }, []);






    return (
        <div className='text-center'>
            <h2>Address</h2>

            <Formik
                initialValues={{
                    name: '',
                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    district: '',
                    state: '',
                    pin: '',
                    mobile: '',
                    email: '',
                    addressType: '',
                }}

                validationSchema={SignupSchema}

                onSubmit={values => {
                    values.userId = currentUser.id;
                    // same shape as initial values
                    console.log(values);
                }}
            >

                {({ errors, touched }) => (
                    <Form>
                        <div className='addressform'>

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
                                    <label>District:</label>
                                </Col>

                                <Col>
                                    <Field name="district" />
                                    {errors.district && touched.district ? (
                                        <div>{errors.district}</div>
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
                                    <label>Mobile:</label>
                                </Col>

                                <Col>
                                    <Field name="mobile" />
                                    {errors.mobile && touched.mobile ? (
                                        <div>{errors.mobile}</div>
                                    ) : null}
                                </Col>
                            </Row>


                            <Row>
                                <Col>
                                    <label>Email:</label>
                                </Col>

                                <Col>
                                    <Field name="email" />
                                    {errors.email && touched.email ? (
                                        <div>{errors.email}</div>
                                    ) : null}
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <label>Addess type:</label>
                                </Col>

                                <Col md={6}>
                                    <label>
                                        <Field type="radio" name="addressType" value="Home" />
                                        Home
                                    </label>
                                    <label>
                                        <Field type="radio" name="addressType" value="Office" />
                                        Office
                                    </label>
                                </Col>


                            </Row>

                            <Row >
                                <Col>
                                    <button type="submit" className='address-btn' onClick={() => handleSubmit()}>Submit</button>
                                </Col>
                            </Row>
                        </div>


                    </Form>
                )}
            </Formik>

            <section>
                <Container>
                    <Row>
                        <Col>
                            <Formik
                                validationSchema={AddressSchema}
                                onSubmit={handleAddress}
                                // onSubmit={handleDelete}
                                initialValues={{
                                    addressId: '',

                                }}
                            >
                                {({ handleSubmit, handleChange, values, touched, errors }) => (
                                    <div className='category'>


                                        <Form>
                                            <Row>

                                                <Col>
                                                    <label>Choose Address</label>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    {/* <Field name="addressId" /> */}
                                                    {
                                                        addresses ?
                                                            addresses.map((address, index) => {
                                                                return (
                                                                    <div>
                                                                        <Row>
                                                                            <Col className='add_Id' >
                                                                                <label>
                                                                                    <Field type="radio" name="addressId" value={address.id} />
                                                                                    {address.addressLine1},
                                                                                    {/* {address.addressLine1}, */}
                                                                                </label>


                                                                            </Col>

                                                                            <Row>
                                                                                <Col >
                                                                                    <label>
                                                                                        <Field type="radio" name="addressId" value={address.id} />
                                                                                        {address.addressLine2},

                                                                                    </label>
                                                                                </Col>
                                                                            </Row>


                                                                        </Row>
                                                                    </div>



                                                                )
                                                            }) : "no address available"
                                                    }
                                                    {errors.addressId && touched.addressId ? (
                                                        <div>{errors.addressId}</div>
                                                    ) : null}
                                                </Col>
                                            </Row>



                                            <button type="submit" className=' cate-btn'>Order</button>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>


    )
}

export default Address