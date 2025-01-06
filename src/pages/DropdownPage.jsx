import React from "react";
import { useNavigate } from "react-router-dom";

const DropdownPage = () => {
  const navigate = useNavigate();

  const handleSelection = (e) => {
    const selectedForm = e.target.value;
    if (selectedForm) {
      navigate(`/form/${selectedForm}`);
    }
  };

  return (
    <div>
      <h1>Select a Form</h1>
      <select onChange={handleSelection}>
        <option value="">--Select a Form--</option>
        <option value="Declaration">Declaration Form</option>
      </select>
    </div>
  );
};

export default DropdownPage;
