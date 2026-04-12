
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router'
import { FiHeart } from "react-icons/fi";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from "react-redux";

import { useNavigate } from "react-router";
import { Link } from 'react-router';


const Category = () => {
    const [products, setProducts] = useState([]);

    // let navigate = useNavigate();
    // const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    useEffect(() => {
        if (currentUser) {
            console.log(currentUser);
        }

    }, [currentUser]);

    const { categoryName } = useParams();
    useEffect(() => {
        axios.get(`http://localhost:8090/api/ssproducts/category/${categoryName}`).then((response) => {
            console.log(response.data);
            setProducts(response.data);
            console.log("category name", categoryName);
        });

    }, [categoryName]);



    // ////


    const handleCart = (product) => {
        console.log(product);

        const data = {
            userId: currentUser.id,
            items: [{
                productId: product.id,
                quantity: 1,
                price: product.productPrice
            }]
        }

        axios.post(`http://localhost:8090/api/carts`, data).then((response) => {
            console.log(response.data);

            window.location.reload();
            console.log("Upload success:", response.data);
            alert("Product add to cart successfully!");
        });


    }




    const handleWishlist = (product) => {
        console.log(product);
        const data = {
            userId: currentUser.id,
            productId: product.id,
        }
        // try{
        console.log(data)
        axios.post(`http://localhost:8090/api/wishlist`, data).then((response) => {
            console.log(response.data);
            console.log("successfully Added to wishlist");
            window.location.reload();


        })
            .catch((error) => {
                console.log(error.response)
                if (error.response?.status === 409) {
                    alert("product already in wishlist")
                }
                else {
                    alert("Something wrong")
                }
            })

    }

    const [category, setCategory] = useState("All");

    const uniqueCategory = [...new Set(products.map(product => product.productCategory))]

    console.log(uniqueCategory)













    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <Col>
                            <h1>{categoryName}</h1>
                            <div>


                                <h4>Choose category</h4>

                                <select onChange={(e) => setCategory(e.target.value)}>
                                    <option value="All"> All </option>

                                    {
                                        uniqueCategory.map((category, index) => {
                                            return (
                                                <option key={index} value={category}>
                                                    {category}


                                                </option>
                                            )

                                        })
                                    }
                                </select>

                            </div>
                        </Col>
                    </Row>



                    <Row className='mapingimage'>


                        {/* <h4>Products</h4> */}





                        {
                            products.filter(product => product.productCategory === category || category === "All").map((product, index) => {
                                return (
                                    <Col className='cart'>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" />
                                            <Card.Body>
                                                {/* <Card.Title>{product.Category}</Card.Title> */}
                                                {/* <Card.Title>{product.productCategory}</Card.Title> */}


                                                <Card.Text>
                                                    <Card.Img
                                                        variant="top"
                                                        src={`http://localhost:8090/upload/${product.images[0]}`}
                                                    />

                                                    <p>{product.productName}</p>
                                                    <p>{product.productId}</p>
                                                    <p> ₹&nbsp;{product.productPrice}</p>
                                                    <button className='card-wishlist-btn' onClick={() => handleWishlist(product)} ><FiHeart className="wishlist-icon" /></button>

                                                </Card.Text>
                                                <Col>
                                                    <Button type='submit' onClick={() => handleCart(product)}>Add to cart</Button>
                                                    <Link to={`/ViewProduct/${product.id}`}><p>view</p>
                                                    </Link>

                                                </Col>


                                            </Card.Body>
                                        </Card>

                                    </Col>




                                )
                            })


                        }


                    </Row>

                </Container >
            </section>
        </div>
    )
}

export default Category










