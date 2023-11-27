import React, { useState } from "react";
import styled from "styled-components";

interface OPCSProps {
  direction: "row" | "column"
}

const OptionsGroupContainerStyled = styled.section<OPCSProps>`
  display: flex;
  flex-direction: ${(props: OPCSProps) => props.direction};
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

interface OSProps {
  selected: boolean
}

const OptionStyled = styled.div<OSProps>`
  width: 194px;
  background: ${(props: OSProps) => !props.selected ? "transparent" : "linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)"};
  padding: 8px 0;
  border: ${(props: OSProps) => !props.selected ? "1px solid #EB9800" : "none"};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  font-family: Poppins, sans-serif;
  cursor: pointer;

  header {
    color: ${(props: OSProps) => !props.selected ? "#EB9800" : "#FFFFFF"};
    font-size: 12px;
    font-weight: 400;
  }
  
  strong {
    color: ${(props: OSProps) => !props.selected ? "#EB9800" : "#FFFFFF"};
    font-size: 16px;
    font-weight: 700;
  }

  footer {
    color: ${(props: OSProps) => !props.selected ? "rgba(0, 0, 0, .54)" : "#FFFFFF"};
    font-size: 12px;
    font-weight: 400;
  }

  @media screen and (max-width: 740px) {
    width: 120px;
    height: 106px;
    justify-content: space-evenly;
  }
`;

export interface AbGroupOption {
  id: number,
  title: string,
  body: string,
  footer: string
}

export interface AbOptionsGroupProps {
  options: AbGroupOption[],
  direction: "row" | "column",
  defaultOption: number | null,
  onChange?: (option: number) => void
}

export const AbOptionsGroup: React.FC<AbOptionsGroupProps> = ({ options, direction = "row", defaultOption = null, onChange }) => {
  const [selection, setSelection] = useState<number | null>(defaultOption);

  const onSelect = (optionId: number) => {
    if (onChange) {
      onChange(optionId);
    }
    setSelection(optionId);
  }

  return (
    <OptionsGroupContainerStyled direction={direction}>
      {options.map(option =>
        <OptionStyled
          key={option.id}
          selected={selection === option.id}
          onClick={() => onSelect(option.id)}
        >
          <header>
            {option.title}
          </header>
          <div>
            <strong>
              {option.body}
            </strong>
          </div>
          <footer>
            {option.footer}
          </footer>
        </OptionStyled>
      )}
    </OptionsGroupContainerStyled>
  )
}
