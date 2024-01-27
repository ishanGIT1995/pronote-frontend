import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";
import axios from "axios";

// import icons
import AddIcon from "@mui/icons-material/Add";

// import React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonComponent from "./ButtonComponent";
import TextFieldComponent from "./TextFieldComponent";
export let existingNotes;

const ProNote = (props) => {
  const { getNoteData, noteData } = props;
  const maxTitleLength = 50;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // handle post request
  const handleCreate = () => {
    // Check if the title and description are not empty
    if (!title.trim() || !description.trim()) {
      alert("Title and Description cannot be empty");
      return;
    }

    // Check if the title and description combination already exists
    existingNotes = [...noteData]; // Replace this with the actual array of existing notes
    const duplicateNote = existingNotes.find(
      (note) => note.title === title && note.description === description
    );

    if (duplicateNote) {
      // Show an alert or handle the duplicate error as needed
      alert("Note with the same title and description already exists");
      return;
    }

    const url = `${process.env.REACT_APP_API_BASE_URL}`;

    const data = {
      title: title,
      description: description,
    };

    existingNotes.unshift(data);

    axios.post(url, data).then((res) => {
      getNoteData(existingNotes);
      toast.success("Record has succesfully been  Added");
    });

    setTitle("");
    setDescription("");
  };

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#123456",
          minHeight: "150px",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 0 10px 0",
        }}
      >
        <Grid
          container
          direction="row"
          spacing={4}
          sx={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Title Grid Container start here */}

          <Grid item xs={12} sm={12} md={4}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#FFB000", alignSelf: "flex-start" }}
            >
              TITLE
            </Typography>

            <TextFieldComponent
              multiline
              rows={2}
              value={title}
              name="title"
              placeholder="Enter the Title here"
              success={title.length < 50}
              helperText={
                title.length < 50 ? " " : "maximum 50 charactors are allowed"
              }
              handleOnChange={(e) => setTitle(e.target.value)}
              maxLength={{
                maxLength: maxTitleLength,
              }}
            />
          </Grid>

          {/* Description Grid Container start here */}

          <Grid item xs={12} sm={12} md={4}>
            <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "#FFB000", alignSelf: "flex-start" }}
            >
              DESCRIPTION
            </Typography>
            <TextFieldComponent
              multiline
              rows={3}
              value={description}
              name="description"
              placeholder="Enter the description here"
              handleOnChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          {/* Button Grid Container starts here */}

          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            sx={{
              alignSelf: "center",
              marginLeft: "-60px",
              gutterBottom: "-20px",
            }}
          >
            <ButtonComponent
              onClick={handleCreate}
              variant="outlined"
              text="Create"
              startIcon={<AddIcon />}
              sx={{
                backgroundColor: "#45FFCA",
                color: "#000000",
                marginTop: "20px",
                width: "180px",
                "&.MuiButton-outlined": {
                  borderColor: "#45FFCA",
                },
                "&:hover": {
                  backgroundColor: "#45FFCA",
                },
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ProNote;
