


import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import { useNavigate } from "react-router-dom";
import { FaCheckSquare } from "react-icons/fa";
// import { FaGift } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";


const Order = () => {

  const [show, setShow] = useState(true);
  const navigate = useNavigate();

  const [orders, setOrders] = useState([]);

  useEffect(() => {

    axios.get("http://localhost:8090/api/ssorders")
      .then((response) => {
        console.log("API Response:", response.data);
        setOrders(response.data);
      })


  }, []);




  return (
    <section style={{ marginTop: "40px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>

            <Card className="text-center p-4 shadow">

              {/* <h2 style={{ color: "green" }}> Order Placed Successfully</h2> */}
              <h2 style={{ color: " green" }}>
                <FaCheckSquare size={40} color="#58D68E" /> Order Placed Successfully
              </h2>



              <p>Your order has been confirmed.</p>



              <Button
                variant="primary"
                onClick={() => navigate("/Home")}
              >
                Continue Shopping
              </Button>

            </Card>

            {/* Toast Message */}
            <Toast
              show={show}
              onClose={() => setShow(false)}
              delay={3000}
              autohide
              style={{
                position: "fixed",
                top: "100px",
                right: "160px"
              }}
            >
              <Toast.Header>
                <strong className="me-auto">Order</strong>
              </Toast.Header>
              <Toast.Body>


                {<p style={{ color: "green" }}>Orders placed successfully</p>}
                
                <div>
                  <GiPartyPopper size={40} color="orange" />
                  <GiPartyPopper size={40} color="red" />
                  <GiPartyPopper size={40} color="purple" />
                  <GiPartyPopper size={40} color="green" />
                </div>
              </Toast.Body>
            </Toast>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Order;
