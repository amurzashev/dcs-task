import { addNote, deleteNote } from "actions/notes";
import { RootState } from "duck";
import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button } from "ui";

const Note: FC = () => {
  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.modal);
  const notes = useSelector((state: RootState) => state.notes);
  const text = notes[id];
  const [value, setValue] = useState(text || "");
  useEffect(() => {
    setValue(text);
  }, [text]);
  return (
    <Box mt={3}>
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        rows={4}
        style={{ width: "100%", resize: "none" }}
      />
      <Box display="flex">
        <Button
          appearance="regular"
          color="secondary"
          onClick={() => dispatch(addNote(id, value))}
        >
          Save
        </Button>
        <Box ml={2}>
          <Button
            appearance="regular"
            color="error"
            onClick={() => dispatch(deleteNote(id))}
          >
            Clear
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Note;
