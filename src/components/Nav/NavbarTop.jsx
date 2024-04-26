import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./nav.css";
import { Search } from "./Search";
import {
  PiHandbagLight,
  PiHeartLight,
  PiUserCircleLight,
} from "react-icons/pi";
import { isDesktop, isMobile } from "react-device-detect";
import logoWide from "../../assets/logo-wide.png";
import logo from "../../assets/logo.png";
import { GoChevronDown } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

export const NavbarTop = () => {
  console.log(isMobile);
  return (
    <>
      <Navbar expand="lg" className="border-bottom">
        <Container>
          <Navbar.Brand href="#">
            {isDesktop ? (
              <Link to="/">
                <img
                  src={logoWide}
                  style={{ maxHeight: "40px" }}
                  alt="Paytusker"
                />
              </Link>
            ) : (
              <Link to="/">
                <img src={logo} style={{ maxHeight: "40px" }} alt="Paytusker" />
              </Link>
            )}
          </Navbar.Brand>
          {!isMobile && <Search />}
          <div
            className="ms-auto d-flex flex justify-content-center align-items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <div className="hover:text-white mx-3">
                <PiHandbagLight size={32} color="#fff" />
              </div>
            </Nav.Link>
            <Nav.Link href="#action2" className="mx-0">
              <PiHeartLight size={32} color="#fff" />
            </Nav.Link>
            {/* ToolTip on user icon */}

            {/*  */}
            <Dropdown>
              <Dropdown.Toggle
                id="dropdown-menu-align-responsive-2"
                className="border-[none] text-center user-btn"
              >
                <PiUserCircleLight
                  size={32}
                  color="#fff"
                  className="border-[none]"
                />
              </Dropdown.Toggle>
              <Dropdown.Menu
                id="dropdown-menu-align-responsive-1"
                className=" bg-light"
              >
                <Link to={"/login"}>
                  <Dropdown.Item href="/login">Login</Dropdown.Item>
                </Link>
                <Dropdown.Item href="#/action-2"> Register</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/*  */}
          </div>
        </Container>
      </Navbar>
      <Navbar expand="lg">
        <Container className="d-flex justify-content-between">
          <Navbar.Toggle aria-controls="basic-navbar-nav " />
          <div className="mobile-search-input">{isMobile && <Search />}</div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex w-100  justify-content-between align-items-between">
              <div className="d-flex justify-content-between  category-dd-mobile-style ">
                {/* category DD */}
                {isMobile ? <CategoryDDMobile /> : <CategoryDDdesktop />}
              </div>
              <Nav.Link
                className="navbar-underline-style "
                href="#home"
                eventKey={"Home"}
              >
                Home
              </Nav.Link>

              <ShopDD />
              <Nav.Link
                className="navbar-underline-style"
                href="#link"
                eventKey={"Stores"}
              >
                Stores
              </Nav.Link>

              <PagesDD />
              <Nav.Link
                className="navbar-underline-style"
                href="#link"
                eventKey={"blog"}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                className="navbar-underline-style"
                href="#link"
                eventKey={"faq"}
              >
                FAQs
              </Nav.Link>
              <Nav.Link
                className="navbar-underline-style"
                href="#link"
                eventKey={"contact"}
              >
                Contact
              </Nav.Link>
              <div>
                <div className="fw-bold d-flex w-100 justify-content-between ">
                  <Nav.Link href="#link">Become a Seller</Nav.Link>
                  <span className="border-l-1 border-white border border-solid"></span>
                  <Nav.Link href="#link">Track Your Order</Nav.Link>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export const CategoryDDdesktop = () => {
  return (
    <Dropdown>
      <div className="d-flex justify-content-start align-items-center  bg-light pe-4 ps-1">
        <div className="justify-self-start">
          <GiHamburgerMenu size={15} />
        </div>
        <div className="justify-self-start pe-4">
          <Dropdown.Toggle
            variant="text"
            id="dropdown-basic"
            className="category-btn  active:outline-none"
          >
            Category
          </Dropdown.Toggle>
        </div>
      </div>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const CategoryDDMobile = () => {
  return (
    <Dropdown className="category-mob-drop-down-parent">
      <div className="d-flex justify-content-start align-items-center gap-1">
        <div className="justify-self-start  ">
          <Dropdown.Toggle
            variant="text"
            id="dropdown-basic"
            className="category-btn  active:outline-none category-mob-btn text-light px-0"
          >
            Category
          </Dropdown.Toggle>
        </div>
        <div className="justify-self-start">
          <GiHamburgerMenu size={15} className="text-light" />
        </div>
      </div>

      <Dropdown.Menu className=" ">
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const ShopDD = () => {
  return (
    <Dropdown>
      <div className="d-flex justify-content-start navbar-underline-style align-items-center gap-1  ">
        <div className="justify-self-start  ">
          <Dropdown.Toggle
            variant="text"
            id="dropdown-basic"
            className="border-0 border-active-0 text-light  active:outline-none px-0"
          >
            Shop
          </Dropdown.Toggle>
        </div>
        <div className="category-dd-mobile-style text-light justify-self-start">
          <GoChevronDown
            size={20}
            className="category-dd-mobile-style text-light"
          />
        </div>
      </div>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const PagesDD = () => {
  return (
    <Dropdown>
      <div className="d-flex justify-content-start navbar-underline-style align-items-center  gap-1 ">
        <Dropdown.Toggle
          variant="text"
          id="dropdown-basic"
          className="border-0 border-active-0 text-light  active:outline-none px-0"
        >
          Pages
        </Dropdown.Toggle>
        <div className="category-dd-mobile-style text-light">
          <GoChevronDown size={20} />
        </div>
      </div>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> action 2</Dropdown.Item>
        <Dropdown.Item href="#/action-3"> action 3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
