import React from "react";
import Button from "@mui/material/Button";

const ButtonComponent = (props) => {
  const { onClick, variant, color, text, ...restProps } = props;
  return (
    <Button onClick={onClick} variant={variant} color={color} {...restProps}>
      {text}
    </Button>
  );
};

export default ButtonComponent;
