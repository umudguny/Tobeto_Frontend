import React, { useState } from "react";
import "./SortingDropDown.css"; 

function SortingDropdown({ onSortChange }: any) {
  const [sortOrder, setSortOrder] = useState("name-asc");

  const handleSortChange = (event: any) => {
    setSortOrder(event.target.value);
    onSortChange(event.target.value); 
  };

  return (
    <div className="sorting-dropdown-container">
      <select
        value={sortOrder}
        onChange={handleSortChange}
        className="custom-sorting-dropdown"
      >
        <option value="name-asc">Adına Göre (A-Z)</option>
        <option value="name-desc">Adına Göre (Z-A)</option>
        <option value="date-asc">Tarihe Göre (Y-E)</option>
        <option value="date-desc">Tarihe Göre (E-Y)</option>
      </select>
    </div>
  );
}

export default SortingDropdown;
