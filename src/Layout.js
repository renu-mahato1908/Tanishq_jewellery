import { Container, Row, Col } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Container fluid>
            <Row>

                {/* Sidebar (Static) */}
                <Col md={3}>
                    <ListGroup.Item>
                        <Link to="/admin/dashboard">Dashboard</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Link to="/admin/account">Account</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Link to="/admin/addproduct">Add Product</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Link to="/admin/products">Products</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Link to="/admin/addcategory">Add Category</Link>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Link to="/admin/orders">Orders</Link>
                    </ListGroup.Item>


                </Col>

                {/* Dynamic Content */}
                <Col md={9}>
                    <Outlet />   {/* Yaha page change hoga */}
                </Col>

            </Row>
        </Container>
    );
};

export default Layout;