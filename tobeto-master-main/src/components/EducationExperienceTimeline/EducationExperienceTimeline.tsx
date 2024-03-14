import React from "react";
import "./EducationExperienceTimeline.css";

interface TimelineItem {
  id: number;
  dateRange: string;
  institution: string;
  description: string;
}

interface EducationExperienceTimelineProps {
  items: TimelineItem[];
}

const EducationExperienceTimeline: React.FC<
  EducationExperienceTimelineProps
> = ({ items }) => {
  return (
    <div className="timeline-container">
      {items.map((item) => (
        <div>
          <div className="timeline-content">
            <h3>{item.institution}</h3>
            <p>{item.description}</p>
            <div>{item.dateRange}</div>
          </div>
          <div key={item.id} className="timeline-item "></div>
          <div className="timeline-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default EducationExperienceTimeline;
