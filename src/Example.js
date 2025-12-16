import React, { useState, useEffect } from 'react'

import Alert from 'react-bootstrap/Alert';
import { IoLogInOutline } from "react-icons/io5";

import { FiLogIn } from "react-icons/fi";
import { Container, Row, Col, Button } from 'react-bootstrap'

const Example = () => {

 

  let islogin = true;


  

  const [status, setStatus] = useState(true);
  const [btnName, setbtnName] = useState("logout");
  const changeStatus = () => {
    
    setStatus(!status);
    status?setbtnName("logout"):setbtnName("login")

  }
  useEffect(() => {



  }, [islogin]);

  return (
    <div>
      <section>
        <Container>
          <Row>
            <Col>

              {islogin ? "successfully login" : "successfully logout"}

              {islogin ? <IoLogInOutline /> : <FiLogIn />}

              {status ? <Alert variant='success'>
                successfully login
              </Alert> :
                <Alert variant='danger'>
                  successfully logout
                </Alert>
              }

              <Button onClick={changeStatus}>{btnName}</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Example
