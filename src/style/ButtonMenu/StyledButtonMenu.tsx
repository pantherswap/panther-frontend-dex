import styled, { DefaultTheme } from "styled-components";
import { Variants, variants } from "../types";

type StyledButtonMenuProps = {
  variant: Variants;
  theme: DefaultTheme;
};

const getBackgroundColor = ({ theme, variant }: StyledButtonMenuProps) => {
  return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};

const StyledButtonMenu = styled.div<{ variant: Variants }>`
  background-color: ${getBackgroundColor};
  border-radius: 32px;
  display: inline-flex;

  button,
  a {
    height: 40px;
    padding: 0 24px;
    border-radius: 32px;
  }

  & > button + button,
  & > a + a {
    margin-left: 2px; // To avoid focus shadow overlap
  }
`;

export default StyledButtonMenu;
