import { AsyncCourse } from "../../models/responses/asyncCourse/getAllAsyncCourseResponse";
import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import SortingDropdown from "./SortingDropDown/SortingDropDown";
import { Link, NavLink } from "react-router-dom";
import "./MyCourse.css";
import asyncCourseService from "../../services/asyncCourseService";

function MyCourse() {
  const [asyncCourses, setAsyncCourses] = useState<AsyncCourse[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedInstitution, setSelectedInstitution] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("my-all-courses");

  const fetchAsyncCourses = async () => {
    try {
      const response = await asyncCourseService.getAll();
      setAsyncCourses(response.data.items);
    } catch (error: any) {
      console.error("Veri çekme hatası:", error.message);
      setError("Veri çekme işlemi başarısız oldu");
    } finally {
      setLoading(false);
    }
  };
  const handleSearch = () => {
    console.log(searchTerm);
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedInstitution(event.target.value);
  };

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    fetchAsyncCourses();
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
            <span>Eğitimlerim</span>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
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
        <Col md={3}>
          <div className="dropdown-container">
            <select
              value={selectedInstitution}
              onChange={handleChange}
              className="custom-dropdown"
            >
              <option value="">Kurum Seçiniz</option>
              <option value="institution1">İstanbul Kodluyor</option>
              {/* Diğer kurumlarınızı buraya ekleyin */}
            </select>
          </div>
        </Col>
        <Col md={3}>
          <div style={{ marginRight: "11px" }}>
            <SortingDropdown />
          </div>
        </Col>
      </Row>
      <Row className="courses-tabs">
        <div>
          <ul className="c-tab-list">
            <li
              className={`c-tab-list-item ${
                activeTab === "my-all-courses" ? "active" : ""
              }`}
              onClick={() => handleTabClick("my-all-courses")}
            >
              Tüm&nbsp;Eğitimlerim
            </li>
            <li
              className={`c-tab-list-item ${
                activeTab === "cont-courses" ? "active" : ""
              }`}
              onClick={() => handleTabClick("cont-courses")}
            >
              Devam&nbsp;Ettiklerim
            </li>
            <li
              className={`c-tab-list-item ${
                activeTab === "completed-edu" ? "active" : ""
              }`}
              onClick={() => handleTabClick("completed-edu")}
            >
              Tamamladıklarım
            </li>
          </ul>
          <div className="c-tab-content">
            {activeTab === "my-all-courses" && (
              <div className="tab-my-all-courses">
                <div className="edu-area">
                  <Row key="id">
                    {asyncCourses.map((course, index) => (
                      <Col key={index} lg={3} md={6} xs={12}>
                        <Link
                          //bu yönlendirmeye bakılacak
                          to={`/activity/${course.id}`} //kurs id gönderilecek id'ye göre
                          className="edu-card-link "
                        >
                          <div className="edu-card ">
                            <div className="edu-card-image">
                              <img
                                src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                                alt={course.name}
                              ></img>
                            </div>
                            <div className="edu-card-body">
                              <h5 className="edu-card-title">{course.name}</h5>
                              <p className="edu-card-date">
                                {new Date(
                                  course.createdDate
                                ).toLocaleDateString("tr-TR")}{" "}
                                -
                                {new Date(
                                  course.createdDate
                                ).toLocaleTimeString("tr-TR", {
                                  hour: "2-digit",
                                  minute: "2-digit",
                                })}
                              </p>
                              <button className="edu-card-button">
                                Eğitime Git
                              </button>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            )}
            {activeTab === "cont-courses" && (
              <div className="tab-cont-courses">
                <div className="edu-area">
                  <Row key="id">
                    {asyncCourses.map((course) => (
                      <Col lg={3} md={6} xs={12}>
                        <Link
                          to={`/activity/${course.id}`}
                          className="edu-card-link"
                        >
                          <div className="edu-card ">
                            <div className="edu-card-image">
                              <img
                                src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                                alt={course.name}
                              ></img>
                            </div>
                            <div className="edu-card-body">
                              <h5 className="edu-card-title">{course.name}</h5>
                              <p className="edu-card-date"></p>
                              <button className="edu-card-button">
                                Eğitime Git
                              </button>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            )}
            {activeTab === "completed-edu" && (
              <div className="tab-completed-edu">
                <div className="edu-area">
                  <Row key="id">
                    {asyncCourses.map((course) => (
                      <Col lg={3} md={6} xs={12}>
                        <Link
                          to={`/activity/${course.id}`}
                          className="edu-card-link "
                        >
                          <div className="edu-card ">
                            <div className="edu-card-image">
                              <img
                                src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                                alt={course.name}
                              ></img>
                            </div>
                            <div className="edu-card-body">
                              <h5 className="edu-card-title">{course.name}</h5>
                              <p className="edu-card-date"></p>
                              <button className="edu-card-button">
                                Eğitime Git
                              </button>
                            </div>
                          </div>
                        </Link>
                      </Col>
                    ))}
                  </Row>
                </div>
              </div>
            )}
          </div>
        </div>
      </Row>
    </>
  );
}

export default MyCourse;
