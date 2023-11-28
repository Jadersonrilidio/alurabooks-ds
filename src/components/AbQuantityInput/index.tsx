import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
  width: fit-content;
  padding: 12px;

  h2 {
    margin-bottom: 12px;
    color: #000000;
    font-size: 22px;
    font-weight: 700;
    font-family: Poppins, sans-serif;
    text-align: center;
  }
`;

const FlexContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  font-family: Poppins, sans-serif;
  text-align: center;

  button {
    width: 28px;
    height: 28px;
    background-color: #002F52;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    color: #FFFFFF;
    font-size: 24px;
    font-weight: 400;
    box-shadow: 0px 2px 4px 0px #00000040;
  }

  span {
    color: #002F52;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
  }
`;

export interface AbQuantityInputProps {
  label: string
  defaultValue?: number
  onChange?: (value: number) => void
}

export const AbQuantityInput: React.FC<AbQuantityInputProps> = ({ label, defaultValue, onChange }) => {
  const [value, setValue] = useState<number>(defaultValue ?? 1);

  useEffect(() => {
    if (onChange) {
      onChange(value);
    }
  }, [value]);

  const decrementValue = () => {
    if (value >= 1) {
      setValue(value - 1);
    }
  };

  const incrementValue = () => {
    setValue(value + 1);
  };

  return (
    <ContainerStyled>
      <h2>{label}</h2>
      <FlexContainerStyled>
        <button onClick={() => decrementValue()}>-</button>
        <span>{String(value).padStart(2, "0")}</span>
        <button onClick={() => incrementValue()}>+</button>
      </FlexContainerStyled>
    </ContainerStyled>
  );
};
