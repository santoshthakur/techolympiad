import React from 'react'
import {Nav, Navbar} from 'react-bootstrap'
import logo from '../images/logo.png'
import LoginButton from './LoginButton'
import RegisterFrom from './RegisterForm'

function NavigationTop(){
    return(
<Navbar  expand="lg" fixed="top" className="navheight navbar-dark">
    <Navbar.Brand href="/" className="logosec"><img src={logo} alt="" /></Navbar.Brand>
    <div className="wline"></div>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/Aboutus">About</Nav.Link>
      <Nav.Link href="/procedures">Procedures</Nav.Link>
      <Nav.Link href="/timeline">Timeline</Nav.Link>
      <Nav.Link href="/awards">Awards</Nav.Link>
      <Nav.Link href="/certificate">Validate Certificate</Nav.Link>

      <div className="d-flex ml-4"><RegisterFrom /> <LoginButton /></div>
    </Nav>
   
  </Navbar.Collapse>

</Navbar>
 )
}

export default NavigationTop;