import React from "react";
import "./ActivityMap.css";

type ActivityLevel = 0 | 1 | 2 | 3 | 4;

interface ActivityMapProps {
  activityData: ActivityLevel[];
}


const ActivityMap: React.FC<ActivityMapProps> = ({ activityData }) => {
  // Aktivite seviyesine bağlı olarak tooltip metnini döndüren fonksiyon
  const getActivityTooltip = (activityLevel: ActivityLevel): string => {
    const activityDescriptions = [
      "0 adet aktivite", // activityLevel 0 için
      "1 adet aktivite", // activityLevel 1 için
      "2 adet aktivite", // activityLevel 2 için
      "3 adet aktivite", // activityLevel 3 için
      "4 adet aktivite", // activityLevel 4 için
      "5 adet aktivite", // activityLevel 5 için
    ];

    return (
      activityDescriptions[activityLevel] || "Bilinmeyen aktivite seviyesi"
    );
  };


  const dotsPerRow = 52;

  return (
    <div className="activity-map">
      {Array.from({ length: 7 }, (_, rowIndex) => (
        <div key={rowIndex} className="activity-row">
          {activityData
            .slice(rowIndex * dotsPerRow, (rowIndex + 1) * dotsPerRow)
            .map((level, index) => (
              <div
                key={index}
                className={`activity-dot level-${level}`}
                data-tooltip={getActivityTooltip(level)} // Tooltip metnini data-tooltip özelliği ile ayarlayın
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default ActivityMap;
