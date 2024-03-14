import React, { useState } from "react";
import "./Catalog.css";
import { Card, Col, ListGroup, Row, Button } from "react-bootstrap";
import { BsClock, BsPerson, BsPlayCircleFill } from "react-icons/bs";

export default function Catalog() {
  const menuItems = [
    "Kategori",
    "Eğitimler",
    "Seviye",
    "Konu",
    "Yazılım Dili",
    "Eğitmen",
  ];
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleMenuClick = (menu: any) => {
    setSelectedMenu(selectedMenu === menu ? null : menu);
  };

  const [activeMenu, setActiveMenu] = useState(null); 
  const [selectedOptions, setSelectedOptions] = useState({});
  const [searchTerms, setSearchTerms] = useState({}); 

  const toggleDropdown = (menu: any) => {
    if (activeMenu === menu) {
      setActiveMenu(null); 
    } else {
      setActiveMenu(menu);
    }
  };

  const handleRadioChange = (menu: any, value: any) => {
    setSelectedOptions({ ...selectedOptions, [menu]: value });
  };

  const handleSearchChange = (menu: any, value: any) => {
    setSearchTerms({ ...searchTerms, [menu]: value });
  };
  return (
    <Row className="mt-3">
      {/* katalog sol menü */}
      <Col lg={3} md={12}>
        <div className="ct-dropdown-container p-3 px">
          <Row className="filtre-menu-title">Filtrele</Row>
          {[
            "Kategori",
            "Eğitimler",
            "Seviye",
            "Konu",
            "Yazılım Dili",
            "Eğitmen",
          ].map((item) => (
            <div key={item} className="ct-dropdown">
              <div
                className="ct-dropdown-header"
                onClick={() => toggleDropdown(item)}
              >
                {item}
                <span
                  className={`arrow ${activeMenu === item ? "open" : ""}`}
                ></span>
              </div>
              {activeMenu === item && (
                <div className="ct-dropdown-body">
                  <div className="ct-dropdown-search">
                    <input
                      type="text"
                      placeholder="Arama"
                      value={searchTerms[item] || ""}
                      onChange={(e) => handleSearchChange(item, e.target.value)}
                    />
                  </div>
                  {item === "Kategori" && (
                    <>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="ücretli"
                          checked={selectedOptions[item] === "ücretli"}
                          onChange={() => handleRadioChange(item, "ücretli")}
                        />
                        <span>Ücretli Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="ücretsiz"
                          checked={selectedOptions[item] === "ücretsiz"}
                          onChange={() => handleRadioChange(item, "ücretsiz")}
                        />
                        <span>Ücretsiz Eğitimler</span>
                      </label>
                    </>
                  )}
                  {item === "Eğitimler" && (
                    <>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="digital"
                          checked={selectedOptions[item] === "digital"}
                          onChange={() => handleRadioChange(item, "digital")}
                        />
                        <span>Dijital Gelişim</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="pro"
                          checked={selectedOptions[item] === "pro"}
                          onChange={() => handleRadioChange(item, "pro")}
                        />
                        <span>Profesyonel Gelişim</span>
                      </label>
                    </>
                  )}
                  {item === "Seviye" && (
                    <>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Seviyeler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="begin"
                          checked={selectedOptions[item] === "begin"}
                          onChange={() => handleRadioChange(item, "begin")}
                        />
                        <span>Başlangıç</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="middle"
                          checked={selectedOptions[item] === "middle"}
                          onChange={() => handleRadioChange(item, "middle")}
                        />
                        <span>Orta</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="advc"
                          checked={selectedOptions[item] === "advc"}
                          onChange={() => handleRadioChange(item, "advc")}
                        />
                        <span>İleri</span>
                      </label>
                    </>
                  )}
                  {item === "Konu" && (
                    <>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="ücretli"
                          checked={selectedOptions[item] === "ücretli"}
                          onChange={() => handleRadioChange(item, "ücretli")}
                        />
                        <span>Ücretli Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="ücretsiz"
                          checked={selectedOptions[item] === "ücretsiz"}
                          onChange={() => handleRadioChange(item, "ücretsiz")}
                        />
                        <span>Ücretsiz Eğitimler</span>
                      </label>
                    </>
                  )}
                  {item === "Yazılım Dili" && (
                    <>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="aspnet"
                          checked={selectedOptions[item] === "aspnet"}
                          onChange={() => handleRadioChange(item, "aspnet")}
                        />
                        <span>ASPNET</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="Bootsrap"
                          checked={selectedOptions[item] === "Bootsrap"}
                          onChange={() => handleRadioChange(item, "Bootsrap")}
                        />
                        <span>Bootsrap</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="SASS"
                          checked={selectedOptions[item] === "SASS"}
                          onChange={() => handleRadioChange(item, "SASS")}
                        />
                        <span>SASS</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="JavaScript"
                          checked={selectedOptions[item] === "JavaScript"}
                          onChange={() => handleRadioChange(item, "JavaScript")}
                        />
                        <span>JavaScript</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="JQuery"
                          checked={selectedOptions[item] === "JQuery"}
                          onChange={() => handleRadioChange(item, "JQuery")}
                        />
                        <span>JQuery</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="AJAX"
                          checked={selectedOptions[item] === "AJAX"}
                          onChange={() => handleRadioChange(item, "AJAX")}
                        />
                        <span>AJAX</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="SQL"
                          checked={selectedOptions[item] === "SQL"}
                          onChange={() => handleRadioChange(item, "SQL")}
                        />
                        <span>SQL</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="C#"
                          checked={selectedOptions[item] === "C#"}
                          onChange={() => handleRadioChange(item, "C#")}
                        />
                        <span>C#</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="HTML"
                          checked={selectedOptions[item] === "HTML"}
                          onChange={() => handleRadioChange(item, "HTML")}
                        />
                        <span>HTML</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="CSS"
                          checked={selectedOptions[item] === "CSS"}
                          onChange={() => handleRadioChange(item, "CSS")}
                        />
                        <span>CSS</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="React"
                          checked={selectedOptions[item] === "React"}
                          onChange={() => handleRadioChange(item, "React")}
                        />
                        <span>React</span>
                      </label>
                    </>
                  )}
                  {item === "Eğitmen" && (
                    <>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitmenler</span>
                      </label>

                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="Eğitmen Dojo"
                          checked={selectedOptions[item] === "Eğitmen Dojo"}
                          onChange={() =>
                            handleRadioChange(item, "Eğitmen Dojo")
                          }
                        />
                        <span>Eğitmen Dojo</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="Roiva Eğitmen"
                          checked={selectedOptions[item] === "Roiva Eğitmen"}
                          onChange={() =>
                            handleRadioChange(item, "Roiva Eğitmen")
                          }
                        />
                        <span>Roiva Eğitmen</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="Veli Bahçeci"
                          checked={selectedOptions[item] === "Veli Bahçeci"}
                          onChange={() =>
                            handleRadioChange(item, "Veli Bahçeci")
                          }
                        />
                        <span>Veli Bahçeci</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="tüm"
                          checked={selectedOptions[item] === "tüm"}
                          onChange={() => handleRadioChange(item, "tüm")}
                        />
                        <span>Tüm Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="ücretli"
                          checked={selectedOptions[item] === "ücretli"}
                          onChange={() => handleRadioChange(item, "ücretli")}
                        />
                        <span>Ücretli Eğitimler</span>
                      </label>
                      <label className="ct-dropdown-item">
                        <input
                          type="radio"
                          name={item}
                          value="ücretsiz"
                          checked={selectedOptions[item] === "ücretsiz"}
                          onChange={() => handleRadioChange(item, "ücretsiz")}
                        />
                        <span>Ücretsiz Eğitimler</span>
                      </label>
                    </>
                  )}

                  {/* Diğer menüler için de benzer yapıyı kurabilirsiniz. */}
                </div>
              )}
            </div>
          ))}
        </div>
      </Col>
      {/* katalog sol menü bitiş */}

      {/* sağdaki eğitim listesi */}
      <Col lg={7} md={12}>
        <Row>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card className="ct-card"
              style={{
                width: "18rem",
                cursor: "pointer",
                borderRadius: "15px",
                position: "relative",
              }}
            >
              <Card.Img
                variant="top"
                src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg"
                style={{ borderRadius: "15px" }}
              />
              <BsPlayCircleFill
                color="#8014E4"
                size={30}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />

              <Card.Body
                style={{
                  height: "100px",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  backgroundColor: "rgba(65,65,65.5)",
                  backdropFilter: "blur(21.5px)",
                  color: "white",
                  padding: "15px",
                }}
              >
                <Row>
                  <Col
                    lg={12}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text
                      style={{
                        marginLeft: "5px",
                        fontWeight: "100",
                        fontSize: "12px",
                      }}
                    >
                      <BsPerson />
                      Gürkan İlişen - <BsClock />
                      4s 14dk
                    </Card.Text>
                  </Col>
                  <Col lg={12}>
                    <Card.Title
                      style={{ marginTop: "10px", fontWeight: "bold" }}
                    >
                      Dinle, Anla, İfade Et: Etkili İletişim Gelişim Yolculuğu
                    </Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                borderRadius: "15px",
                position: "relative",
              }}
            >
              <Card.Img
                variant="top"
                src="https://tobeto.s3.cloud.ngn.com.tr/ENK_365670_08eb2bab1a.jpg"
                style={{ borderRadius: "15px" }}
              />
              <BsPlayCircleFill
                color="#8014E4"
                size={30}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />

              <Card.Body
                style={{
                  height: "100px",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  backgroundColor: "rgba(65,65,65.5)",
                  backdropFilter: "blur(21.5px)",
                  color: "white",
                  padding: "15px",
                }}
              >
                <Row>
                  <Col
                    lg={12}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text
                      style={{
                        marginLeft: "5px",
                        fontWeight: "100",
                        fontSize: "12px",
                      }}
                    >
                      <BsPerson />
                      Gürkan İlişen - <BsClock />
                      1s 14dk
                    </Card.Text>
                  </Col>
                  <Col lg={12}>
                    <Card.Title
                      style={{ marginTop: "10px", fontWeight: "bold" }}
                    >
                      Sürdürülebilir Bir Dünya için Bireysel Farkındalık
                    </Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={4} md={6} sm={12} className="mb-4">
            <Card
              style={{
                width: "18rem",
                cursor: "pointer",
                borderRadius: "15px",
                position: "relative",
              }}
            >
              <Card.Img
                variant="top"
                src="https://tobeto.s3.cloud.ngn.com.tr/ENK_36573_a8546fa0ff.jpg"
                style={{ borderRadius: "15px" }}
              />
              <BsPlayCircleFill
                color="#8014E4"
                size={30}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  cursor: "pointer",
                }}
              />

              <Card.Body
                style={{
                  height: "100px",
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  width: "100%",
                  backgroundColor: "rgba(65,65,65.5)",
                  backdropFilter: "blur(21.5px)",
                  color: "white",
                  padding: "15px",
                }}
              >
                <Row>
                  <Col
                    lg={12}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Card.Text
                      style={{
                        marginLeft: "5px",
                        fontWeight: "100",
                        fontSize: "12px",
                      }}
                    >
                      <BsPerson />
                      Gürkan İlişen - <BsClock />
                      4s 14dk
                    </Card.Text>
                  </Col>
                  <Col lg={12}>
                    <Card.Title
                      style={{ marginTop: "10px", fontWeight: "bold" }}
                    >
                      Dinle, Anla, İfade Et: Etkili İletişim Gelişim Yolculuğu
                    </Card.Title>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
      {/* sağdaki eğitim listesi bitiş */}
    </Row>
  );
}
