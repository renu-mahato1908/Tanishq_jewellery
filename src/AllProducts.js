import React from 'react';
import { Container, Col, Row, Table } from 'react-bootstrap';

const AllProducts = () => {
  const products = [
    {
      id: "1",
      product_name: "Ripple curve Diamond Ring",
      product_image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwf3768930/images/hi-res/55D5PBFZQAA02_2.jpg?sw=480&sh=480",
      product_price: "20k",
    },
    {
      id: "2",
      product_name: "Breathtaking Onyx Stone Diamond Stud Earrings for Kids",
      product_image:
        "https://www.tanishq.co.in/dw/image/v2/BKCK_PRD/on/demandware.static/-/Sites-Tanishq-product-catalog/default/dwa25216a5/images/hi-res/50F1D1SIGAGA32_2.jpg?sw=480&sh=480",
      product_price: "40k",
    },
  ];

  return (
    <section>
      <Container>
        <Row>
          <Col>
            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>Sl No</th>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Product Price</th>
                </tr>
              </thead>

              <tbody>
                {products.length > 0 ? (
                  products.map((product, index) => (
                    <tr key={product.id}>
                      <td>{index + 1}</td>
                      <td>{product.product_name}</td>
                      <td>
                        <img
                          src={product.product_image}
                          alt={product.product_name}
                          width="80"
                        />
                      </td>
                      <td>{product.product_price}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center">
                      Please wait
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProducts;
