import React, { useState, ChangeEvent, FormEvent } from "react";
import "../Connection/Connection.css";
import { Col, Container, Row } from "react-bootstrap";
import { ConnectionFormData } from "./ConnectionInterface";
import ReCAPTCHA from "react-google-recaptcha";

type Props = {};

function Connection() {
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const handleRecaptcha = (value: string | null) => {
    setRecaptchaValue(value);
  };

  const [formData, setFormData] = useState<ConnectionFormData>({
    Name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // TODO:
    console.log(formData);
  };

  return (
    <div className="all">
      <Col md={11} className="container-cn">
        <div className="row">
          <Col md={5} sm={12} xs={12} className=" connection-left">
            <div>
              <button className="top-span">İletişime Geçin</button>
            </div>
            <br />
            <h2>İletişim Bilgileri</h2>
            <div className="table-cn">
              <table>
                <tr>
                  <td className="td1">Firma Adı:</td>
                  <td className="td2">TOBETO</td>
                </tr>
                <tr>
                  <td className="td1">Firma Unvan:</td>
                  <td className="td2">
                    Avez Elektronik İletişim Eğitim Danışmanlığı Ticaret Anonim
                    Şirketi
                  </td>
                </tr>
                <tr>
                  <td className="td1">Vergi Dairesi:</td>
                  <td className="td2">Beykoz</td>
                </tr>
                <tr>
                  <td className="td1">Vergi No:</td>
                  <td className="td2">1050250859</td>
                </tr>
                <tr>
                  <td className="td1">Telefon:</td>
                  <td className="td2">(0216) 331 48 00</td>
                </tr>

                <tr>
                  <td className="td1">E-Posta:</td>
                  <td className="td2">info@tobeto.com</td>
                </tr>
                <tr>
                  <td className="td1">Adres:</td>
                  <td className="td2">
                    Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza
                    B Blok Kat:3 34805, Beykoz/İstanbul
                  </td>
                </tr>
              </table>
            </div>
            <Row>
              <table className="table-cn-2">
                <td className="table-cn2-td1">
                  <tr>İstanbul Kodluyor için Telefon:</tr>
                  <tr>İstanbul Kodluyor için E-Posta:</tr>
                </td>
                <td className="table-cn2-td2">
                  <tr>(0216) 969 22 40</tr>
                  <tr>istanbulkodluyor@tobeto.com</tr>
                </td>
              </table>
            </Row>
          </Col>

          <Col md={5} sm={12} xs={12} className="connection-right">
            <div>
              <button className="top-span">Mesaj Bırakın</button>
            </div>
            <br />
            <h2>İletişim Formu</h2>
            <form action="example.com" method="post">
              <form className="cn-form" onSubmit={handleSubmit}>
                <br />
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="    Name Surname"
                  value={formData.Name}
                  onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="email"></label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="    E-Mail"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <br />
                <br />
                <label htmlFor="message"></label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="    Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                />
                <br />
                <br />
                <div className="kvkk">
                  Yukarıdaki form ile toplanan kişisel verileriniz Enocta
                  tarafından talebinize dair işlemlerin yerine getirilmesi ve
                  paylaşmış olduğunuz iletişim adresi üzerinden tanıtım, bülten
                  ve pazarlama içerikleri gönderilmesi amacıyla{" "}
                  <span>Aydınlatma Metni </span>
                  çerçevesinde işlenebilecektir.
                </div>
                <br />
                <ReCAPTCHA
                  className="recaptcha"
                  sitekey="your_site_key" // Gerçek site key'inizi buraya girin
                  onChange={handleRecaptcha}
                />
                <br />
                <div className="btn-cn-dv">
                  <button type="submit" className="btn-cn">
                    Gönder
                  </button>
                </div>
              </form>
            </form>
          </Col>
        </div>
      </Col>
    </div>
  );
}
export default Connection;
