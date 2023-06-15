import React, { useState } from "react";
import "./App.css";

const App = () => {
  const value = [];
  const readonly = false;

  const [selectedValues, setSelectedValues] = useState(value);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (event, checkboxValue) => {
    if (event.target.checked) {
      setSelectedValues([...selectedValues, checkboxValue]);
    } else {
      setSelectedValues(
        selectedValues.filter((value) => value !== checkboxValue)
      );
    }
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="container">
      <div className="lContainer">
        <input
          type="text"
          value={selectedValues.join(", ")}
          readOnly
          onClick={handleDropdownToggle}
          placeholder="e.g. Australia"
          className="input-text"
        />
        {isDropdownOpen && (
          <div className="dropdown">
            {[
              "Australia",
              "Bermuda",
              "Canada",
              "Cameroon",
              "Denamrk",
              "France",
              "Finland",
              "Germany",
              "India",
              "China",
              "Russia",
              "Japan"
            ].map((option) => (
              <div key={option} className="input-option">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedValues.includes(option)}
                  disabled={readonly}
                  onChange={(event) => handleCheckboxChange(event, option)}
                  className="input-option-checkbox"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
