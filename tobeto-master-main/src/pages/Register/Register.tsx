import React, { useState, FormEvent } from "react";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Action, ThunkDispatch } from "@reduxjs/toolkit";
import { registerUser } from "../../store/reducers/registerReducer";
import "./Register.css"

export default function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [secondName, setSecondName] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const { loading, error } = useSelector((state: any) => state.user);
  const dispatch: ThunkDispatch<any, void, Action> = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();

    if (password.length < 8) {
      setPasswordError("Şifre en az 8 karakter uzunluğunda olmalıdır.");
      return;
    }
    if (password !== confirmPassword) {
      setPasswordError("Şifre eşleşmiyor");
      return;
    }

    let userData = {
      email,
      password,
      firstname: userName,
      lastname: secondName,
      confirmPassword: confirmPassword,
    };

    let jsonUserData = JSON.stringify(userData);

    dispatch(registerUser(jsonUserData)).then((result: any) => {
      if (result.type == "user/registerUser/fulfilled") {
        navigate("/login");
      }
    });
  };
  return (
    <>
      <Row className="p-5 mb-5">
        <Col lg={2} md={12} sm={12}></Col>
        <Col lg={4} md={12} sm={12}>
          <div className="login-main ">
            <div className="login card-login-animation lf-out">
              <div className="form lf-in-area">
              <form onSubmit={handleRegister}>
                  <Image
                    src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                    width={"180px"}
                    className="mb-4"
                  ></Image>
                  <span className="form-spn">Hemen Kayıt Ol&nbsp;</span>
                  <input
                    type="name"
                    name="name"
                    placeholder="Name"
                    className="form-control inp_text"
                    id="name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                  <input
                    type="surname"
                    name="surname"
                    placeholder="Surname"
                    className="form-control inp_text"
                    id="surname"
                    value={secondName}
                    onChange={(e) => setSecondName(e.target.value)}
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email id / username"
                    className="form-control inp_text"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <input
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <input
                    type="Password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    className="form-control"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  {passwordError && (
                    <p className="alert alert-danger" role="alert">
                      {passwordError}
                    </p>
                  )}
                  <br />
                  <button
                  type="submit"
                    className="btn-rgst"
                  >
                    Kayıt Ol
                  </button>
                  <span className="lt-area-btm-spn">
                    Zaten bir hesabın var mı?{" "}
                    <Link className="lt-area-btm-link" to="/login">
                      Giriş Yap
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={3} md={6} sm={12}>
          <div className="login card-right rt-out">
            <div className="form  rt-in-area">
              <div>
                <div className="text-center mt-5">
                <img
            src="https://tobeto.com/_next/static/media/dotv.9454a9b6.svg" 
            style={{ position: 'absolute', top: '0', left: '10px', width: '60px' }} 
          />
                  <Image
                    className="ik-logo-rt"
                    src="https://tobeto.com/_next/static/media/ik-logo-dark.7938c0de.svg"
                    width={"100px"}
                  ></Image>
                   <br /> <br />
                  <br />
                  <Button className=" rt-btn">Başvur</Button>
                  <img
            src="https://tobeto.com/_next/static/media/doth.d78dd392.svg" 
            style={{ position: 'absolute', bottom: '15px', right: '15px', width: '70px' }} 
          />
                </div>
              </div>
            </div>
          </div>
        </Col>
        <div className="col-3"></div>
      </Row>
    </>
  );
}
