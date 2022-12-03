import { useRef } from "react";
import { RadioButtonWrapper, RadioButton } from "./styles";

export default function CustomRadioButton({
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
