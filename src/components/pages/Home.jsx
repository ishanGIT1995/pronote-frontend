import React from "react";
import NoteApi from "../../api/NoteApi";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <>
      <h1
        style={{
          color: "#45FFCA",
          display: "flex",
          alignItems: "center",
          marginTop: "-8px",
        }}
      >
        Welcome To
        <Typography
          color="primary"
          fontWeight={800}
          sx={{ color: "#FFB000", fontSize: "30px", marginLeft: "5px" }}
        >
          ProNote 📝
        </Typography>
      </h1>

      <NoteApi />
    </>
  );
};

export default Home;
