import React from "react";
import { Col, Container, Image, Nav, Navbar, Row } from "react-bootstrap";
import "./LoginNavi.css";
import { Link } from "react-router-dom";
import { faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginNavi() {
  return (
    <>
      <Row>
        <Col lg={12} md={12} sm={12}>
          <div className="ik-banner">
            <div className="container">
              <div className="ik-banner-top">
                <div>
                  <Link to="/platform">
                    <img
                      src="https://tobeto.com/_next/static/media/ik-logo-light.ace655db.svg"
                      className="ik-logo-platform bordered"
                    ></img>
                  </Link>
                </div>
                <div className="mobile-none">
                  <span className="text-ik fw-bold">
                    Aradığın{" "}
                    <span style={{ color: "rgb(0, 176, 120)" }}>"</span>İş
                    <span style={{ color: "rgb(0, 176, 120)" }}>"</span> Burada!
                  </span>
                </div>
                <div>
                  <Link to="/register">
                    <button className="ik-btn">Başvur</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col lg={12} md={8} sm={4}>
          <Navbar expand="sm" className="bg-dark">
            <Container>
              <Link to="/platform">
                <Image
                  src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTebeto-logo-yatay-beyaz.8c2d6927.png&w=256&q=75"
                  width="100px"
                  className="m-3 bordered"
                  fluid
                />
              </Link>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />

              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Link to="/about" className="nav-link p-4 text-white">
                    Biz Kimiz
                  </Link>
                  <Link to="/about" className="nav-link p-4 text-white">
                    Neler Sunuyoruz?
                  </Link>
                  <Link to="/catalog" className="nav-link p-4 text-white">
                    Katalog
                  </Link>
                  <Link to="/ComingSoon" className="nav-link p-4 text-white">
                    Codecademy
                  </Link>
                  <Link to="/ComingSoon" className="nav-link p-4 text-white">
                    Tobeto'da Bu Ay
                  </Link>
                </Nav>
              </Navbar.Collapse>
              <Link to="/login">
                <button className="login-button">Giriş Yap</button>
              </Link>
              <Link to="/register">
                <button className="wave-button">Ücretsiz Üye Ol</button>
              </Link>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </>
  );
}
