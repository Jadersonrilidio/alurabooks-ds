import React, { ReactNode } from "react";
import styled from "styled-components";

export interface AbCardContainerProps {
  children: ReactNode
}

const CardContainerStyled = styled.div`
  padding: 48px 32px 48px 48px;
  background: #FFFFFF;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const AbCardContainer: React.FC<AbCardContainerProps> = ({ children }) => {
  return (
    <CardContainerStyled>
      {children}
    </CardContainerStyled>
  );
};
