import React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import PropTypes from "prop-types";

// const ITEM_HEIGHT = "40%";
// const ITEM_PADDING_TOP = 2;
const MenuProps = {
  PaperProps: {
    style: {
      //height: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: "30%",
    },
  },
};

export default function SelectLevel({ levels, handleChange, userLevel }) {
  return (
    <div>
      <FormControl sx={{ width: "100%" }}>
        <InputLabel size="small" id="level">
          Levels
        </InputLabel>
        <Select
          labelId="level"
          id="demo-multiple-checkbox"
          multiple
          value={userLevel}
          onChange={handleChange}
          input={<OutlinedInput label="Levels" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {levels.map((level) => (
            <MenuItem key={level} value={level}>
              <Checkbox checked={userLevel.indexOf(level) > -1} />
              <ListItemText primary={level} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

SelectLevel.defaultProps = {
  levels: [],
};

SelectLevel.propTypes = {
  levels: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired,
  userLevel: PropTypes.array.isRequired,
};
