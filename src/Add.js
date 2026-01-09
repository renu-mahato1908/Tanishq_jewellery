import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Col, Row } from "react-bootstrap";
// import "./AddProduct.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Add = () => {
  const SignupSchema = Yup.object().shape({
    productName: Yup.string()
      .min(2, "Must be at least 2 characters!")
      .max(50, "Too Long!")
      .required("Required"),
    productDescription: Yup.string()
      .min(10, "Too Short!")
      .max(100, "Too Long!")
      .required("Required"),
    productCategory: Yup.string()
      .min(5, "Atleast 5 Character!")
      .max(50, "Too Long!")
      // .test(
      //   "checkDuplicateCategory",
      //   "Category Name already exists",
      //   async function (value) {
      //     if (!value) return false;
      //     const exists = await checkNameExists(value);
      //     return !exists;
      //   }
      // )
      .required("Required"),

    productPrice: Yup.number()
      .min(99, "Minimum value is 99")
      .max(10000, "Maximum value is 100000")
      .required("Required"),
  });
  const [categories, setCategories] = useState();
  const [selectedImages, setSelectedImages] = useState([]);

  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    if (currentUser && currentUser.roles[0] !== "ROLE_ADMIN") {
      console.log(currentUser.roles[0]);

      navigate("/Home");
    }
  }, []);
  useEffect(() => {
    axios.get("http://localhost:8090/api/cats").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  }, []);

  const handleFileChange = (e) => {
    setSelectedImages(e.target.files);
  };

  return (
    <div className="text-center">
      <h3>AddProduct</h3>
      <Formik
        initialValues={{
          productName: "",
          productDescription: "",
          productCategory: "",
          productPrice: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values, { resetForm }) => {
          const formData = new FormData();

          formData.append("userId", currentUser.id);

          Object.keys(values).forEach((key) => {
            formData.append(key, values[key]);
          });

          for (let i = 0; i < selectedImages.length; i++) {
            formData.append("images", selectedImages[i]);
          }

          try {
            const res = await axios.post(
              "http://localhost:8090/api/ssproducts",
              formData,
              {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            console.log("Upload success:", res.data);
            alert("Product added successfully!");
            resetForm();
            setSelectedImages([]);
          } catch (err) {
            console.error("Upload failed:", err);
            alert("Failed to add product");
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <div className="productform">
              <Row>
                <Col md={4}>
                  <label>Product Name : </label>
                </Col>
                <Col md={8}>
                  <Field name="productName" />
                  {errors.productName && touched.productName ? (
                    <div>{errors.productName}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <label>Product Description : </label>
                </Col>
                <Col md={8}>
                  <Field name="productDescription" />
                  {errors.productDescription && touched.productDescription ? (
                    <div>{errors.productDescription}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <label>Product Category : </label>
                </Col>
                <Col md={8}>
                  <Field
                    as="select"
                    name="productCategory"
                    id="productCategory"
                  >
                    <option value="">--- Select a Category ---</option>
                    {categories
                      ? categories.map((category, index) => {
                        return (
                          <option value={category.name} key={index}>
                            {category.name}
                          </option>
                        );
                      })
                      : "No Category Found"}
                  </Field>
                  <option></option>
                  {errors.productCategory && touched.productCategory ? (
                    <div>{errors.productCategory}</div>
                  ) : null}
                </Col>
              </Row>

              <Row>
                <Col md={4}>
                  <label>Product Price : </label>
                </Col>
                <Col md={8}>
                  <Field name="productPrice" />
                  {errors.productPrice && touched.productPrice ? (
                    <div>{errors.productPrice}</div>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col md={6}>Images :</Col>
                <Col md={6}>
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                  {selectedImages.length > 0 && (
                    <div>{selectedImages.length} image(s) selected</div>
                  )}
                </Col>
              </Row>
              <Row>
                <Col>
                  <button className="btn btn-product">Add</button>
                </Col>
              </Row>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Add;