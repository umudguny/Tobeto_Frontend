import Menu from "../Menu/Menu";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import "./EditMyInfo.css";

export default function EditMyInfo() {
  const [image, setImage] = useState<string>(
    "https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=128&q=75"
  );

  const [personalInfo, setPersonalInfo] = useState({
    adiniz: "",
    soyadiniz: "",
    identityNumber: "",
    email: "",
    phoneNumber: "",
    birthDate: null as Date | null,
    country: "Türkiye",
    city: "",
    district: "",
    neighborhood: "",
    about: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleBirthDateChange = (date: Date | null) => {
    setPersonalInfo({ ...personalInfo, birthDate: date });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(personalInfo);
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <Container>
      <Row>
        <Col md={3} sm={12}>
          <Menu />
        </Col>
        <Col className="edt-pro-cont " md={9} sm={12}>
          <Row>
            <Col md={12}>
              <div className="p-img-cont">
                <img className="p-img" src={image} alt="Profil" />
                <div className="edit-icon-container">
                  <Button
                    className="edit-icon-button"
                    onClick={() =>
                      document.getElementById("imageUpload")?.click()
                    }
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                  <input
                    id="imageUpload"
                    type="file"
                    onChange={handleImageChange}
                    style={{ display: "none" }}
                    accept="image/*"
                  />
                </div>
              </div>
            </Col>
          </Row>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="adiniz">
                  <Form.Label className="edt-pro-label">Adınız*</Form.Label>
                  <Form.Control
                    className="edt-pro-input"
                    type="text"
                    name="adiniz"
                    value={personalInfo.adiniz}
                    onChange={handleChange}
                    placeholder="Adınızı giriniz"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="soyadiniz">
                  <Form.Label className="edt-pro-label">Soyadınız*</Form.Label>
                  <Form.Control
                    className="edt-pro-input"
                    type="text"
                    name="soyadiniz"
                    value={personalInfo.soyadiniz}
                    onChange={handleChange}
                    placeholder="Soyadınızı giriniz"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="phoneNumber">
                  <Form.Label className="edt-pro-label">
                    Telefon Numaranız*
                  </Form.Label>
                  <Form.Control
                    className="edt-pro-input edt-pro-input-date "
                    type="text"
                    placeholder="+90 555 555 55 55"
                    aria-label="PhoneNumber"
                    aria-describedby="basic-addon1"
                    value={personalInfo.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="birthDate">
                  <Form.Label className="edt-pro-label">
                    Doğum Tarihiniz*
                  </Form.Label>
                  <DatePicker
                    className="edt-pro-input edt-pro-input-date "
                    selected={personalInfo.birthDate}
                    onChange={handleBirthDateChange}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="gg.aa.yyyy"
                    isClearable
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="identityNumber">
                  <Form.Label className="edt-pro-label">
                    TC Kimlik No*
                  </Form.Label>
                  <Form.Control
                    className="edt-pro-input"
                    type="text"
                    name="identityNumber"
                    value={personalInfo.identityNumber}
                    onChange={handleChange}
                    placeholder="TC Kimlik Numaranızı giriniz"
                    required
                  />
                </Form.Group>
                <Form.Text className="text-muted-edt">
                  *Aboneliklerde fatura için doldurulması zorunlu alan
                </Form.Text>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="email">
                  <Form.Label className="edt-pro-label">E-posta</Form.Label>
                  <Form.Control
                    className="edt-pro-input"
                    type="email"
                    name="email"
                    value={personalInfo.email}
                    onChange={handleChange}
                    placeholder="E-posta adresinizi giriniz"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId="country">
                  <Form.Label className="edt-pro-label">E-posta</Form.Label>
                  <Form.Control
                    className="edt-pro-input"
                    type="country"
                    name="country"
                    value={personalInfo.country}
                    onChange={handleChange}
                    placeholder="Türkiye"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="city">
                  <Form.Label className="edt-pro-label">İl*</Form.Label>
                  <Form.Control
                    className="edt-pro-input"
                    as="select"
                    name="city"
                    value={personalInfo.city}
                    onChange={handleChange}
                    required
                  >
                    <option value="istanbul">İstanbul</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="district">
                  <Form.Label className="edt-pro-label">İlçe*</Form.Label>
                  <Form.Control
                    className="edt-pro-input"
                    as="select"
                    name="district"
                    value={personalInfo.district}
                    onChange={handleChange}
                    required
                  >
                    <option value="bayrampasa">Bayrampaşa</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="neighborhood">
                  <Form.Label className="edt-pro-label">
                    Mahalle / Sokak
                  </Form.Label>
                  <Form.Control
                    className=" textarea-custom"
                    as="textarea"
                    name="neighborhood"
                    value={personalInfo.neighborhood}
                    onChange={handleChange}
                    placeholder="Mahalle/Sokak adını giriniz"
                    rows={4}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="about">
                  <Form.Label>Hakkımda</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="about"
                    value={personalInfo.about}
                    onChange={handleChange}
                    placeholder="Kendiniz hakkında bir şeyler yazın"
                    rows={4} 
                  />
                </Form.Group>
              </Col>
            </Row>
            <button className="button-edt-pro" type="submit">
              Kaydet
            </button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
