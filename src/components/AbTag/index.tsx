import React from "react";
import styled from "styled-components";

const TagStyled = styled.a`
  background: #EB9B00;
  padding: 24px;
  border: 2px solid #EB9B00;
  color: #FFFFFF;
  font-family: Poppins, sans-serif;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
`;

export interface AbTagProps {
  text: string
  link: string
}

export const AbTag: React.FC<AbTagProps> = ({ text, link = "#" }) => {
  return (
    <TagStyled href={link}>
      {text}
    </TagStyled>
  );
};
