import { useContext } from "react";
import { Button as BsButton } from "react-bootstrap";
import styled, { ThemeContext } from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled(BsButton)`
  color: ${(props) => props.colours.textColour} !important;
  background-color: ${(props) => props.colours.fg} !important;
  border-color: ${(props) => props.colours.bg} !important;

  :hover {
    color: ${(props) => props.colours.textColour} !important;
    background-color: ${(props) => props.colours.bg} !important;
    border-color: ${(props) => props.colours.bg} !important;
  }
`;

const Button = (props) => {
  const themeContext = useContext(ThemeContext);
  const { variant } = props;

  let buttonColours;
  if (variant === "secondary") {
    buttonColours = {
      fg: themeContext.clear,
      bg: themeContext.fourth,
      textColour: themeContext.primary,
    };
  } else {
    buttonColours = {
      fg: themeContext.primary,
      bg: themeContext.secondary,
      textColour: themeContext.clear,
    };
  }
  return <StyledButton colours={buttonColours} {...props} />;
};

Button.propTypes = {
  variant: PropTypes.string,
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
