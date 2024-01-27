import React, { useEffect, useState } from "react";

import {
  Checkbox,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TextField,
  Tooltip,
} from "@mui/material";
import { existingNotes } from "./ProNote";

// import MUI Icons
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

// import axios
import axios from "axios";

// import React-Toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ButtonComponent from "./ButtonComponent";
import EditPopUp from "./EditPopUp";

const ProNoteTable = (props) => {
  const { dataRows, getNoteData, loading } = props;

  // State for selected records
  const [selectedRecords, setSelectedRecords] = useState([]);
  // State for search input
  const [searchText, setSearchText] = useState("");

  const [open, setOpen] = useState(false);
  const [rows, setRowsChange] = useState([]);
  const [page, setPageChange] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [editTitle, setEditTitle] = useState("");
  const [editId, setEditId] = useState("");
  const [editDescription, setEditDescription] = useState("");

  // Function to handle checkbox change
  const handleCheckboxChange = (id) => {
    const isSelected = selectedRecords.includes(id);
    if (isSelected) {
      // Remove from selectedRecords if already selected
      setSelectedRecords(selectedRecords.filter((recordId) => recordId !== id));
    } else {
      // Add to selectedRecords if not selected
      setSelectedRecords([...selectedRecords, id]);
    }
  };

  // Function to handle deleting all selected records
  const handleDeleteSelected = () => {
    let confirmMessage;

    if (selectedRecords.length === 0) {
      alert("first you must select records from the table to delete");
    } else {
      confirmMessage = window.confirm(
        "Are you sure you want to delete all selected records?"
      );
    }

    if (confirmMessage) {
      axios
        .delete(`${process.env.REACT_APP_API_BASE_URL}/delete-multiple`, {
          // data: selectedRecords,
          data: { recordIds: selectedRecords },
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Selected records have been deleted");
          }
          // Clear the selected records state
          setSelectedRecords([]);
          getNoteData();
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  // Filtered data based on search input
  const filteredData = dataRows.filter(
    (row) =>
      row.title.toLowerCase().includes(searchText.toLowerCase()) ||
      row.description.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  // handle update the input fields
  const handleEdit = (id) => {
    // alert(id);
    handleOpen();
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/${id}`)
      .then((res) => {
        setEditTitle(res.data.title);
        setEditDescription(res.data.description);
        setEditId(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdate = () => {
    const url = `${process.env.REACT_APP_API_BASE_URL}/${editId}`;
    const data = {
      id: editId,
      title: editTitle,
      description: editDescription,
    };

    axios.put(url, data).then((res) => {
      handleClose();
      getNoteData(existingNotes);
      toast.success("Record has succesfully been  Updated");
    });

    setEditTitle("");
    setEditDescription("");
  };

  // handle cancel update field

  const handleCancel = () => {
    handleClose();
  };

  // handle deleting the  Note
  const handleDelete = (id) => {
    let confirmMessage = window.confirm("Are You sure you want to Delete ?");

    if (confirmMessage) {
      axios
        .delete(`${process.env.REACT_APP_API_BASE_URL}/${id}`)
        .then((res) => {
          if (res.status === 200) {
            toast.success("record has been deleted");
          }
          getNoteData();
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  };

  //handle table pagination

  useEffect(() => {
    axios
      // .get("https://localhost:7163/api/Notes/getAllNotes")
      .get(`${process.env.REACT_APP_API_BASE_URL}/getAllNotes`)
      .then((res) => {
        setRowsChange(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handlePageChange = (event, newPage) => {
    setPageChange(newPage);
  };
  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPageChange(0);
  };

  return (
    <>
      <ToastContainer />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <ButtonComponent
          xs={12}
          sm={12}
          md={8}
          onClick={handleDeleteSelected}
          variant="contained"
          text="Delete Selected Records"
          sx={{
            float: "left",

            margin: "15px 15px 15px 0",
            backgroundColor: "#ff0000",
            color: "#ffffff",
            width: "250px",
            "&:hover": {
              backgroundColor: "#ff0000",
            },
          }}
        />

        <Grid item xs={8} sm={8} md={4} sx={{ float: "left", width: "50%" }}>
          <TextField
            placeholder="Search here"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{
              margin: "12px 0 0 0",
              width: "100%",
              maxWidth: "100%",
              backgroundColor: "#ffffff",
              borderRadius: "5px",
              float: "right",
              "&:focus": {
                outline: "none",
                border: "none",
                boxShadow: "none",
              },
            }}
          />
        </Grid>
      </Grid>

      {/* Table start here */}
      <Paper>
        <TableContainer
          component={Paper}
          // elevation={0}
          sx={{
            width: "100%",
            marginTop: "40px",
            marginBottom: "40px",
            maxHeight: "400px",
          }}
        >
          <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ backgroundColor: "#45474B" }}>
              <TableRow>
                <TableCell
                  sx={{
                    width: "100px",
                    backgroundColor: "#123456",
                    color: "white",
                  }}
                  align="center"
                >
                  {/* <Checkbox component="span" /> */}
                  Select
                </TableCell>
                <TableCell
                  sx={{
                    width: "50px",
                    backgroundColor: "#123456",
                    color: "white",
                  }}
                  align="center"
                >
                  No
                </TableCell>
                <TableCell
                  sx={{ backgroundColor: "#123456", color: "white" }}
                  align="center"
                >
                  Title
                </TableCell>
                <TableCell
                  sx={{ backgroundColor: "#123456", color: "white" }}
                  align="center"
                >
                  Description
                </TableCell>
                <TableCell
                  sx={{
                    backgroundColor: "#123456",
                    color: "white",
                    width: "120px",
                  }}
                  align="center"
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                <h3 style={{ textAlign: "center" }}>LoadingData...</h3>
              ) : (
                filteredData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                      }}
                    >
                      <TableCell align="center">
                        {" "}
                        <Checkbox
                          checked={selectedRecords.includes(row.id)}
                          onChange={() => handleCheckboxChange(row.id)}
                          component="span"
                        />
                      </TableCell>
                      <TableCell component="th" scope="row" align="center">
                        {/* {index + 1} */}
                        {page * rowsPerPage + index + 1}
                      </TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">{row.description}</TableCell>
                      <TableCell align="center">
                        <Tooltip title="Delete">
                          <IconButton
                            color="error"
                            onClick={() => {
                              handleDelete(row.id);
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Edit">
                          <IconButton
                            width="100%"
                            color="info"
                            sx={{ marginLeft: "5px" }}
                            onClick={() => {
                              handleEdit(row.id);
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))
              )}
            </TableBody>
          </Table>

          {/*  Modal Popup (Edit Dialog Box)*/}
          <EditPopUp
            open={open}
            handleOpen={handleOpen}
            handleClose={handleClose}
            handleUpdate={handleUpdate}
            handleCancel={handleCancel}
            editTitle={editTitle}
            editDescription={editDescription}
            setEditTitle={setEditTitle}
            setEditDescription={setEditDescription}
          />
        </TableContainer>
        <TablePagination
          component="div"
          rowsPerPageOptions={[5, 10, 25]}
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleRowsPerPageChange}
        />
      </Paper>
    </>
  );
};

export default ProNoteTable;
