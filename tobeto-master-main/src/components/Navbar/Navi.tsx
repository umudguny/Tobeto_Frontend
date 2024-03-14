import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { MouseEventHandler, useEffect, useState } from "react";
import {
  Col,
  Container,
  Image,
  Nav,
  NavDropdown,
  Navbar,
  Row,
} from "react-bootstrap";
import {  Link, NavLink, useNavigate } from "react-router-dom"; 
import "../Navbar/Navi.css";

export default function Navi() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  
  useEffect(() => {
    const name = localStorage.getItem("firstName");
    const lastName = localStorage.getItem("secondName");
    console.log("Retrieved first name:", name);
    console.log("Retrieved last name:", lastName);
    if (name !== null && lastName !== null) {
      setFirstName(name);
      setLastName(lastName);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("firstName");
    localStorage.removeItem("secondName");
    navigate("/login");
  };
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Link to="/Platform">
        <Image
          src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
          className="mx-5"
          width={"179px"}
        />
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto sm">
          <NavLink to="/platform" className="nav-link p-4">
            Anasayfa
          </NavLink>
          <NavLink to="/my-profile" className="nav-link p-4">
            Profilim
          </NavLink>
          <NavLink to="/ComingSoon" className="nav-link p-4">
            Değerlendirmeler
          </NavLink>
          <NavLink to="/catalog" className="nav-link p-4">
            Katalog
          </NavLink>
          <NavLink to="/dates" className="nav-link p-4">
            Takvim
          </NavLink>
          <NavLink to="/ComingSoon" className="nav-link p-4">
            İstanbul Kodluyor
          </NavLink>
        </Nav>

        <Nav className="d-flex align-items-center me-5">
          <Nav.Link className="text-dark ">
            <FontAwesomeIcon icon={faSave} style={{ color: "purple" }} />
          </Nav.Link>
          <NavDropdown title={`${firstName} ${lastName}`} id="profile-dropdown">
            <NavDropdown.Item>Profil Bilgileri</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={handleLogout as MouseEventHandler<HTMLElement>}
            >
              Oturumu Kapat</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
