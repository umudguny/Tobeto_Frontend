import React from 'react'
import { Col, Row } from 'react-bootstrap'

type Props = {}

export const SurveyTab = (props: Props) => {
  return (
  <>
      <Row>
  <Col className="survey-area">
    <img src="https://tobeto.com/_next/static/media/notFound.4015d44b.svg" alt="Not Found" className="survey-img" />
    <div className="survey-text">
      Atanmış herhangi bir anketiniz bulunmamaktadır
    </div>
  </Col>
</Row>
  </>
  )
}