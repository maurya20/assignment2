import React, { Component } from 'react'
import {Nav,NavDropdown,Navbar} from "react-bootstrap"

export class Header extends Component {
    render() {
        return (
          <div>
            <Navbar
              collapseOnSelect
              expand="lg"
              variant="dark"
              className="navbar"
            >
              <Navbar.Brand href="#home">
                <h1>Compaign Management</h1>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto"></Nav>
                <Nav>
                  <Nav.Link href="#">Dashboard</Nav.Link>
                  <Nav.Link href="#">Compaigns</Nav.Link>
                  <Nav.Link href="#">Mailling List</Nav.Link>
                  <Nav.Link href="#">Templates</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        );
    }
}

export default Header
