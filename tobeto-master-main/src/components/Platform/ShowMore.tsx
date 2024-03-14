import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Row } from "react-bootstrap";

type Props = {};

export const ShowMore = (props: Props) => {
  return (
    <>
      <Row className="all-edu-btn  ">
        <div className="p-row-container">
          <a href="/my-course" className="link-full-row">
            <button className="load-more-btn">
              <FontAwesomeIcon
                icon={faChevronRight}
                className="p-button-icon"
              />
              <span>Daha Fazla Göster</span>
            </button>
          </a>
        </div>
      </Row>
    </>
  );
};
