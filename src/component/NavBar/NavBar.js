import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import CartWidget from '../cartWidget/CartWidget';
import img from './moon.png';
import './NavBar.css'

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand><Link to='/'> <img  src={img} style={{width:'70px'}}/></Link></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                     <Nav.Link><Link to='/' className='link'>Home</Link></Nav.Link>
                        <NavDropdown to='Products'title='Categories' className='link'>
                            <NavDropdown.Item><Link to='Products/Phone' className='subLink'>Phone</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='Products/Computer' className='subLink'>Computer</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to='Products/Watch' className='subLink'>Watch</Link></NavDropdown.Item>
                        </NavDropdown>
                     <Nav.Link><CartWidget/></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
