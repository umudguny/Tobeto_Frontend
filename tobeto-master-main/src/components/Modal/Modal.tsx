import React from "react";
import "./Modal.css";
import { Row } from "react-bootstrap";

const Modal = ({ closeModal }: any) => {
  return (
    <div className="modal-backdrop">
      <div className="anc-modal">
        <Row className="modal-header-row">
          <h4>Ocak Ayı Tercih Formu Bilgilendirmesi</h4>
          <button className="close-btn" onClick={closeModal}>
            ×&nbsp;&nbsp;
          </button>
        </Row>
        <p>
          Tercih formunu bekleyen adaylarımızın discorddaki duyuruyu takip
          etmesini rica ederiz.
        </p>
        <p>
          {" "}
          Formu ulaşanların bugün saat 18.00'e kadar tercih formunu göndermeleri
          gerekmektedir.{" "}
        </p>
        <p>
          {" "}
          Form ulaşmayan kişiler discord üzerinden gerekli bilgilendirmeyi ekibe
          ulaştırabilir.{" "}
        </p>
        <p> Sevgiler, </p>
      </div>
    </div>
  );
};

export default Modal;
