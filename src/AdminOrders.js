import React from 'react'
import { Container, Col, Row, Table } from 'react-bootstrap'
import { RiDeleteBinLine } from "react-icons/ri";


const AdminOrders = () => {
    const orders = [
        {
            id: "1",
            product_name: "Abstract Embrance Diamond Ring",
            product_category: "diamond",
            product_image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw48540a55/images/hi-res/55D5PBFVFAA02_2.jpg?sw=480&sh=480",
            product_price: "20k"
        },
        {
            id: "2",
            product_name: "Leaf Motif Gold Drop Earrings",
            product_category: "gold",
            product_image: "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dw2b44b79c/images/hi-res/515090DBQAGA00_2.jpg?sw=480&sh=480",
            product_price: "30k"
        }
    ]

    

    return (
        <section>
            <Container>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Sl no</th>
                                    <th>Product name</th>
                                    <th>Product category</th>
                                    <th>Product Image</th>
                                    <th>Product price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {orders && orders.length > 0 ? (
                                    orders.map((order, index) => (
                                        <tr key={order.id}>
                                            <td>{index + 1}</td>
                                            <td>{order.product_name}</td>
                                            <td>{order.product_category}</td>
                                            <td>
                                                <img
                                                    src={order.product_image}
                                                    alt={order.product_name}
                                                    width="80"
                                                />
                                            </td>
                                            <td>{order.product_price}</td>
                                        </tr>
                                    ))
                                ) : "please wait"
                                   
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default AdminOrders
