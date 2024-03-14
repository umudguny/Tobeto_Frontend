import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ShowMore } from "./ShowMore";
import { AsyncCourse } from "../../models/responses/asyncCourse/getAllAsyncCourseResponse";
import asyncCourseService from "../../services/asyncCourseService";

type Props = {};

export const EducationTab = (props: Props) => {
  const [asyncCourses, setAsyncCourses] = useState<AsyncCourse[]>([]);

  const fetchAsyncCourses = async () => {
    const response = await asyncCourseService.getAll();
    setAsyncCourses(response.data.items);
  };
  useEffect(() => {
    fetchAsyncCourses();
  }, []);
  console.log(asyncCourses);

  return (
    <>
      <Row>
        <Col><Row>
          {asyncCourses.slice(0, 4).map((course) => (
            <Col lg={3} md={6} xs={12}>
              <Link to={`/activity/${course.id}`} className="edu-card-link ">
                <div className="edu-card ">
                  <div className="edu-card-image">
                    <img
                      src="https://lms.tobeto.com/tobeto/eep/common_show_picture_cached.aspx?pQS=eaAjNZ0uaOFNO7nf8wuXoA%3d%3d"
                      alt={course.name}
                    ></img>
                  </div>
                  <div className="edu-card-body">
                    <h5 className="edu-card-title">{course.name}</h5>
                   {/* <p className="edu-card-date"></p> */}
                    <button className="edu-card-button">Eğitime Git</button>
                  </div>
                </div>
              </Link>
            </Col>
          ))}
          </Row>
        </Col>
      </Row>
      <ShowMore />
    </>
  );
};
