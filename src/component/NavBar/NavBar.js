import React from 'react';
import { Navbar, Container, Nav} from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import img from './moon.png'
//css
import './NavBar.css';

const NavBar = () => {
    return (
 
        <Navbar bg="light" expand="lg">
        <Container fluid>
            <Navbar.Brand href="#"><img src={img} alt="" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link >Home</Nav.Link>
                <Nav.Link >Product</Nav.Link>
                <Nav.Link >About</Nav.Link>
            </Nav>
            <CartWidget />
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
};

export default NavBar;