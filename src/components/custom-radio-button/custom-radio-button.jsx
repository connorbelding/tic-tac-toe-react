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
  screen,
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
        screen={screen}
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
  screen: propTypes.string.isRequired,
};

export default CustomRadioButton;
