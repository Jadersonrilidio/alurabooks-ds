import React from "react";
import styled from "styled-components";

const InputStyled = styled.div`
  font-family: Poppins, sans-serif;

  label {
    display: block;
    margin-bottom: 8px;
    padding-left: 24px;
    color: #002F52;
    font-size: 16px;
    font-weight: 700;
  }

  input {
    width: 100%;
    box-sizing: border-box;
    color: #002F52;
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
    padding: 8px 24px;
    border: 1px solid #002F52;
    border-radius: 30px;

    &:focus {
      outline: none;
    }
  }
`;

export interface AbTextInputProps {
  label: string
  value?: string
  placeholder: string
  type?: "text" | "email" | "password" | "date"
  onChange: (value: string) => void
}

export const AbTextInput: React.FC<AbTextInputProps> = ({ label, value, placeholder, type = "text", onChange }) => {
  return (
    <InputStyled>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
      />
    </InputStyled>
  );
};
