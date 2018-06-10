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
              <li>
                <NavLink href="/" to="/">
                <a className="nav-link" href="/">About Me  <span class="sr-only">(current)</span></a>
                </NavLink>
              </li>
              <li>
                <NavLink href="/services" to="/services">
                <a className="nav-link" href="/services"> My Services  <span class="sr-only">(current)</span></a>
                </NavLink>
              </li>
              <li>
                <NavLink href="/works" to="/works">
                <a className="nav-link" href="/works">My Works  <span class="sr-only">(current)</span></a>
                </NavLink>
              </li>
              <li>
                <NavLink href="/videos" to="/videos">
                <a className="nav-link" href="/videos">My Videos  <span class="sr-only">(current)</span></a>
                </NavLink>
              </li>
              <li>
                <NavLink href="/request" to="/request">
                <a className="nav-link" href="/request">Request a Quote  <span class="sr-only">(current)</span></a></NavLink>
              </li>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
export default NavBar;