import React from "react";
import "./Contact.css";
import { Box, Typography } from "@mui/material";

const Contact = () => {
  const emailAddress = "ishanrandikadev95@gmail.com";

  return (
    <div className="Contact">
      <Box p={2}>
        <Typography variant="h4" gutterBottom>
          Contact Me 🧑
        </Typography>

        <Typography variant="body1">
          Have questions or suggestions? I'd love to hear from you! Please feel
          free to reach out to me using the Email below:
        </Typography>

        <Typography variant="body1">
          Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
        </Typography>
      </Box>
    </div>
  );
};

export default Contact;
