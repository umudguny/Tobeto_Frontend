import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
  Card,
  ListGroup,
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Menu from "../Menu/Menu";
import "./Education.css";

type Education = {
  educationLevel: string;
  department: string;
  graduationYear: Date | null;
  startYear: Date | null;
  university: string;
  isContinuing: boolean;
};

export default function Education() {
  const handleDeleteEducation = (index: number) => {
    // Filter metoduyla seçilen index haricindeki tüm eğitimleri yeni bir dizi olarak geri dön
    const updatedEducations = educations.filter((_, i) => i !== index);
    setEducations(updatedEducations);
  };

  const [educations, setEducations] = useState<Education[]>([]);
  const [error, setError] = useState<string>("");
  const [currentEducation, setCurrentEducation] = useState<Education>({
    educationLevel: "",
    department: "",
    graduationYear: null,
    startYear: null,
    university: "",
    isContinuing: false,
  });

  const handleDateChange = (
    selectedDate: Date | null,
    name: "startYear" | "graduationYear"
  ) => {
    setCurrentEducation((prev) => ({
      ...prev,
      [name]: selectedDate,
    }));

    // Tarih değerlerini kontrol et
    const startYearDate =
      name === "startYear" ? selectedDate : currentEducation.startYear;
    const graduationYearDate =
      name === "graduationYear"
        ? selectedDate
        : currentEducation.graduationYear;

    if (
      startYearDate &&
      graduationYearDate &&
      startYearDate > graduationYearDate
    ) {
      setError("Başlangıç yılı mezuniyet yılından sonra olamaz.");
    } else {
      setError("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setCurrentEducation((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddEducation = () => {
    if (
      currentEducation.startYear &&
      currentEducation.graduationYear &&
      currentEducation.startYear <= currentEducation.graduationYear
    ) {
      setEducations([...educations, currentEducation]);
      setCurrentEducation({
        educationLevel: "",
        department: "",
        graduationYear: null,
        startYear: null,
        university: "",
        isContinuing: false,
      });
      setError("");
    } else {
      setError("Başlangıç yılı mezuniyet yılından sonra olamaz.");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleAddEducation();
  };

  const formatEducationLevel = (level: any) => {
    switch (level) {
      case "lisans":
        return "Lisans";
      case "on_lisans":
        return "Ön Lisans";
      case "yuksek_lisans":
        return "Yüksek Lisans";
      case "doktora":
        return "Doktora";
      default:
        return "---";
    }
  };

  return (
    <Container className="edu-cont ">
      <Row>
        <Col md={3} sm={12}>
          <Menu />
        </Col>
        <Col md={9} sm={12}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="educationLevel">
                  <Form.Label className="edc-label">Eğitim Durumu*</Form.Label>
                  <Form.Control
                    className="edc-input edc-select"
                    as="select"
                    name="educationLevel"
                    value={currentEducation.educationLevel}
                    onChange={handleChange}
                  >
                    <option value="">Seviye Seçiniz</option>
                    <option value="lisans">Lisans</option>
                    <option value="on_lisans">Ön Lisans</option>
                    <option value="yuksek_lisans">Yüksek Lisans</option>
                    <option value="doktora">Doktora</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="university">
                  <Form.Label className="edc-label">Üniversite*</Form.Label>
                  <Form.Control
                    className="edc-input"
                    type="text"
                    name="university"
                    value={currentEducation.university}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="department">
                  <Form.Label className="edc-label">Bölüm*</Form.Label>
                  <Form.Control
                    className="edc-input"
                    type="text"
                    name="department"
                    value={currentEducation.department}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="startYear">
                  <Form.Label className="edc-label">Başlangıç Yılı*</Form.Label>
                  <DatePicker
                    locale="tr"
                    selected={currentEducation.startYear}
                    onChange={(date) => handleDateChange(date, "startYear")}
                    dateFormat="yyyy"
                    showYearPicker
                    placeholderText="Başlangıç Yılınızı Seçiniz"
                    className="edc-input edc-input-date"
                    isClearable
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="graduationYear">
                  <Form.Label className="edc-label">Mezuniyet Yılı*</Form.Label>
                  <DatePicker
                    locale="tr"
                    selected={currentEducation.graduationYear}
                    onChange={(date) =>
                      handleDateChange(date, "graduationYear")
                    }
                    dateFormat="yyyy"
                    showYearPicker
                    placeholderText="Mezuniyet Yılınızı Seçiniz"
                    className="edc-input edc-input-date"
                    isClearable
                  />
                </Form.Group>
                <Form.Group controlId="isContinuing" className="edc-check ">
                  <Form.Check
                    className="edc-check-box"
                    type="checkbox"
                    name="isContinuing"
                    label="Devam Ediyorum"
                    checked={currentEducation.isContinuing}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button className="button-edc" type="submit">
              Kaydet
            </Button>
            {error && <Alert variant="danger">{error}</Alert>}
          </Form>
          <Row>
            {/* Eğitim bilgilerinin listelendiği bölüm */}

            <div className="education-list">
              {educations.map((edu, index) => (
                <div key={index} className="education-card ">
                  <div className="education-header">
                    <div className="education-year">
                      <img src="https://tobeto.com/grade-date.svg"></img>&nbsp;
                      {edu.startYear ? edu.startYear.getFullYear() : "???"} -
                      {edu.graduationYear
                        ? edu.graduationYear.getFullYear()
                        : "???"}
                    </div>
                    <div className="education-level-badge">
                      {formatEducationLevel(edu.educationLevel)}
                    </div>
                  </div>
                  <Row>
                    <Col
                      md={5}
                      xs={12}
                      className="education-university ed-head"
                    >
                      Üniversite
                    </Col>
                    <Col
                      md={7}
                      sm={12}
                      className="education-department ed-head ed-dep-head"
                    >
                      Bölüm
                    </Col>
                  </Row>
                  <Row>
                    <Col md={5} sm={12}>
                      <div className="education-university ed-sub">
                        {edu.university}
                      </div>
                    </Col>
                    <Col md={6} sm={12}>
                      <div className="education-department ed-sub">
                        {edu.department}
                      </div>
                    </Col>

                    <Col md={1} sm={12}>
                      <button
                        onClick={() => handleDeleteEducation(index)}
                        className="delete-button-edu"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </button>{" "}
                    </Col>
                  </Row>
                </div>
              ))}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
