import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  ListGroup,
  Form,
  InputGroup,
} from "react-bootstrap";
import Menu from "../Menu/Menu";
import "./Competence.css";

type Skill = {
  id: number;
  name: string;
};

export default function Competence() {
  const skillOptions = [
    "Muhasebe",
    "javascript",
    "Aktif Öğrenme",
    "Aktif Dinleme",
    "Yönetim ve İdare",
    "Reklam",
    "Algoritmalar",
    "Android (İşletim Sistemi)",
    "Apache Ambari",
    "Uygulama Mağazası (IOS)",
    "Apple Sağlık Kiti",
    "Apple iOS",
    "Apple Xcode",
    "Uygulamalı Makine Öğrenimi",
    "Back End (Yazılım Mühendisliği)",
    "Büyük Veri",
    "Blok Zinciri",
    "Bootstrap (Front-End Framework)",
    "Marka Yönetimi",
    "İletişim",
    "Pazarlama",
    "Building and Construction", 
  ];

  const [skills, setSkills] = useState<Skill[]>([]);
  const [newSkill, setNewSkill] = useState("");

  const [selectedSkill, setSelectedSkill] = useState("");

  const addSkill = () => {
    const skillName = skillOptions.find((option) => option === selectedSkill);
    if (skillName && !skills.some((skill) => skill.name === skillName)) {
      const newId = skills.length > 0 ? skills[skills.length - 1].id + 1 : 1;
      setSkills([...skills, { id: newId, name: skillName }]);
    }
  };

  const removeSkill = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id));
  };

  return (
    <Container>
      <Row>
        <Col md={3} sm={12}>
          <Menu />
        </Col>
        <Col md={9} sm={12}>
          <Form>
            <Form.Group controlId="skillSelect">
              <Form.Label className="skill-select">Yetkinlik</Form.Label>
              <Form.Control
                as="select"
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value)}
              >
                {skillOptions.map((skill, index) => (
                  <option key={index} value={skill}>
                    {skill}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button className="add-btn-skill" onClick={addSkill}>
              Kaydet
            </Button>
          </Form>
          <ListGroup>
            {skills.map((skill) => (
              <ListGroup.Item className="skilss" key={skill.id}>
                {skill.name}
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => removeSkill(skill.id)}
                >
                  Sil
                </Button>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
