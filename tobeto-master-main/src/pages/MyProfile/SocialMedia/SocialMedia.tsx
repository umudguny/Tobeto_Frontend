import React, { useState } from "react";
import { Row, Col, Container, Button, Modal, Form } from "react-bootstrap";
import Menu from "../Menu/Menu";
import "./SocialMedia.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface Option {
  value: string;
  label: string;
  icon: any;
}

interface Entry {
  option: string;
  url: string;
  icon: string; // Entries'de de ikon URL'sini saklamak için ekliyorum.
}

export default function SocialMedia() {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [entries, setEntries] = useState<
    { option: any; url: string; icon: any }[]
  >([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [currentEntry, setCurrentEntry] = useState<Entry | null>(null);

  // Ana form için onChange handler'ları
  const handleOptionChange = (event: React.ChangeEvent<any>) => {
    setSelectedOption(event.target.value); // Ana formdaki seçenek state'ini güncelle
  };

  const handleUrlChange = (event: React.ChangeEvent<any>) => {
    setUrl(event.target.value); // Ana formdaki URL state'ini güncelle
  };

  // Modal form için onChange handler'ları
  const handleModalOptionChange = (event: React.ChangeEvent<any>) => {
    setCurrentEntry((current) =>
      current ? { ...current, option: event.target.value } : null
    );
  };

  const handleModalUrlChange = (event: React.ChangeEvent<any>) => {
    setCurrentEntry((current) =>
      current ? { ...current, url: event.target.value } : null
    );
  };

  const handleSave = () => {
    // Eğer zaten üç veya daha fazla giriş varsa, uyarı göster.
    if (entries.length >= 3) {
      alert("En fazla 3 adet medya seçimi yapılabilir.");
      return; // Daha fazla işlem yapmadan fonksiyonu sonlandır.
    }

    const selectedOptionData = options.find((o) => o.value === selectedOption);

    if (selectedOptionData && url) {
      // Yeni öğe ekle
      const newEntry: Entry = {
        option: selectedOptionData.label,
        url: url,
        icon: selectedOptionData.icon,
      };
      setEntries([...entries, newEntry]);
      // Seçimi ve URL'i temizle
      setSelectedOption("");
      setUrl("");
    } else {
      // Hata mesajı göster
      alert("Lütfen tüm alanları doğru doldurduğunuzdan emin olun.");
    }
  };

  const handleEdit = (index: number) => {
    // Düzenleme moduna geçildiğinde mevcut kaydı al
    const entryToEdit = entries[index];
    setCurrentEntry(entryToEdit);
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleDelete = (index: number) => {
    const newEntries = entries.filter((_, i) => i !== index);
    setEntries(newEntries);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setSelectedOption("");
    setUrl("");
  };

  const handleUpdate = () => {
    if (currentEntry && editingIndex !== null) {
      // entries listesinde düzenlenmiş kaydı güncelle
      const updatedEntries = entries.map((entry, index) =>
        index === editingIndex ? { ...currentEntry } : entry
      );
      setEntries(updatedEntries);
      // Düzenleme modunu ve modalı kapat
      setEditingIndex(null);
      setCurrentEntry(null);
      setShowModal(false);
    }
  };

  const handleClose = () => {
    setShowModal(false); // Modal'ı gizle
  };

  const options: Option[] = [
    {
      value: "İnstagram",
      label: "İnstagram",
      icon: "https://tobeto.com/instagram-social.svg",
    },
    {
      value: "twitter",
      label: "Twitter",
      icon: "https://tobeto.com/twitter-soical.svg",
    },
    {
      value: "LinkedIn",
      label: "LinkedIn",
      icon: "https://tobeto.com/linkedin-social.svg",
    },
    {
      value: "Behance",
      label: "Behance",
      icon: "https://tobeto.com/behance-social.svg",
    },
    {
      value: "Dribble",
      label: "Dribble",
      icon: "https://tobeto.com/dribble-social.svg",
    },
    {
      value: "Github",
      label: "Github",
      icon: "https://tobeto.com/github-social.svg",
    },
  ];

  return (
    <>
      <Container>
        <Row>
          <Col md={3} sm={12}>
            <Menu />
          </Col>
          <Col md={9} sm={12}>
            <Form>
              <Row>
                <Col md={4} sm={12}>
                  <Form.Group
                    controlId="formBasicSelect"
                    className="form-basic-select"
                  >
                    <div className="select-wrapper">
                      <Form.Label></Form.Label>
                      <Form.Control
                        as="select"
                        value={selectedOption}
                        onChange={handleOptionChange}
                        required
                      >
                        <option value="" disabled>
                          Seçiniz*
                        </option>
                        {options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </Form.Control>
                    </div>
                  </Form.Group>
                </Col>
                <Col md={8} sm={12}>
                  <Form.Group
                    controlId="formBasicURL"
                    className="form-basic-url"
                  >
                    <Form.Label></Form.Label>
                    <Form.Control
                      type="url"
                      placeholder="https://"
                      value={url}
                      onChange={handleUrlChange}
                    />
                  </Form.Group>
                </Col>
                <Button
                  variant="primary"
                  onClick={handleSave}
                  className="save-button"
                >
                  Kaydet
                </Button>
              </Row>
              <Row className="">
                {entries.map((entry, index) => (
                  <Col key={index} md={12} className="mb-2">
                    <div className="saved-entry ">
                      <div>
                        <strong>{entry.option}</strong>
                        <br />
                        <img src={entry.icon} alt={entry.option} />
                        &nbsp;- {entry.url}
                      </div>
                      <div className="sv-upt-btn ">
                        <>
                          <Button
                            className="edit-upt-btn"
                            onClick={() => handleEdit(index)}
                          >
                            <FontAwesomeIcon icon={faEdit} />
                          </Button>
                          <Button
                            className="dlt-upt-btn"
                            onClick={() => handleDelete(index)}
                          >
                            <img
                              title=""
                              src="https://tobeto.com/trash.svg"
                              alt="Sil"
                            />
                          </Button>
                        </>
                      </div>
                    </div>
                  </Col>
                ))}
                {entries.length >= 3 && (
                  <div className="alert alert-warning alrt" role="alert">
                    En fazla 3 adet medya seçimi yapılabilir.
                  </div>
                )}
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Medya Hesabı Güncelleme</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Platform</Form.Label>
              <Form.Control
                as="select"
                value={currentEntry?.option || ""}
                onChange={handleModalOptionChange}
              >
                {/* Options map */}
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Form.Control>

              <Form.Control
                type="url"
                value={currentEntry?.url || ""}
                onChange={handleModalUrlChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Kapat
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Güncelle
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
