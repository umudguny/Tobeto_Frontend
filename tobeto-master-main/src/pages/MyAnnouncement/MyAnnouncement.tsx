import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SortingDropdown from "../MyAnnouncement/SortingDropDown/SortingDropDown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/Modal/Modal";
import "./MyAnnouncement.css";
import { Announcement } from "../../models/responses/announcement/getAllAnnouncementResponse";
import announcementService from "../../services/announcementService";

function MyAnnouncement() {
  /*Verileri alma */
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAnnouncements = async () => {
    try {
      const response = await announcementService.getAll();
      setAnnouncements(response.data.items);
    } catch (error: any) {
      console.error("Veri çekme hatası:", error.message);
      setError("Veri çekme işlemi başarısız oldu");
    } finally {
      setLoading(false);
    }
  };
  /*------ */
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: any) => {
    console.log(searchTerm);
  };

  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [selectedInstitution, setSelectedInstitution] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const [showAnnouncements, setShowAnnouncements] = useState(true);

  const toggleAnnouncements = () => {
    setShowAnnouncements((prevState) => !prevState);
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata: {error}</div>;
  }

  return (
    <>
      <Row>
        <Col md={12}>
          <div className="edus-banner-card">
            <span>Duyurularım</span>
          </div>
        </Col>
      </Row>

      <Container>
        <Row className="filtre-row">
          <Col md={5}>
            {" "}
            <div className="search-bar">
              <input
                type="text"
                className="search-input"
                placeholder="Arama"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button onClick={handleSearch} className="search-button">
                🔍
              </button>
            </div>
          </Col>
          <Col md={2}>
            <div className="dropdown-container">
              <select
                className="custom-dropdown"
                value={selectedOption}
                onChange={handleChange}
                defaultValue=""
              >
                <option value="" disabled>
                  Tür
                </option>
                <option value="haber">Haber</option>
                <option value="duyuru">Duyuru</option>
              </select>
            </div>
          </Col>
          <Col md={2}>
            <div className="dropdown-container">
              <select
                value={selectedInstitution}
                onChange={handleChange}
                className="custom-dropdown"
              >
                <option value="">&nbsp;&nbsp;Organizasyon</option>
                <option value="institution1">İstanbul Kodluyor</option>
                {/* Diğer kurumlarınızı buraya ekleyin */}
              </select>
            </div>
          </Col>
          <Col md={2}>
            <div style={{ marginRight: "11px" }}>
              <SortingDropdown />
            </div>
          </Col>
          <Col md={1}>
            <>
              <div>
                {/* Görünürlüğü değiştirecek buton */}
                <button className="is-read-btn" onClick={toggleAnnouncements}>
                  {showAnnouncements ? (
                    <FontAwesomeIcon icon={faEyeSlash} />
                  ) : (
                    <FontAwesomeIcon icon={faEye} />
                  )}
                </button>

                {/* Duyuruların listesini koşullu olarak render et */}
                {showAnnouncements && (
                  <div className="announcements">
                    {/* Duyurularınizi burada mapleyerek listeleyin */}
                    {/* Örnek: */}
                    {/* {announcements.map(announcement => <div key={announcement.id}>{announcement.text}</div>)} */}
                  </div>
                )}
              </div>
            </>
          </Col>
        </Row>

        <Row>
          {announcements.map((announcement) => (
            <Col md={4} sm={12}>
              <div className="anc-card p-2">
                <div className="anc-title">
                  {/*{announcement.announcementTypeType}{" "}*/}
                  <span> Duyuru</span>
                  <span className="anc-ik">İstanbul Kodluyor</span>
                </div>
                <br></br>
                <span className="anc-card-check">
                  {announcement.announcementName}
                  <br></br>
                  <br></br>
                  <br></br>
                </span>
                <Row className="anc-date-row">
                  <Col className="anc-date">
                    <FontAwesomeIcon icon={faCalendar} />
                    {announcement.sendDate}
                  </Col>
                  <Col className="anc-link ">
                    {" "}
                    <button className="anc-link" onClick={openModal}>
                      Devamını Oku
                    </button>
                    {showModal && <Modal closeModal={closeModal} />}
                  </Col>
                </Row>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default MyAnnouncement;
