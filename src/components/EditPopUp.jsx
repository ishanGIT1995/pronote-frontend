import React from "react";
import ButtonComponent from "./ButtonComponent";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

import { Box, Grid, Modal, Typography } from "@mui/material";
import TextFieldComponent from "./TextFieldComponent";

const EditPopUp = (props) => {
  const {
    open,
    handleCancel,
    handleClose,
    setEditTitle,
    setEditDescription,
    editTitle,
    editDescription,
    handleUpdate,
  } = props;

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 400,
    width: "50%",
    margin: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const maxTitleLength = 50;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#FFB000", alignSelf: "flex-start" }}
          >
            Title
          </Typography>

          {/* edit text input field */}
          <TextFieldComponent
            multiline
            value={editTitle}
            name="editTitle"
            placeholder="Edit the Title here"
            handleOnChange={(e) => setEditTitle(e.target.value)}
            maxLength={{
              maxLength: maxTitleLength,
            }}
          />
        </Grid>

        <Grid item>
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#FFB000", alignSelf: "flex-start" }}
          >
            Description
          </Typography>

          {/* edit description input field */}
          <TextFieldComponent
            multiline
            rows={3}
            maxRows={4}
            value={editDescription}
            name="editDescription"
            placeholder="Edit the description here"
            handleOnChange={(e) => setEditDescription(e.target.value)}
          />
        </Grid>

        <ButtonComponent
          onClick={handleUpdate}
          variant="contained"
          text="Save Changes"
          startIcon={<SaveIcon />}
          sx={{
            marginTop: "20px",
            marginRight: "20px",
            width: "180px",
            backgroundColor: "#123456",
            "&.MuiButton-outlined": {
              borderColor: "#45FFCA",
            },
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#123456",
            },
          }}
        />

        <ButtonComponent
          onClick={handleCancel}
          variant="contained"
          text="Cancel"
          startIcon={<CancelIcon />}
          sx={{
            // color: "#FFB000",
            marginTop: "20px",

            width: "120px",
            backgroundColor: "#9A031E",
            "&.MuiButton-outlined": {
              borderColor: "#45FFCA",
            },
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#9A031E",
            },
          }}
        />
      </Box>
    </Modal>
  );
};

export default EditPopUp;
