import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Row } from 'react-bootstrap'

type Props = {}

const Exam = (props: Props) => {
  return (
    <>
    <Row>
            <div className="exam-card">
              <div className="exam-title">Sınavlarım</div>
              <div className="exam-content">
                <Row>
                  <div className="exam-name">
                    Herkes için Kodlama 2B Değerlendirme Sınavı
                    <span className="exam-statu">&nbsp;✓&nbsp;</span>
                  </div>
                </Row>
                <div className="exam-subtitle">Herkes için Kodlama - 2B</div>
                <div className="exam-time">
                  <FontAwesomeIcon icon={faClock} />
                  <span>45 Dakika</span>
                </div>
              </div>
            </div>
          </Row></>
  )
}

export default Exam