import React, { useRef } from "react";
import propTypes from "prop-types";
import { RadioButtonWrapper, RadioButton } from "./styles";

function CustomRadioButton({
  groupName,
  id,
  value,
  customButtonText,
  handleInputChange,
  isChecked,
}) {
  const inputRef = useRef();

  function handleCustomButtonClick() {
    inputRef.current.click();
  }

  return (
    <RadioButtonWrapper>
      <label htmlFor={id}>{customButtonText}</label>
      <input
        ref={inputRef}
        type="radio"
        name={groupName}
        id={id}
        value={value}
        checked={isChecked}
        onChange={handleInputChange}
      />
      <RadioButton
        type="button"
        isSelected={isChecked}
        onClick={handleCustomButtonClick}
      >
        {customButtonText}
      </RadioButton>
    </RadioButtonWrapper>
  );
}

CustomRadioButton.propTypes = {
  groupName: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  customButtonText: propTypes.string.isRequired,
  handleInputChange: propTypes.func.isRequired,
  isChecked: propTypes.bool.isRequired,
};

export default CustomRadioButton;
