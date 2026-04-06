








import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const OrdersDetail = () => {

  const [orders, setOrders] = useState([]);
  const [activeOrderId, setActiveOrderId] = useState(null);
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  // Fetch orders
  useEffect(() => {
    axios.get("http://localhost:8090/api/ssorders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  //Modal control
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setActiveOrderId(null)
   
    setOrderId("")
  };
  const handleShow = (id) => {
    setShow(true)
    setOrderId(id)
    console.log(id)
    setActiveOrderId(id)
  };




  const updateStatus = () => {
    axios.put(
      `http://localhost:8090/api/ssorders/${orderId}/status`,
      { status: status }   
    )
      .then(res => {
        console.log(res.data);

        
        setOrders(prev =>
          prev.map(order =>
            order.id === orderId ? { ...order, status: status } : order
          )
        );

        setActiveOrderId(null);
        setStatus("");
      })
      .catch(err => console.log(err));
  };

  return (
    <Container>
      <Row>
        <Col>
          <h3>Orders</h3>

          <Accordion defaultActiveKey="0">
            {orders.map((order, orderIndex) => (
              <Accordion.Item key={orderIndex} eventKey={orderIndex.toString()}>

                {/* HEADER */}
                <Accordion.Header>
                  <b>Order ID:</b> {order.id} &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                  <b>User: &nbsp;&nbsp;</b> {order.userId.email}
                </Accordion.Header>

                {/* BODY */}
                <Accordion.Body>

                  <Table bordered hover>
                    <thead>
                      <tr>
                        <th>Sl</th>
                        <th>Product Name</th>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>

                      </tr>
                    </thead>

                    <tbody>

                      {/* PRODUCTS */}
                      {order.products?.map((product, index) => (
                        <tr key={index}>
                          <td>{index + 1}</td>

                          <td>{product.productId?.productName}</td>

                          <td>
                            {product.productId?.images?.length > 0 && (
                              <img
                                src={`http://localhost:8090/upload/${product.productId.images[0]}`}
                                width="60"
                                alt="product"
                              />
                            )}
                          </td>

                          <td>₹{product.price}</td>
                          <td>{product.quantity}</td>
                          <td>₹{product.price * product.quantity}</td>

                          {/* EMPTY STATUS COLUMN */}
                          <td></td>
                        </tr>
                      ))}


                      <tr>


                        <td colSpan={6}>
                          <b>Status:</b> {order.status || "Pending"}
                          {/* </td> */}

                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


                          <Button
                            style={{ backgroundColor: "rgb(55, 6, 6)", borderColor: "rgb(55, 6, 6)", color: "#fff" }}
                            size="sm"
                            variant="warning"
                            onClick={() => handleShow(order.id)}
                          >
                            Update
                          </Button>
                        </td>
                      </tr>

                    </tbody>
                  </Table>


                  <Modal
                    show={activeOrderId === order.id}
                    onHide={handleClose}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title>Update Status</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                      <p><b>Order ID:</b> {order.id}</p>

                      {/* <select className="form-control">
                        <option>Ordered</option>
                        <option>Shipped</option>
                        <option>Out for Delivery</option>
                        <option>Delivered</option>
                      </select> */}

                      <select
                        className="form-control"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="">Select Status</option>
                        <option value="Ordered">Ordered</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Out for Delivery">Out for Delivery</option>
                        <option value="Delivered">Delivered</option>
                      </select>
                    </Modal.Body>

                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button variant="primary" onClick={updateStatus}>
                        Save Changes
                      </Button>
                    </Modal.Footer>
                  </Modal>

                </Accordion.Body>

              </Accordion.Item>
            ))}
          </Accordion>

        </Col>
      </Row>
    </Container>
  );
};

export default OrdersDetail;