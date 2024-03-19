import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import './Header.scss'

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white">
    <Container className="py-3">
      <Link to="/">
        <Navbar.Brand as="span" className="me-5">
          <img src="logo_site.png" alt="" />
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbarr d-flex align-items-center justify-content-between w-50 ms-auto">
          <Nav.Link as="span">
            <NavLink to="/">Home</NavLink>
          </Nav.Link>
          <Nav.Link as="span">
            <NavLink to="/shop">Shop</NavLink>
          </Nav.Link>
          <Nav.Link as="span">
            <NavLink to="/about">About</NavLink>
          </Nav.Link>
          <Nav.Link as="span">
            <NavLink to="/contact">Contact</NavLink>
          </Nav.Link>
          <div className="d-flex align-items-center w-25">
          <Nav.Link as="span">
            <a href="#">
              <img className="nav_icons" src="account_icon.png" alt="" />
            </a>
          </Nav.Link>
          <Nav.Link as="span">
            <a href="#">
              <img className="nav_icons" src="search_icon.png" alt="" />
            </a>
          </Nav.Link>
          <Nav.Link as="span">
            <a href="#">
              <img className="nav_icons" src="like_icon.png" alt="" />
            </a>
          </Nav.Link>
          <Nav.Link as="span">
            <a href="#">
              <img className="nav_icons" src="shop_icon.png" alt="" />
            </a>
          </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Header;

