import React from "react";
import "./About.css";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box p={2} className="About">
      <Typography variant="h4" gutterBottom>
        About Page - ProNote Application 📝
      </Typography>

      <Typography variant="body1">
        Welcome to the ProNote Application's About page! This application allows
        you to manage your notes efficiently with the following features:
      </Typography>

      <Typography variant="h6">Key Features:</Typography>

      <ul style={{ textAlign: "left" }}>
        <li>
          <strong>Create Notes:</strong> Easily create new notes by clicking on
          the "Create Note" button and providing a title and description.
        </li>
        <li>
          <strong>Edit Notes:</strong> Modify existing notes by locating the
          note you want to edit and updating the title or description.
        </li>
        <li>
          <strong>Delete Notes:</strong> Remove unwanted notes by clicking on
          the delete button associated with each note.
        </li>
        <li>
          <strong>Search Notes:</strong> Quickly find specific notes using the
          search bar. Filter notes based on titles or descriptions.
        </li>
        <li>
          <strong>Table Pagination:</strong> If you have a large number of
          notes, the application provides table pagination for easy navigation.
        </li>
        <li>
          <strong>Delete Selected Records:</strong> Manage multiple notes at
          once by selecting and deleting them in bulk.
        </li>
      </ul>

      <Typography variant="body1">
        Start organizing your thoughts and ideas effortlessly with the Note
        Application!
      </Typography>
    </Box>
  );
};

export default About;
