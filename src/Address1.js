import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './Address.css';
const Address1 = () => {
    const { Formik } = formik;

    const schema = yup.object().shape({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        addressLine1: yup.string().required(),
        addressLine2: yup.string().required(),

        city: yup.string().required(),
        district: yup.string().required(),
        state: yup.string().required(),
        pin: yup.number().required(),
        mobileno: yup.number().required(),
        terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
    });
    return (
        <div className='text-center'>
            <h3>Address</h3>

            <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    firstName: '',
                    lastName: '',

                    addressLine1: '',
                    addressLine2: '',
                    city: '',
                    district: '',
                    state: '',
                    pin: '',
                    mobileno: '',

                    terms: false,
                }}
            >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <div className='address'>
                        <Form noValidate onSubmit={handleSubmit}>
                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationFormik01">
                                    <Col>
                                        <Form.Label>First name</Form.Label>

                                    </Col>
                                    <Col>
                                        <Form.Control
                                            type="text"
                                            name="firstName"
                                            placeholder='first name'
                                            value={values.firstName}
                                            onChange={handleChange}
                                            isValid={!!errors.firstName}
                                        />
                                    </Col>
                                    <Form.Control.Feedback type="invalid">
                                        {errors.firstName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik02">
                                    <Form.Label>Last name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="lastName"
                                        placeholder='last name'
                                        value={values.lastName}
                                        onChange={handleChange}
                                        isValid={!!errors.lastName}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.lastName}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>


                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationFormik03">
                                    <Form.Label>AddressLine 1</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="AddressLine1"
                                        name="addressLine1"
                                        value={values.addressLine1}
                                        onChange={handleChange}
                                        isInvalid={!!errors.addressLine1}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {!!errors.addressLine1}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationFormik03">
                                    <Form.Label>AddressLine 2</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="AddressLine2"
                                        name="addressLine2"
                                        value={values.addressLine2}
                                        onChange={handleChange}
                                        isInvalid={!!errors.addressLine2}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.addressLine2}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationFormik03">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="City"
                                        name="city"
                                        value={values.city}
                                        onChange={handleChange}
                                        isInvalid={!!errors.city}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.city}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row className="mb-3">
                                <Form.Group as={Col} md="12" controlId="validationFormik03">
                                    <Form.Label>District</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="District"
                                        name="district"
                                        value={values.district}
                                        onChange={handleChange}
                                        isInvalid={!!errors.district}
                                    />

                                    <Form.Control.Feedback type="invalid">
                                        {errors.district}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>
                            <Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik04">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="State"
                                        name="state"
                                        value={values.state}
                                        onChange={handleChange}
                                        isInvalid={!!errors.state}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.state}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik04">
                                    <Form.Label>Pin</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="pin"
                                        name="pin"
                                        value={values.pin}
                                        onChange={handleChange}
                                        isInvalid={!!errors.pin}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.pin}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group as={Col} md="12" controlId="validationFormik04">
                                    <Form.Label>Mobile no</Form.Label>
                                    <Form.Control
                                        type="mobileno"
                                        placeholder="Mobile no"
                                        name="mobileno"
                                        value={values.mobileno}
                                        onChange={handleChange}
                                        isInvalid={!!errors.mobileno}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.mobileno}
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Row>

                            <Row>
                                <Form.Group className="mb-4">
                                    <Form.Check
                                        required
                                        name="terms"
                                        label="Agree to terms and conditions"
                                        onChange={handleChange}
                                        isInvalid={!!errors.terms}
                                        feedback={errors.terms}
                                        feedbackType="invalid"
                                        id="validationFormik0"
                                    />
                                </Form.Group>
                            </Row>
                            <Row>
                                <Col md={10}>
                                    <Button type="submit">Submit form</Button>

                                </Col>
                            </Row>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>

    )
}

export default Address1