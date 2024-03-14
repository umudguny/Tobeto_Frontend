import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "./ListAccordion.css";

const Accordion = ({ title, children }: any) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion ">
      <div className="accordion-title" onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon
          icon={faAngleDown}
          className={`list-accordion-icon ${isOpen ? "open" : ""}`}
        />
        {title}
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;
