import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import { FiFacebook } from "react-icons/fi";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
export default function About() {
  return (
    <main className="main-about">
      <div className="container-about">
        <div className="first-part">
          <div className="tobeto-logo">
            <img
              className="logo"
              title=""
              src="https://tobeto.com/_next/static/media/tbtLogo.3fb5d7fd.svg"
              alt=""
            />
          </div>
          <div className="paragraf">
            <p>
              Tobeto, "headhunting" yaklaşımını
              <span>"headfarming"</span> olarak değiştirmeyi hedefleyen, eğitim
              ve gelişim odaklı dijital bir platformdur
            </p>
          </div>
          <div className="tobeto_video">
            <video
              className="video"
              src="https://s3.cloud.ngn.com.tr/tobeto/tobeto_final_v2_5c7893fbe0.mp4"
              controls
            ></video>
          </div>
        </div>
      </div>
      <div className="container-2 ">
        <div className="second-part">
          <p>
            Geleceğin mesleklerindeki yetenek açığını, geleneksel "headhunting"
            yaklaşımının <b>"headfarming"</b> olarak değişmesiyle
            çözülebileceğine inanarak yola çıktık.
          </p>
          <p>
            Tobeto, "headfarming" yaklaşımıyla yeteneği potansiyel olarak
            değerlendirir, en kıymetli olacağı alanda yetiştirir, değer
            yaratacağı projeler ve kurumlarla eşleştirir. Bu fırsata{" "}
            <b>Y.E.S. (Yetiş-Eşleş-Sürdür)</b> diyen herkesi Tobeto’lu olmaya
            çağırıyoruz.
          </p>
          <p>
            Günümüzde iş bulmak, bir projeye dahil olmak veya kariyerinde
            yükselmek gibi değer yaratma yolları için en önemli unsurların
            başında <b>dijital beceri</b> sahibi olmak geliyor. Tam da bu
            ihtiyaçları kapsamak üzere, Tobeto'da eğitim içeriklerimizi hem
            dijital beceri sahibi olmak isteyen yeteneklerin teknik beceri
            kazanması hem de genç profesyonellerin, ihtiyaçlarına uygun olarak
            yenilenmeleri ve yetkinliklerini geliştirmelerini kapsayacak şekilde
            tek platformda birleştirdik.
          </p>
          <p>
            Tobeto’da <b>hem bireylere hem de kurumlara</b> hizmet eden
            yapımızla, doğru yetenekle doğru pozisyonun sürdürülebilir bir
            şekilde eşleşmesine ve birlikte gelişmelerine alan açıyoruz. Kurum
            içi çözümlere destek veriyor, eğitim ve istihdam arasında köprü
            görevini üstleniyoruz.
          </p>
        </div>
      </div>
      <div className="container-3">
        <div className="tobeto_list">
          <div className="list-header">Tobeto farkı;</div>

          <ul className="list">
            <li>
              <span className="list-icon"></span>
              <b>Codecademy</b> ile uluslararası geçerliliğe sahip sertifika
              fırsatı
            </li>
            <li>
              <span className="list-icon"></span>
              <b>Abonelik</b> modeliyle eğitime erişim
            </li>
            <li>
              <span className="list-icon"></span>
              <b>Çeşitlendirilmiş</b>
              değerlendirme araçlarıyla gelişim alanlarını tanıma
            </li>
            <li>
              <span className="list-icon"></span>
              <b>Fark yaratan</b> bir gelişim süreci
            </li>
            <li>
              <span className="list-icon"></span>Mesleki eğitimlerin yanı sıra
              <b> kişisel ve profesyonel gelişim</b> imkanı
            </li>
            <li>
              <span className="list-icon"></span>Alanında uzman eğitmenlerle{" "}
              <b>canlı dersler</b>
            </li>
            <li>
              <span className="list-icon"></span>
              <b>Mentör</b> desteği
            </li>
            <li>
              <span className="list-icon"></span>Online ve canlı derslerle
              <b>hibrit</b> yaklaşım
            </li>
            <li>
              <span className="list-icon"></span>
              <b>Zengin</b> eğitim kütüphanesi
            </li>
          </ul>
        </div>
      </div>
      <div className="container-4">
        <div className="tobeto_paragraf">
          <span className="gradient-header">
            Tobeto ile işe hazırlan, işe yerleş, işinde geliş, <br />
            yüksel!
          </span>
        </div>
      </div>
      <div className="gradient-line"></div>

      <div className="container-5">
        <span className="list-header">Ekibimiz</span>
        <div className="craws">
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/eliftugtan/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Felif-kilic.ba3177e2.png&w=1920&q=75"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Elif Kılıç Tuğtan</span>
            <span className="craw-title">Kurucu Direktör</span>
          </div>
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/kader-yavuz/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://media.licdn.com/dms/image/C4D03AQFcE3jej8geOg/profile-displayphoto-shrink_200_200/0/1636238961788?e=1710979200&v=beta&t=pyd67QuyB1Amsyzr-w5njfwPJWd0NTqMbHLRP1lHZPo"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Kader Yavuz </span>
            <span className="craw-title">Eğitim ve Proje Koordinatörü</span>
          </div>
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/pelinbatir/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpelin-batir.3e558dda.png&w=1920&q=75"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Pelin Batır </span>
            <span className="craw-title">İş Geliştirme Yöneticisi</span>
          </div>
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/g%C3%BCrkan-ili%C5%9Fen/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fgurkanilisen.caf74ca3.png&w=1920&q=75"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Gürkan İlişen</span>
            <span className="craw-title">
              Eğitim Teknolojileri ve Platform Sorumlusu
            </span>
          </div>
        </div>
        <div className="craws">
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/ismail-erden-78a49361/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://media.licdn.com/dms/image/C4E03AQF4IDEzkodrCA/profile-displayphoto-shrink_800_800/0/1597902975382?e=1710979200&v=beta&t=556k3w2gzoAi05yMyncaXVRiOZWAyCB6_Ge2tVJhZKY"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">İsmail Erden</span>
            <span className="craw-title">Yazılım Geliştirme Müdürü</span>
          </div>
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/selimergin/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fselimergin.f1d7d9ad.png&w=1920&q=75"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Ahmet Selim Ergin</span>
            <span className="craw-title">Yazılım Geliştirici</span>
          </div>
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/do%C4%9Fukan-bekta%C5%9F-1877b920a/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdogukan.ebef6ec9.png&w=1920&q=75"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Doğukan Bektaş</span>
            <span className="craw-title">Yazılım Geliştirici</span>
          </div>
        </div>
        <span className="list-header-1">Danışma Kurulu</span>
        <div className="craws">
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/ahmethancer/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fahmet-hancer.13d6bd2f.png&w=1920&q=75"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Ahmet Hançer</span>
            <span className="craw-title">Enocta </span>
            <span className="craw-title">Ceo </span>
          </div>
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/ecmel-ayral-777b823/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fecmel-ayral.9114c7af.png&w=1920&q=75"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Ecmel Ayral </span>
            <span className="craw-title">Unlearn Academy</span>
            <span className="craw-title">Kurucu</span>
          </div>
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link to="https://www.linkedin.com/in/atacik/" target="_blank">
                  <span className="image-order">
                    <img
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcem-atacik.29af3d5b.png&w=1920&q=75"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Cem Atacık </span>
            <span className="craw-title">Kampüs365&Perculus</span>
            <span className="craw-title">Ceo</span>
          </div>
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/mehmetgursoy/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmehmet-gursoy.7a0af94d.png&w=1920&q=75"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Mehmet Gürsoy</span>
            <span className="craw-title">Ledd</span>
            <span className="craw-title">Kurucu</span>
          </div>
          <div className="craw">
            <div className="craw-image">
              <div className="border-frame">
                <Link
                  to="https://www.linkedin.com/in/mehmetgursoy/"
                  target="_blank"
                >
                  <span className="image-order">
                    <img
                      src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Falparslan.ad11a534.png&w=1920&q=75"
                      alt=""
                    ></img>
                  </span>
                </Link>
              </div>
            </div>
            <span className="craw-name">Alpaslan Gürsoy</span>
            <span className="craw-title">Lidya Ventures</span>
            <span className="craw-title">Yönetim Kurulu Üyesi</span>
          </div>
        </div>
      </div>
      <div className="gradient-line"></div>
      <div className="container-fluid">
        <div className="about-banner">
          <span>Ofisimiz</span>
          <p className="address">
            Kavacık, Rüzgarlıbahçe Mah. Çampınarı Sok. No:4 Smart Plaza B Blok
            Kat:3 34805, Beykoz,İstanbul
          </p>
        </div>
      </div>

      <div className="container-fluid">
        <div className="followus-banner">
          <span>Bizi Takip Edin</span>
          <div className="follow-icons">
            <span>
              <Link
                to="https://www.facebook.com/tobetoplatform"
                target="_blank"
              >
                <FiFacebook style={{ color: "#93f" }} />
              </Link>
            </span>
            <span>
              <Link
                to="https://www.instagram.com/tobeto_official/"
                target="_blank"
              >
                <FaInstagram style={{ color: "#93f" }} />
              </Link>
            </span>
            <span>
              <Link
                to="https://twitter.com/i/flow/login?redirect_after_login=%2Ftobeto_platform"
                target="_blank"
              >
                <BsTwitterX style={{ color: "#93f" }} />
              </Link>
            </span>
            <span>
              <Link
                to="https://www.linkedin.com/company/tobeto/"
                target="_blank"
              >
                <LuLinkedin style={{ color: "#93f" }} />
              </Link>
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
