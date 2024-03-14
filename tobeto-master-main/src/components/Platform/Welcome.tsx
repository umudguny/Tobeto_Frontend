import axios from "axios";
import { Col, Row } from 'react-bootstrap'
import React, { useEffect, useState } from "react";

type Props = {}

export const Welcome = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");

    if (userEmail) {
      axios
        .get (`https://localhost:7260/api/Users/GetByMail?email=${userEmail}`)
        .then((response: any) => {
          const userData = response.data;
          setFirstName(userData.firstName);
          setSecondName(userData.lastName);
          localStorage.setItem("firstName", userData.firstName);
          localStorage.setItem("secondName", userData.lastName);
        })
        .catch((error: any) => {
          console.log("Error fetching user's first name:", error);
        });
    }
  }, []);
  return (
    <>
    <Row className="welcome-row">
          <Col xs={12} className="text-center">
            <h1 className="welcome-header">
              TOBETO
              <span>
                'ya hoş geldin <br></br> {firstName}
              </span>
            </h1>
            <p className="welcome-subtext">
              Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
              yanında!
            </p>
          </Col>
          <Col xs={12} className="text-right dotted-image-container">
            <img
              src="https://tobeto.com/_next/static/media/dot-purple.e0e5c9d8.svg"
              alt="Purple Dots"
              className="img-fluid"
            />
          </Col>
        </Row>
        </>
  )
}
