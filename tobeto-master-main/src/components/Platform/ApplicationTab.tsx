import React from "react";
import { Col, Row } from "react-bootstrap";

type Props = {};

export const ApplicationTab = (props: Props) => {
  return (
    <>
      <Row>
        <Col md={5} className="basvuru-card">
          <Row>
            <Col>
              İstanbul Kodluyor<br></br>Bilgilendirme<br></br>
              <span className="basvuru-card-check">
                <span className="p-checkmark">&#10003;</span> İstanbul Kodluyor
                Başvuru &nbsp;&nbsp;&nbsp;Formu onaylandı.<br></br>
                <span className="p-checkmark">&#10003;</span> İstanbul Kodluyor
                Belge Yükleme &nbsp;&nbsp;&nbsp;Formu onaylandı.
              </span>
            </Col>
            <Col className="text-right">
              <div className="status-indicator">
                Kabul
                Edildi&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};
