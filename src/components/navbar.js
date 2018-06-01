import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
    

class NavBar extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
  render() {
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Mithilesh Tarkar</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">About Me</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/services">My Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/works">My Works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/videos">My Videos</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/request">Request a Quote</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
export default NavBar;