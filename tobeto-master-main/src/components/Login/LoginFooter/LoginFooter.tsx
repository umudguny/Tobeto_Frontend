import React from "react";
import "./LoginFooter.css";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function LoginFooter() {
  return (
    <footer className="lf-footer text-center border-top">
      <div className="row padding-tb-40 margin-row">
        <div className="col-12">
          <div className="row">
            <div className="col-6 col-md-2 text-left padding-footer-column">
              <h5>Site Haritası</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/about">Hakkımızda</a>
                </li>
                <li>
                  <a href="/bireyler-icin">Bireyler için</a>
                </li>
                <li>
                  <a href="/kurumlar-icin">Kurumlar için</a>
                </li>
                <li>
                  <a href="/kurumsal-kimlik">Kurumsal Kimlik</a>
                </li>
                <li>
                  <a href="/sss">S.S.S.</a>
                </li>
                <li>
                  <a href="/iletisim">İletişim</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 text-left padding-footer-column">
              <h5>Kaynaklar</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/uyelik-sozlesmesi">
                    Üyelik Sözleşmesi ve Kullanım Koşulları
                  </a>
                </li>
                <li>
                  <a href="/kvkk-aydinlatma-metni">KVKK Aydınlatma Metni</a>
                </li>
                <li>
                  <a href="/ilgili-kisi-basvuru-formu">
                    İlgili Kişi Başvuru Formu
                  </a>
                </li>
                <li>
                  <a href="/cerez-politikasi">Çerez Politikası</a>
                </li>
                <li>
                  <a href="/cayma-formu">Çayma Formu</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-3 text-left padding-footer-column">
              <h5>Eğitim Yolculukları</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="/front-end">Front End</a>
                </li>
                <li>
                  <a href="/full-stack">Full Stack</a>
                </li>
                <li>
                  <a href="/web-mobile">Web & Mobile</a>
                </li>
                <li>
                  <a href="/veri-bilimi">Veri Bilimi</a>
                </li>
                <li>
                  <a href="/siber-guvenlik">Siber Güvenlik</a>
                </li>
                <li>
                  <a href="/ui-ux">UI / UX</a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4 text-left padding-footer-column">
              <h5>Blog</h5>
              <ul className="list-unstyled ">
                <li>
                  <a href="/web-api-nedir">
                    Web API Nedir? Programlama Yazılımının Arayüzü Nasıl
                    Çalışır?
                  </a>
                </li>
                <li>
                  <a href="/yapay-zeka-chatbot">
                    Yapay Zeka Chatbot: İşte Geleceğin İletişim Aracı!
                  </a>
                </li>
                <li>
                  <a href="/yazilim-test-otomasyonu">
                    Yazılım Test Otomasyonu: İş Akışınızı Daha Verimli Hale
                    Getirin!
                  </a>
                </li>
                <li>
                  <a href="/node-js-nedir">
                    Node.js Nedir ve Nasıl Kullanılır? İşte Sana Basit ve Etkili
                    Kılavuz
                  </a>
                </li>
                <li>
                  <a href="/robotlar-ve-yapay-zeka">
                    Robotlar ve Yapay Zeka için Hangi Yazılım Dili Kullanılır?
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-top margin-row padding-tb-40">
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-md-3 text-left-row2 padding-footer-column">
              <a href="https://tobeto.com/">
                <Image
                  src="https://tobeto.com/_next/static/media/tobeto-logo.29b55e1c.svg"
                  width={"130px"}
                />
              </a>
            </div>
            <div className="col-12 col-md-6 text-center padding-footer-column">
              © 2022 Tobeto | Her Hakkı Saklıdır
            </div>
            <div className="col-12 col-md-3 text-right-row2 padding-footer-column">
              <a
                href="https://www.facebook.com/tobetoplatform"
                className="me-4 lf-icon"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://www.instagram.com/tobeto_official/"
                className="me-4 lf-icon"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://www.twitter.com/tobeto_platform"
                className="me-4 lf-icon"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://www.linkedin.com/company/tobeto/"
                className="me-4 lf-icon"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
