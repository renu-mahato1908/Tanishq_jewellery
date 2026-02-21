import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Addcategorytest = () => {
  const categories=[
    {
      'id':1,
      'category':'gold',

    },
    {
      'id':2,
      'category':'diamond',

    },
    {
      'id':3,
      'category':'wedding'
    },
    {
      'id':4,
      'category':'rings'
          
    }
  ]
  return (
    <div>

    <section>
      <Container>
        <Row>
          <Col>
          {
            categories.map((category,index)=>{
              return(
                <p>{category.id}</p>,
                <p>{category.category}</p>
              )
            })
          }
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  )
}

export default Addcategorytest;