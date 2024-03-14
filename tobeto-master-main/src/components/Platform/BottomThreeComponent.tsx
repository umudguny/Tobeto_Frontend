import React from 'react'
import { Row } from 'react-bootstrap'

type Props = {}

const BottomThreeComponent = (props: Props) => {
  return (
    <>
    <Row>
            <div className="row margin-platform-card-row centered-row">
              <div className="col-md-3 col-12 margin-platform-card margin-platform-card-background-1 ">
                <div className="card-inside-row1">
                  <br></br>
                  Profilini oluştur
                  <br />
                </div>
                <div className="card-inside-row2 ">
                  <a
                    href="/profilim/profilimi-duzenle/kisisel-bilgilerim"
                    className="button-link-unstyled"
                  >
                    <button className="solid-color-button">Başla</button>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-12 margin-platform-card margin-platform-card-background-2">
                <div className="card-inside-row1">
                  Kendini <br></br> değerlendir
                </div>
                <div className="card-inside-row2">
                  <a href="/degerlendirmeler" className="button-link-unstyled">
                    <button className="solid-color-button">Başla</button>
                  </a>
                </div>
              </div>
              <div className="col-md-3 col-12 margin-platform-card margin-platform-card-background-3">
                <div className="card-inside-row1">
                  Öğrenmeye <br /> başla
                </div>
                <div className="card-inside-row2">
                  <a
                    href="/platform-egitimler"
                    className="button-link-unstyled"
                  >
                    <button className="solid-color-button">Başla</button>
                  </a>
                </div>
              </div>
            </div>
          </Row>
    </>
  )
}

export default BottomThreeComponent