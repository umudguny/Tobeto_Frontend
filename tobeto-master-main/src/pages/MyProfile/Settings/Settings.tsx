import { Row, Col, Container, Button } from "react-bootstrap";
import React, { useState } from "react";
import Menu from "../Menu/Menu";
import "./Settings.css";

export default function Settings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleChangePasswordClick = () => {};
  console.log(currentPassword, newPassword, confirmPassword);
  if (newPassword === confirmPassword) {
  } else {
    alert("Yeni şifreler uyuşmuyor!");
  }

  const handleCancelMembershipClick = () => {};
  return (
    <Container>
      <Row>
        <Col md={3} sm={12}>
          <Menu />
        </Col>
        <Col md={9} sm={12}>
          <Row>
            <Col md={4} sm={12}>
              <div className="input-group">
                <label htmlFor="current-password">Eski Şifre*</label>
                <input
                  type="password"
                  id="current-password"
                  placeholder="Eski Şifre"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="input-group">
                <label htmlFor="new-password">Yeni Şifre*</label>
                <input
                  type="password"
                  id="new-password"
                  placeholder="Yeni Şifre"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </Col>
            <Col md={4} sm={12}>
              <div className="input-group">
                <label htmlFor="confirm-password">Yeni Şifre Tekrar*</label>
                <input
                  type="password"
                  id="confirm-password"
                  placeholder="Yeni Şifre Tekrar"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </Col>
          </Row>
          <Row>
            <Col md={6} sm={12}>
              <button
                className="btn-psw btn-psw-change-password "
                onClick={handleChangePasswordClick}
              >
                Şifre Değiştir
              </button>
            </Col>
            <Col md={6} sm={12}>
              <button
                className="btn-psw btn-psw-cancel-membership "
                onClick={handleCancelMembershipClick}
              >
                Üyeliği Sonlandır
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
