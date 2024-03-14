import React from "react";
import "./MyProfile.css";
import { Row, Col, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ActivityMap from "../../components/ActivityMap/ActivityMap";
import EducationExperienceTimeline from "../../components/EducationExperienceTimeline/EducationExperienceTimeline";

type ActivityLevel = 0 | 1 | 2 | 3 | 4;

export default function MyProfile() {
  const getActivityColor = (activityLevel: ActivityLevel): string => {
    switch (activityLevel) {
      case 0:
        return "color-none";
      case 1:
        return "color-low";
      case 2:
        return "color-medium";
      case 3:
        return "color-high";
      case 4:
        return "color-very-high";
      default:
        return "color-none";
    }
  };

  const totalDots = 7 * 52;
  const activityData: ActivityLevel[] = Array(totalDots)
    .fill(0)
    .map((_, index) => {
      // Burada her bir noktanın aktivite seviyesini belirleyebilirsiniz.
      // Örnek olarak, tüm noktaları 0 aktivite seviyesi ile başlatıyoruz.
      // Gerçek uygulamanızda, bu veriyi kullanıcı aktivitelerine göre ayarlayacaksınız.
      return Math.floor(Math.random() * 5) as ActivityLevel; // 0-4 arası rastgele bir aktivite seviyesi
    });

  const educationExperienceItems = [
    {
      id: 1,
      dateRange: "2010/2016",
      institution: "İstanbul Üniversitesi",
      description: "Bilişim ve öğretim teknolojileri eğitimi",
      // ...diğer özellikler...
    },
  ];

  return (
    <div className="my-profile">
      <Container className="my-profile-con">
        <div className="edit-btn">
        <Link to="/my-profile/my-info">
          <img src="https://tobeto.com/edit2.svg"></img>
        </Link>
        </div>
        <Row>
          <Col md={4} sm={12}>
            <Row className=" sum-info-con">
              <Col className="sum-info ">
                <Row>
                  <div className="profile-img">
                    <img
                      className="p-img"
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimages.19a45d39.png&w=128&q=75"
                    ></img>
                  </div>
                  <div className="p-info-sum">
                    <Row className="p-info-row ">
                      <Col md={2} className="p-info-c1">
                        <img src="https://tobeto.com/cv-name.svg"></img>
                      </Col>
                      <Col md={10} className=" p-info-c2">
                        <Row className="p-info-r1">Ad Soyad</Row>
                        <Row className="p-info-r2">Name Surname</Row>
                      </Col>
                    </Row>
                    <Row className="p-info-row ">
                      <Col md={2} className=" p-info-c1">
                        <img src="https://tobeto.com/cv-date.svg"></img>
                      </Col>
                      <Col md={10} className="p-info-c2">
                        <Row className="p-info-r1">Doğum Tarihi</Row>
                        <Row className="p-info-r2">15.02.1992</Row>
                      </Col>
                    </Row>
                    <Row className="p-info-row">
                      <Col md={2} className=" p-info-c1">
                        <img src="https://tobeto.com/cv-mail.svg"></img>
                      </Col>
                      <Col md={10} className=" p-info-c2">
                        <Row className="p-info-r1">E-Posta Adresi</Row>
                        <Row className="p-info-r2">abc@hotmail.com</Row>
                      </Col>
                    </Row>
                    <Row className="p-info-row">
                      <Col md={2} className="p-info-c1">
                        <img src="https://tobeto.com/cv-phone.svg"></img>
                      </Col>
                      <Col md={10} className=" p-info-c2">
                        <Row className="p-info-r1">Telefon Numarası</Row>
                        <Row className="p-info-r2">165444376</Row>
                      </Col>
                    </Row>
                  </div>
                </Row>
              </Col>
            </Row>
            <Row className="about-me">
              <div>
                <Row className="about-me-r1">Hakkımda</Row>
                <Row className="about-me-r2">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Sequi recusandae ut perspiciatis rem exercitationem, similique
                  rerum est dolor cumque ex? Nostrum nihil atque soluta
                  veritatis a fugiat deleniti odit, porro culpa officia
                  perspiciatis maxime sint quisquam non minima consequatur
                </Row>
              </div>
            </Row>
            <Row className=" my-competence-sum">
              <div>
                <Row className="about-me-r1">Yetkinliklerim</Row>
                <Row className="cpt-rows"> C#</Row>
                <Row className="cpt-rows">C#</Row>
                <Row className="cpt-rows">C#</Row>
              </div>
            </Row>
            <Row className=" my-lang">
              <div>
                <Row className="about-me-r1">Yabancı Dillerim</Row>
                <Row className="my-lang-rows">
                  <Col md={2}>
                    <img
                      className="l-img"
                      src="https://tobeto.com/globe.svg"
                    ></img>
                  </Col>
                  <Col md={10} className="">
                    <Row>İngilizce</Row>
                    <Row>İleri Seviye (C1 , C2)</Row>
                  </Col>
                </Row>
              </div>
            </Row>
            <Row className=" my-cert">
              <div>
                <Row className="about-me-r1">Sertifikalarım</Row>
                <Row className="about-me-r2">
                  Henüz bir sertifika yüklemedin.
                </Row>
              </div>
            </Row>
            <Row className=" my-social-media">
              <div>
                <Row className="about-me-r1">Medya Hesaplarım</Row>
                <Row className="about-me-r2">Henüz bir hesap eklemedin.</Row>
              </div>
            </Row>
          </Col>
          <Col md={8} sm={12}>
            <Row className="right-areas" style={{ marginTop: 0 }}>
              <div>
                <Row className="about-me-r1">Tobeto İşte Başarı Modelim</Row>
                <Row className="r-r2">
                  İşte Başarı Modeli değerlendirmesiyle yetkinliklerini ölç
                </Row>
                <Row className="profile-btn-con">
                  <Button className="profile-btn">Başla</Button>
                </Row>
              </div>
            </Row>
            <Row className="right-areas">
              <div>
                <Row className="about-me-r1">Tobeto Seviye Testlerim</Row>
                <Row className="exm-sum">
                  <Col md={8}>
                    <Row>Herkes için Kodlama 2B Değerlendirme Sınavı</Row>
                    <Row>76.00</Row>
                  </Col>
                  <Col md={4} style={{ fontSize: 13, alignItems: "center" }}>
                    <br />
                    16-10-2023
                  </Col>
                </Row>
              </div>
            </Row>
            <Row className="right-areas">
              <div>
                <Row className="about-me-r1">Yetkinlik Rozetlerim</Row>
                <Row className="my-badges">
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>
                  <div className="my-badge"></div>

                </Row>
              </div>
            </Row>
            <Row className="right-areas">
              <div>
                <Row className="about-me-r1">Aktivite Haritam</Row>
                <Row className="actv-map">
                  <Row className="actv-map">
                    <ActivityMap activityData={activityData} />
                  </Row>
                </Row>
              </div>
            </Row>
            <Row className="right-areas">
              <div>
                <Row className="about-me-r1">
                  Eğitim Hayatım ve Deneyimlerim
                </Row>
                <Row className="edu-exp-line">
                  <div className="education-experience-section">
                    <EducationExperienceTimeline
                      items={educationExperienceItems}
                    />
                  </div>
                </Row>
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
