import Menu from "../Menu/Menu";
import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Modal,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./Experience.css";

type Experience = {
  companyName: string;
  position: string;
  sector: string;
  city: string;
  startDate: Date | null;
  endDate: Date | null;
  isCurrent: boolean;
  description: string;
};

export default function Experience() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [currentExperience, setCurrentExperience] = useState<Experience>({
    companyName: "",
    position: "",
    sector: "",
    city: "",
    startDate: null,
    endDate: null,
    isCurrent: false,
    description: "",
  });

  const [error, setError] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | any
    >
  ) => {
    const { name, value, type, checked } = e.target;
    // Checkbox için kontrol
    if (type === "checkbox") {
      setCurrentExperience({ ...currentExperience, [name]: checked });
    } else {
      setCurrentExperience({ ...currentExperience, [name]: value });
    }
  };

  const handleDateChange = (date: Date | null, fieldName: keyof Experience) => {
    setCurrentExperience({ ...currentExperience, [fieldName]: date });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // İş bitiş tarihi kontrolü: Başlangıç tarihi bitiş tarihinden sonra olamaz
    if (
      currentExperience.startDate &&
      currentExperience.endDate &&
      currentExperience.startDate > currentExperience.endDate
    ) {
      setError("İş bitişi, başlangıcından önce bir tarih olamaz.");
      return; // Formun gönderilmesini engelleyin ve işlemi burada sonlandırın
    }

    // Tarihler geçerliyse deneyimi listeye ekleyin
    setExperiences([...experiences, currentExperience]);

    // Mevcut deneyim formunu temizleyin
    setCurrentExperience({
      companyName: "",
      position: "",
      sector: "",
      city: "",
      startDate: null,
      endDate: null,
      isCurrent: false,
      description: "",
    });

    // Hata mesajını temizleyin
    setError("");
  };

  const handleDeleteExperience = (index: number) => {
    // Create a new array without the item at the provided index
    const updatedExperiences = experiences.filter((_, idx) => idx !== index);
    // Update state with the new array
    setExperiences(updatedExperiences);
  };

  const cities = [
    "Adana",
    "Adıyaman",
    "Afyonkarahisar",
    "Ağrı",
    "Amasya",
    "Ankara",
    "Antalya",
    "Artvin",
    "Aydın",
    "Balıkesir",
    "Bartın",
    "Batman",
    "Bayburt",
    "Bilecik",
    "Bingöl",
    "Bitlis",
    "Bolu",
    "Burdur",
    "Bursa",
    "Çanakkale",
    "Çankırı",
    "Çorum",
    "Denizli",
    "Diyarbakır",
    "Düzce",
    "Edirne",
    "Elazığ",
    "Erzincan",
    "Erzurum",
    "Eskişehir",
    "Gaziantep",
    "Giresun",
    "Gümüşhane",
    "Hakkâri",
    "Hatay",
    "Iğdır",
    "Isparta",
    "İstanbul",
    "İzmir",
    "Kahramanmaraş",
    "Karabük",
    "Karaman",
    "Kars",
    "Kastamonu",
    "Kayseri",
    "Kırıkkale",
    "Kırklareli",
    "Kırşehir",
    "Kilis",
    "Kocaeli",
    "Konya",
    "Kütahya",
    "Malatya",
    "Manisa",
    "Mardin",
    "Mersin",
    "Muğla",
    "Muş",
    "Nevşehir",
    "Niğde",
    "Ordu",
    "Osmaniye",
    "Rize",
    "Sakarya",
    "Samsun",
    "Şanlıurfa",
    "Siirt",
    "Sinop",
    "Şırnak",
    "Sivas",
    "Tekirdağ",
    "Tokat",
    "Trabzon",
    "Tunceli",
    "Uşak",
    "Van",
    "Yalova",
    "Yozgat",
    "Zonguldak",
  ];

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <Container>
      <Row>
        <Col md={3} sm={12}>
          <Menu />
        </Col>
        <Col className="experience-cont" md={9} sm={12}>
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="companyName">
                  <Form.Label className="exp-label">Kurum Adı*</Form.Label>
                  <Form.Control
                    placeholder="Kampüs 365"
                    className="exp-input"
                    type="text"
                    name="companyName"
                    value={currentExperience.companyName}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="position">
                  <Form.Label className="exp-label">Pozisyon*</Form.Label>
                  <Form.Control
                    placeholder="Front-End Developer"
                    className="exp-input"
                    type="text"
                    name="position"
                    value={currentExperience.position}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="sector">
                  <Form.Label className="exp-label">Sektör*</Form.Label>
                  <Form.Control
                    placeholder="Yazılım"
                    className="exp-input"
                    type="text"
                    name="sector"
                    value={currentExperience.sector}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="city">
                  <Form.Label className="exp-label">Şehir Seçiniz*</Form.Label>
                  <Form.Control
                    className="exp-input exp-select"
                    as="select"
                    name="city"
                    value={currentExperience.city}
                    onChange={handleChange}
                  >
                    {/* Şehir seçeneklerini buraya yerleştirin */}
                    <option value="">Şehir Seçiniz</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6} sm={12}>
                <Form.Group controlId="startDate">
                  <Form.Label className="exp-label">İş Başlangıcı*</Form.Label>
                  <DatePicker
                    locale="tr"
                    selected={currentExperience.startDate}
                    onChange={(date) => handleDateChange(date, "startDate")}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="gg.aa.yyyy"
                    className="exp-input exp-input-date"
                    isClearable
                  />
                </Form.Group>
              </Col>
              <Col md={6} sm={12}>
                <Form.Group controlId="endDate">
                  <Form.Label className="exp-label">İş Bitişi*</Form.Label>
                  <DatePicker
                    locale="tr"
                    selected={currentExperience.endDate}
                    onChange={(date) => handleDateChange(date, "endDate")}
                    dateFormat="dd.MM.yyyy"
                    placeholderText="gg.aa.yyyy"
                    className="exp-input exp-input-date"
                    isClearable
                    disabled={currentExperience.isCurrent}
                  />
                </Form.Group>
                <Form.Group controlId="isCurrent" className="exp-check ">
                  <Form.Check
                    className="exp-check-box"
                    type="checkbox"
                    name="isCurrent"
                    label="Çalışmaya Devam Ediyorum"
                    checked={currentExperience.isCurrent}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="description">
                  <Form.Label className="exp-label">İş Açıklaması</Form.Label>
                  <Form.Control
                    className="exp-input"
                    as="textarea"
                    rows={3}
                    name="description"
                    value={currentExperience.description}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button className="button-exp" type="submit">
              Kaydet
            </Button>
            {error && <Alert variant="danger">{error}</Alert>}
          </Form>

          <Row>
            <div className="experience-list">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-card">
                  <div className="experience-header">
                    <div className="experience-dates">
                      <img
                        src="https://tobeto.com/grade-date.svg"
                        alt="Date Icon"
                      />
                      &nbsp;
                      {exp.startDate
                        ? exp.startDate.toLocaleDateString("tr-TR")
                        : "???"}
                      -
                      {exp.isCurrent
                        ? "Şimdi"
                        : exp.endDate
                        ? exp.endDate.toLocaleDateString("tr-TR")
                        : "???"}
                    </div>
                  </div>
                  <Row>
                    <br></br>
                    <Col md={4} className="exp-sub list-left">
                      Kurum Adı
                      <br></br>
                      <div className="list-sub-style">{exp.companyName} </div>
                    </Col>
                    <Col md={3} className="exp-sub">
                      Pozisyon
                      <br></br>
                      <div className="list-sub-style">{exp.position}</div>
                    </Col>
                    <Col md={2} className="exp-sub experience-sector">
                      Sektör
                      <br></br>
                      <div className="list-sub-style">{exp.sector}</div>
                    </Col>
                    <Col md={2} className="exp-sub experience-city">
                      Şehir
                      <br></br>
                      <div className="list-sub-style">{exp.city}</div>
                    </Col>
                    <Col md={1} className="exp-sub experience-btn">
                      <Button
                        className="detail-button-exp"
                        variant="danger"
                        onClick={handleOpenModal}
                      >
                        <img src="https://tobeto.com/_next/static/media/alert-circle.bd20fb51.svg" />
                      </Button>
                      <br></br>
                      <Button
                        onClick={() => handleDeleteExperience(index)}
                        className="delete-button-exp"
                        variant="danger"
                      >
                        <FontAwesomeIcon icon={faTrashAlt} />
                      </Button>
                    </Col>
                  </Row>
                  <Modal show={showModal} onHide={handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>İş Açıklaması</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{exp.description}</Modal.Body>
                    <Modal.Footer>
                      <Button
                        variant="secondary"
                        className="button-exp"
                        onClick={handleCloseModal}
                      >
                        Kapat
                      </Button>
                    </Modal.Footer>
                  </Modal>{" "}
                </div>
              ))}
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
