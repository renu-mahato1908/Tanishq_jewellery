import React, { useEffect } from "react";

import { Col, Row, Container, Navbar, Nav, Button } from 'react-bootstrap'
import logo from './logo.png';
import {  IoIosLogOut } from "react-icons/io";



import { Link } from 'react-router';
import { logout } from './slices/auth';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";



const Header = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { user: currentUser } = useSelector((state) => state.auth);
  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    if (currentUser && currentUser.roles[0] === "ROLE_ADMIN") {
      console.log(currentUser.roles[0]);

      navigate("/Dashboard");
    }
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login'); // Redirect to login page
    // window.location.reload();
  };
  return (
    <div >

      <section>
        <Container>
          <Row>

            <Col md={3} className="logoarea">

              <Link to={'/Home'}>
                <img src={logo} alt='logo' />
              </Link>



            </Col>

            <Col md={3}>
              <div className='search'>
                <form>
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                </form>
              </div>
            </Col>
            <Col md={6} >
              <div className='icon'>
                {/* <Link to={'/Register'}><i className='fa-solid  fa-users'></i></Link> */}
                {
                  currentUser
                    ? null
                    : (
                      <Link to={'/Register'}>
                        <i className='fa-solid fa-users'></i>
                      </Link>
                    )
                }

                {/* <p>user</p> */}
                <Link to={'/Cart'}><i className="fa-solid fa-cart-arrow-down"></i></Link>



                {/* <Link to={'/Account'}><i className=' fa-solid fa-address-card '></i></Link>
                <ul className="dropdown-menu">
                  <li><Link to="/Account">My Account</Link></li>
                  <li><Link to="/Orders">My Orders</Link></li>
                  <li><Link to="/Wishlist">Wishlist</Link></li>
                  <li><Link to="/Address">Saved Address</Link></li>
                </ul> */}

                {/* ACCOUNT DROPDOWN */}
                <div className="account-dropdown">
                  <i className="fa-solid fa-address-card"></i>

                  <ul className="dropdown-menu">
                    <li><Link to="/Account">My Account</Link></li>
                    <li><Link to="/Orderstatus">My Orders</Link></li>
                    <li><Link to="/Wishlist">Wishlist</Link></li>
                    <li><Link to="/Address">Saved Address</Link></li>
                  </ul>
                </div>
                {/* <p>Account</p> */}



                {/* <a href='./Register'><i className=' fa-solid fa-user'></i></a> */}


                {
                  currentUser ? <Button onClick={handleLogout} type="submit">
                    <IoIosLogOut />
                    Log out
                  </Button> : ""
                }




              </div>

            </Col>



          </Row>
        </Container>


      </section>
      <section className='navbar'>
        <Container>
          <Row>
            <Col>

              <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <img src="https://cdn-icons-png.flaticon.com/128/15398/15398668.png" alt=''></img>
                      <Nav.Link as={Link} to={'/Home'}>Home</Nav.Link>
                      <img src='https://cdn-icons-png.flaticon.com/128/8574/8574935.png' alt=''></img>
                      <Nav.Link as={Link} to={'Category/Mangalsutra'}>Mangalsutra</Nav.Link>
                      <img src='https://cdn-icons-png.flaticon.com/128/2629/2629500.png' alt=''></img>
                      <Nav.Link as={Link} to={'Category/Pendant'}>Pendant</Nav.Link>
                      <img src='https://cdn-icons-png.flaticon.com/128/16109/16109031.png' alt=''></img>
                      <Nav.Link as={Link} to={'Category/Gold'}>Gold</Nav.Link>
                      <img src='https://cdn-icons-png.flaticon.com/128/3137/3137712.png' alt=''></img>
                      <Nav.Link as={Link} to={'Category/Diamond'}>Diamond</Nav.Link>
                      <img src='https://cdn-icons-png.flaticon.com/128/1036/1036964.png' alt=''></img>
                      <Nav.Link as={Link} to={'Category/Earrings'}>Earrings</Nav.Link>
                      <img src='https://cdn-icons-png.flaticon.com/128/706/706482.png' alt=''></img>
                      <Nav.Link as={Link} to={'Category/Rings'}>Rings</Nav.Link>

                      <img src='https://cdn-icons-png.flaticon.com/128/8561/8561509.png' alt=''></img>
                      <Nav.Link as={Link} to={'Category/Dailywear'}>Daily wear</Nav.Link>


                      <img src='https://cdn-icons-png.flaticon.com/128/531/531864.png' alt=''></img>
                      <Nav.Link as={Link} to={'Category/Wedding'}>Wedding</Nav.Link>

                      <img src='https://cdn-icons-png.flaticon.com/128/548/548427.png' alt=''></img>
                      <Nav.Link as={Link} to={'/Userproduct'}>Products</Nav.Link>

                      {/* <Dropdown as={NavItem}>
                        <Dropdown.Toggle as={NavLink}>Login…</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item><Link to={'/Register'}>Register</Link></Dropdown.Item>
                          <Dropdown.Item><Link to={'/Account'}>Account</Link></Dropdown.Item>
                          <Dropdown.Item><Link to={'/products'}>All products</Link></Dropdown.Item>



                        </Dropdown.Menu>
                      </Dropdown> */}



                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </section>



    </div>
  )
}


export default Header
