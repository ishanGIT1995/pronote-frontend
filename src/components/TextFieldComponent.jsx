import React from "react";
import { TextField } from "@mui/material";

const TextFieldComponent = (props) => {
  const {
    onChange,
    handleOnChange,
    name,
    value,
    success,
    helperText,
    rows,
    maxLength,
    placeholder,
    color,
    text,
    ...restProps
  } = props;

  return (
    <div>
      <TextField
        multiline
        rows={rows}
        success={success}
        helperText={helperText}
        value={value}
        onChange={handleOnChange}
        name={name}
        sx={{
          width: "90%",
          backgroundColor: "white",
          marginBottom: "20px",
          borderRadius: "5px",

          "&:focus": {
            outline: "none",
            border: "none",
            boxShadow: "none",
          },
        }}
        placeholder={placeholder}
        inputProps={maxLength}
        {...restProps}
      />
    </div>
  );
};

export default TextFieldComponent;
