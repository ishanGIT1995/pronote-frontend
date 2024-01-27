import React, { useEffect, useState } from "react";
import ProNoteTable from "../components/ProNoteTable";
import ProNote from "../components/ProNote";
import axios from "axios";

const NoteApi = () => {
  const [noteData, setNoteData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNoteData();
  }, []);

  // handle get request
  const getNoteData = () => {
    axios

      .get(`${process.env.REACT_APP_API_BASE_URL}/getAllNotes`)
      .then((response) => {
        // Assign an index to each note based on its position in the array
        const notesWithIndex = response.data.map((note, index) => ({
          ...note,
          index,
        }));

        // Sort the notes by index in descending order
        const sortedNotes = notesWithIndex.sort((a, b) => b.index - a.index);

        // Remove the temporary index property before updating the state
        const notesWithoutIndex = sortedNotes.map(({ index, ...rest }) => rest);

        setNoteData(notesWithoutIndex);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    { field: "id", headerName: "NO" },
    { field: "title", headerName: "Title" },
    { field: "description", headerName: "Description" },
    { field: "actions", headerName: "Actions" },
  ];

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <ProNote getNoteData={getNoteData} noteData={noteData} />
      <ProNoteTable
        dataRows={noteData}
        dataColumns={columns}
        getNoteData={getNoteData}
        loading={loading}
      />
      ;
    </div>
  );
};

export default NoteApi;
