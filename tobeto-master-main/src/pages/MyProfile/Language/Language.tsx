import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Menu from "../Menu/Menu";
import { FaTrash } from "react-icons/fa";
import "./Language.css";

type LanguageInfo = {
  language: string;
  level: string;
};

export default function Language() {
  const [language, setLanguage] = useState<string>("");
  const [level, setLevel] = useState<string>("");
  const [languagesList, setLanguagesList] = useState<LanguageInfo[]>([]);

  const handleLanguageChange = (e: React.ChangeEvent<any>) => {
    setLanguage(e.target.value);
  };

  const handleLevelChange = (e: React.ChangeEvent<any>) => {
    setLevel(e.target.value);
  };

  const handleDelete = (index: number) => {
    setLanguagesList(languagesList.filter((_, i) => index !== i));
  };

  const handleSave = () => {
    if (language && level) {
      setLanguagesList([...languagesList, { language, level }]);
      setLanguage("");
      setLevel("");
    } else {
      alert("Lütfen dil ve seviye seçiniz.");
    }
  };

  return (
    <Container>
      <Row>
        <Col md={3} sm={12}>
          <Menu />
        </Col>
        <Col md={9} sm={12}>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="languageSelect dropdown-select">
                  <Form.Label></Form.Label>
                  <Form.Control
                    className="dropdown-select"
                    as="select"
                    value={language}
                    onChange={handleLanguageChange}
                  >
                    <option value="Dil Seçiniz">Dil Seçiniz</option>
                    <option value="english">İngilizce</option>
                    <option value="Almanca">Almanca</option>
                    <option value="Arapça">Arapça</option>
                    <option value="19">Çekçe</option>
                    <option value="Çekçe">Çince (Mandarin)</option>
                    <option value="Danca">Danca</option>
                    <option value="Fince">Fince</option>
                    <option value="Fransızca">Fransızca</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Hollandaca">Hollandaca</option>
                    <option value="İbranice">İbranice</option>
                    <option value="İspanyolca">İspanyolca</option>
                    <option value="İsveççe">İsveççe</option>
                    <option value="İtalyanca">İtalyanca</option>
                    <option value="Japonca">Japonca</option>
                    <option value="Korece">Korece</option>
                    <option value="Lehçe">Lehçe</option>
                    <option value="Macarca">Macarca</option>
                    <option value="Norveççe">Norveççe</option>
                    <option value="Portekizce">Portekizce</option>
                    <option value="Romence">Romence</option>
                    <option value="Rusça">Rusça</option>
                    <option value="Türkçe">Türkçe</option>
                    <option value="Vietnamca">Vietnamca</option>
                    <option value="Yunanca">Yunanca</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="levelSelect">
                  <Form.Label></Form.Label>
                  <Form.Control
                    className="dropdown-select"
                    as="select"
                    value={level}
                    onChange={handleLevelChange}
                  >
                    <option value="choose-opt">Seviye Seçiniz</option>
                    <option value="beginner">Başlangıç</option>
                    <option value="Temel Seviye ( A1 , A2)">
                      Temel Seviye ( A1 , A2)
                    </option>
                    <option value="Orta Seviye (B1 , B2)">
                      Orta Seviye (B1 , B2)
                    </option>
                    <option value="İleri Seviye (C1 , C2)">
                      İleri Seviye (C1 , C2)
                    </option>
                    <option value=" Anadil">Anadil</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className="lang-lvl-btn"
                  variant="primary"
                  onClick={handleSave}
                >
                  Kaydet
                </Button>
              </Col>
            </Row>
          </Form>
          <Row>
            <Col>
              {languagesList.map((item, index) => (
                <Col key={index} md={12} className="language-item">
                  <img
                    className="menu-icn"
                    src="https://tobeto.com/globe.svg"
                  ></img>
                  <span className="lang-lvls">
                    &nbsp;&nbsp;{item.language} - {item.level}
                  </span>
                  <FaTrash
                    className="lang-level-dlt"
                    onClick={() => handleDelete(index)}
                  />
                </Col>
              ))}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
