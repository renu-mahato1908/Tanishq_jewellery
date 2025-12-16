import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Table } from 'react-bootstrap'
import axios from 'axios';
import moment from 'moment';
const Notice = () => {


  const [notices, setnotices] = useState();
  useEffect(() => {
    axios.get("https://www.gpa.ac.in/noticedata.php").then((response) => {
      console.log(response.data);
      setnotices(response.data);
    });

  }, []);

  return (
    <div>

      <Row>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Home</th>
                <th>title</th>
                <th>Notice</th>
                <th>Date</th>

              </tr>
            </thead>
            <tbody>


              {
                notices ?
                  notices.map((notice, index) => {
                    return (
                      <div>
                       
                          <td>{notice.home}</td>
                          <td>{notice.title} {notice.new?<img src="https://gpa.ac.in/new.gif "/>:''}</td>

                          <td>{notice.notice}</td>
                          <td>{moment(notice.date ).format('')}</td>
                         

                        
                      </div>
                    )
                  }
                  )
                  :
                  "please wait"

              }





            </tbody>

          </Table>
        </Col>
      </Row>

    </div>
  )
}


export default Notice
