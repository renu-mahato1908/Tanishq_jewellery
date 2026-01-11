import React from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'


const Wishlist = () => {

    const handleWishlist = (product) => {
        console.log(product);

        const data = {
            user: currentUser.id,
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
            alert("Product added to wishlist!");
        });


    }
    return (
        <div>
            <section>
                <Container>
                    <Row>
                        <h4>Products</h4>
                        {
                            products.map((product, index) => {
                                return (
                                    <Col className='cart'>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" />
                                            <Card.Body>

                                                <Card.Text>

                                                    <p><img src={`http://localhost:8090/upload/${product.images[0]}`} /></p>
                                                    <p>{product.productName}</p>
                                                    <p>{product.productId}</p>
                                                    <p> {product.productPrice}</p>
                                                    <button className='card-wishlist-btn'><FiHeart className="wishlist-icon" /></button>

                                                </Card.Text>
                                                {/* <Button variant="primary" onClick={() => handleCart(product)}>Add to cart</Button> */}
                                                <Col>
                                                    <Button type='submit' onClick={() => handleCart()}>Add to cart</Button>

                                                </Col>
                                            </Card.Body>
                                        </Card>

                                    </Col>




                                )
                            })


                        }
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default Wishlist