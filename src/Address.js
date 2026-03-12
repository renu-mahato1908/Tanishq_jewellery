import axios from 'axios';
import { useState, useEffect } from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import './Address.css';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';





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
    const [products, setProducts] = useState({});


    const [cartItems, setCartItems] = useState();
    const [subTotal, setSubTotal] = useState(0);
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
        // alert("submit button clicked");
    }

    const handleAddress = (formData) => {
        formData.userId = currentUser.id;
        console.log(formData)

        // console.log("Submit button clicked")
        alert("submit button clicked");
        axios.post(`http://localhost:8090/api/addresses`, formData).then((response) => {
            console.log(response.data)
        })
        window.location.reload();

    }


    useEffect(() => {
        axios.get(`http://localhost:8090/api/addresses/user/${currentUser.id}`).then((response) => {
            console.log(response.data);
            setAddresses(response.data);


        });
    }, [currentUser]);


    useEffect(() => {
        axios.get(`http://localhost:8090/api/carts/user/${currentUser.id}`).then((response) => {
            console.log(response.data);
            setCartItems(response.data);
            const subTotal = response.data.items.reduce((total, product) => {
                return total + (product.quantity * product.productDetails.productPrice);
            }, 0);
            setSubTotal(subTotal)


        });

    }, [currentUser]);




    const handleAddress2 = (values) => {
        const products = cartItems.items.map((item) => ({
            productName: item.productDetails.productName,
            productId:item.productId,
            price: item.productDetails.productPrice,
            quantity: item.quantity
        }));

        const Data = {
            addressId: values.addressId,
            userId: currentUser.id,
            subtotal: subTotal,
            paymentStatus: "pending",
            orderStatus: "processing",
            productsDetails:products

        };




        // axios.post("http://localhost:8090/api/orders", Data)
        //     .then((response) => {
        //         console.log("Success:", response.data);
        //     })


        console.log("AddressId:", Data.addressId);
        console.log("SubTotal:", Data.subtotal);
        console.log("UserId:", Data.userId);
        console.log("paymentStatus:", "pending");
        console.log("orderStatus:", "processing");
        console.log("productDetails:",Data.productsDetails)
    };




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
                    addressType: ''
                }}

                validationSchema={SignupSchema}

                onSubmit={handleAddress}


            >

                {({ errors, touched }) => (
                    <Form>
                        <div className='addressform'>

                            <Row>
                                <Col md={4}>
                                    <label>Name:</label>
                                </Col>

                                <Col md={8}>
                                    <Field name="name" />
                                    <span className="error-text">
                                        {errors.name && touched.name ? (
                                            <div>{errors.name}</div>
                                        ) : null}
                                    </span>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={4}>
                                    <label>Address Line1:</label>
                                </Col>

                                <Col md={8}>
                                    <Field name="addressLine1" />
                                    <span className="error-text">
                                        {errors.addressLine1 && touched.addressLine1 ? (
                                            <div>{errors.addressLine1}</div>
                                        ) : null}
                                    </span>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={4}>
                                    <label>Address Line2:</label>
                                </Col>

                                <Col md={8}>
                                    <Field name="addressLine2" />
                                    <span className="error-text">
                                        {errors.addressLine2 && touched.addressLine2 ? (
                                            <div>{errors.addressLine2}</div>
                                        ) : null}
                                    </span>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={4}>
                                    <label>City:</label>
                                </Col>

                                <Col md={8}>
                                    <Field name="city" />
                                    <span className="error-text">
                                        {errors.city && touched.city ? (
                                            <div>{errors.city}</div>
                                        ) : null}
                                    </span>

                                </Col>
                            </Row>


                            <Row>
                                <Col md={4}>
                                    <label>District:</label>
                                </Col>

                                <Col md={8}>
                                    <Field name="district" />
                                    <span className="error-text">
                                        {errors.district && touched.district ? (
                                            <div>{errors.district}</div>
                                        ) : null}
                                    </span>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={4}>
                                    <label>State:</label>
                                </Col>

                                <Col md={8}>
                                    <Field name="state" />
                                    <span className="error-text">
                                        {errors.state && touched.state ? (
                                            <div>{errors.state}</div>
                                        ) : null}
                                    </span>

                                </Col>
                            </Row>


                            <Row>
                                <Col md={4}>
                                    <label>Pin:</label>
                                </Col>

                                <Col md={8}>
                                    <Field name="pin" />
                                    <span className="error-text">
                                        {errors.pin && touched.pin ? (
                                            <div>{errors.pin}</div>
                                        ) : null}
                                    </span>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={4}>
                                    <label>Mobile:</label>
                                </Col>

                                <Col md={8}>
                                    <Field name="mobile" />
                                    <span className="error-text">
                                        {errors.mobile && touched.mobile ? (
                                            <div>{errors.mobile}</div>
                                        ) : null}

                                    </span>

                                </Col>
                            </Row>


                            <Row>
                                <Col md={4}>
                                    <label>Email:</label>
                                </Col>

                                <Col md={8}>
                                    <Field name="email" />
                                    <span className="error-text">
                                        {errors.email && touched.email ? (
                                            <div>{errors.email}</div>
                                        ) : null}
                                    </span>

                                </Col>
                            </Row>

                            <Row>
                                <Col md={4}>
                                    <label>Addess type:</label>
                                </Col>

                                <Col md={8}>
                                    <label>
                                        <Field type="radio" name="addressType" value="Home" />
                                        Home
                                    </label>
                                    <label>
                                        <Field type="radio" name="addressType" value="Office" />
                                        Office
                                    </label>
                                    <span className="error-text">
                                        {errors.addressType && touched.addressType ? errors.addressType : ""}
                                    </span>
                                </Col>


                            </Row>



                            <Row className="mt-3">
                                {/* <Col md={2}></Col> */}

                                <Col md={12}>
                                    <button type="submit" className="address-btn">
                                        Submit
                                    </button>
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
                                onSubmit={handleAddress2}
                                // onSubmit={handleDelete}
                                initialValues={{
                                    addressId: ''

                                }}
                            >
                                {({ handleSubmit, handleChange, values, touched, errors }) => (
                                    <div className='addressform2'>


                                        <Form>
                                            <Row>

                                                <Col>
                                                    <label>Choose Address</label>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col>
                                                    {
                                                        addresses ?
                                                            addresses.map((address, index) => {
                                                                return (
                                                                    <div key={address.id}>
                                                                        <Row>


                                                                            <Col className="add_Id">
                                                                                <label className="d-flex align-items-center gap-2">

                                                                                    <Field type="radio" name="addressId" value={String(address.id)} />
                                                                                    <span className="error-text">
                                                                                        {errors.addressId && touched.addressId ? errors.addressId : ""}
                                                                                    </span>

                                                                                    <Badge bg="secondary">
                                                                                        {address.addressType}
                                                                                    </Badge>

                                                                                    <span>
                                                                                        {address.addressLine1}, {address.addressLine2}, {address.district},{address.pin}
                                                                                    </span>

                                                                                </label>
                                                                            </Col>



                                                                        </Row>
                                                                    </div>



                                                                )
                                                            }) : "no address available"
                                                    }
                                                    <span className='error-text'>
                                                        {errors.addressId && touched.addressId ? (
                                                            <div>{errors.addressId}</div>
                                                        ) : null}
                                                    </span>
                                                </Col>
                                            </Row>



                                            <button type="submit" className='cate-btn'
                                            >Order</button>
                                        </Form>




                                    </div>
                                )}
                            </Formik>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section>
                <Container>

                </Container>
            </section>
        </div>


    )
}

export default Address