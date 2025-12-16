import React, { useState ,useEffect} from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import { IoLogInOutline } from "react-icons/io5";

import { FiLogIn } from "react-icons/fi";




  // const products = [

  //   {
  //     "id": 1,
  //     "productName": "vivo15",
  //     "productPrice": 20000
  //   },
  //   {

  //     "id": 2,
  //     "productName": "oppo xyz",
  //     "productPrice": 30000

  //   },

  //   {

  //     "id": 3,
  //     "productName": "Realme 9i",
  //     "productPrice": 10000

  //   },
  //   {

  //     "id": 4,
  //     "productName": "Samsung Galaxy",
  //     "productPrice": 20000

  //   }

  // ];

  // const notices = [

  //   {
  //     "title": "5th Semester (2023-26) Class Routine",
  //     "notice": "notice_7133319503.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-10-04 01:55:35"
  //   },
  //   {
  //     "title": "3rd Semester (2024-27) Class Routine",
  //     "notice": "notice_1797529458.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-10-04 01:42:25"
  //   },
  //   {
  //     "title": "Commencement of Classes from 07/10/2025",
  //     "notice": "notice_994543675.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-10-04 01:27:37"
  //   },
  //   {
  //     "title": "Academic Calender for the students during Puja Vacation",
  //     "notice": "notice_1731795668.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-09-24 06:46:34"
  //   },
  //   {
  //     "title": "Orientation and Induction Program Notice for First Semester (2025-28) Students",
  //     "notice": "notice_2585471565.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-08-22 03:36:03"
  //   },
  //   {
  //     "title": "सूचना : निविदा खोलने की तिथि में परिवर्तन",
  //     "notice": "notice_8823220659.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2025-05-13 12:04:49"
  //   },
  //   {
  //     "title": "अति अल्पकालीन निविदा सूचना",
  //     "notice": "notice_6710366038.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2025-05-10 06:39:49"
  //   },
  //   {
  //     "title": "पुस्तक क्रय हेतु निविदा आमंत्रण सूचना",
  //     "notice": "notice_2705483846.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-01-18 04:06:08"
  //   },
  //   {
  //     "title": "सड़क सुरक्षा संकेतावली",
  //     "notice": "notice_6148551916.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2025-01-18 04:03:12"
  //   },
  //   {
  //     "title": "Class Routine of 1st, 3rd and 5th Semester",
  //     "notice": "notice_4595841504.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2024-11-07 10:56:11"
  //   },
  //   {
  //     "title": "Orientation Programme for Session : 2024-27 Students",
  //     "notice": "notice_5456916475.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2024-09-10 10:57:14"
  //   },
  //   {
  //     "title": "Regarding Registration of Lateral Diploma Students",
  //     "notice": "notice_4465946876.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2023-11-23 10:42:01"
  //   },
  //   {
  //     "title": "Regarding Registration of Regular Diploma Students",
  //     "notice": "notice_1394565575.pdf",
  //     "home": "1",
  //     "new": "1",
  //     "date": "2023-11-23 10:40:55"
  //   },
  //   {
  //     "title": "Mentors alloted to 1st Semester (2023-24) students.",
  //     "notice": "notice_9973190007.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-08-26 01:53:52"
  //   },
  //   {
  //     "title": "Notice regarding beginning of 1st Year Classes of New Session 2023-24.",
  //     "notice": "notice_8496842505.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-08-19 01:18:57"
  //   },
  //   {
  //     "title": "Notice regarding allotment of seats in the Hostel.",
  //     "notice": "notice_9781626360.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-07-10 05:09:19"
  //   },
  //   {
  //     "title": "Routine of 2nd, 4th and 6th Semester (All Branch)",
  //     "notice": "notice_6632757592.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-04-17 10:42:27"
  //   },
  //   {
  //     "title": "Notice regarding Class of 2nd and 4th Semester Student (All Branch)",
  //     "notice": "notice_3357944437.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-04-12 04:32:40"
  //   },
  //   {
  //     "title": "Notice regarding Form fill up of 1st and 3rd Semester Students",
  //     "notice": "notice_9498266666.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-03-01 12:10:48"
  //   },
  //   {
  //     "title": "Notice regarding admission in 3rd semester (2021-24) Batch.",
  //     "notice": "notice_9362459303.pdf",
  //     "home": "1",
  //     "new": "2",
  //     "date": "2023-02-17 04:16:20"
  //   }
  // ]


  // const [count, setcount]=useState(30);
  // console.log(count);

  // const increase=()=>{
  //   setcount(count+1);
  // }


  // const decrease=()=>{
  //   setcount(count-1);
  // }
  // console.log(products);

  let islogin = true;

  let isStatus = true;
  const [status, setStatus] = useState(true);
  const changeStatus = () => {

    setStatus(!status);

  }
  console.log(status)




  return (
    <div>

      <section>
        <Container>
          <Row>
            <Col>

              {islogin ? "successfully login" : "successfully logout"}

              {islogin ? <IoLogInOutline /> : <FiLogIn />}

              {islogin ? <Alert variant='success'>
                successfully login
              </Alert> :
                <Alert variant='danger'>
                  successfully logout
                </Alert>
              }

            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col>

              <button onClick={changeStatus}> test</button>

              {isStatus ? <Alert variant='success'>
                successfully login


              </Alert> :
                <Alert variant='danger'>
                  successfully logout

                </Alert>
              }
            </Col>
          </Row>
        </Container>
      </section>
      {/* <section>
        <Container>
          <Row>
            <Col>
              <ul>
                {
                  products.map((product, index) => {
                    return (
                      <li key={index}>{product.productName}</li>
                    );
                  }
                  )
                }
              </ul>

              <table>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th>ID</th>
                </tr>

                {
                  products.map((product, index) => {
                    return (
                      <tr>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td>{product.id}</td>
                      </tr>
                    );
                  }
                  )
                }
              </table>

              <Table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>id</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    products.map((product, index) => {
                      return (
                        <tr>
                          <td>{product.productName}</td>
                          <td>{product.productPrice}</td>
                          <td>{product.id}</td>
                        </tr>
                      );
                    }
                    )
                  }
                </tbody>


              </Table>
            </Col>
          </Row>
        </Container>
      </section> */}
      {/* 
      <section>
        <Container>
          <Row>
            <Col>

              <Table>
                <thead>
                  <tr>
                    <th>userId</th>
                    <th>id</th>
                    <th>title</th>

                  </tr>
                </thead>

                <tbody>
                  {
                    product2.map((product2, index) => {
                      return (
                        <tr>
                          <td>{ product2.userId}</td>
                          <td>{product2.id}</td>
                          <td>{product2.title}</td>

                        </tr>
                      );
                    }
                    )
                  }
                </tbody>

              </Table>
            </Col>
          </Row>
        </Container>
      </section> */}


      {/* <section>
        <Container>
          <Row>
            <Col>
            <p>{count}</p>
            <button onClick={increase}>+</button>
            
            </Col>
            <Col>
            <p>{count}</p>
            <button onClick={decrease}>-</button>
            </Col>
          </Row>
        </Container>
      </section> */}


      {/* <section>
        <Container>
          <Row>


            {
              fproducts.map((fproduct, index) => {
                return (
                  <Col>
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src={fproduct.image} />
                      <Card.Body>
                        <Card.Title>{fproduct.title}</Card.Title>
                        <Card.Text>
                          {fproduct.price},{fproduct.id}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                      </Card.Body>
                    </Card>


                  </Col>


                
                );
              }
              )
            }
          </Row>
        </Container>
      </section> */}



    </div>
  )
}

export default Test
