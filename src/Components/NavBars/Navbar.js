import React from 'react';
import './navbar.css';
import { Nav, Navbar, Form, Button, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar bg="dark" variant="dark" className='nav'>
                    <NavLink to = '/'>Home</NavLink>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">About Me</Nav.Link>
                        <Nav.Link href="#features">Travels</Nav.Link>
                        <Nav.Link href="#features">Contact</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                    </Form>
                </Navbar>

               

            </React.Fragment>
        )
    }
}

export default NavBar;