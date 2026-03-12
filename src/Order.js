import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap'

const Order = () => {
  const [order, setOrder] = useState({});

  useEffect(() => {
    axios.get(``)
      .then((response) => {
        setOrder(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>
              <h2>Order Details</h2>

              <p>Payment Status: {order.paymentStatus}</p>
              <p>Order Status: {order.orderStatus}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Order
