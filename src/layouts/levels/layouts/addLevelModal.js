import React, { useState } from "react";
import { Dialog, DialogTitle, DialogActions, DialogContent, Stack } from "@mui/material";
import SoftInput from "components/SuiInput";
import SuiTypography from "components/SuiTypography";
import PropTypes from "prop-types";
import SoftButton from "components/SuiButton";
import SuiBox from "components/SuiBox";
import LevelApi from "api/Level";
import { useAuth } from "auth-context/auth.context";

const AddLevelModal = ({ open, columns, onClose }) => {
  let { user } = useAuth();
  const [buttonText, setButtonText] = useState("ADD NEW LEVEL");
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );
  const [error, setError] = useState(undefined);

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (values.level === "") {
      return setError("You cannot submit an empty field!");
    }
    if (values.description === "") {
      return setError(`Kindly fill up the description box that suits ${values.level}`);
    }

    setError(undefined);
    setButtonText("ADDING");
    try {
      const token = user.token;
      const name = values.level;
      const description = values.description;
      let response = await LevelApi.AddLevel({
        name,
        description,
        token,
      });
      setButtonText("ADD NEW LEVEL");
      setValues(null);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign="center">{buttonText}</DialogTitle>
      <DialogContent>
        <form>
          <Stack
            sx={{
              width: "100%",
              minWidth: { xs: "300px", sm: "360px", md: "400px" },
              gap: "1.5rem",
            }}
          >
            {columns.map((column) => (
              <SuiBox mb={2} key={column.accessorKey}>
                <SuiBox mb={1.5} ml={0.5}>
                  <SuiTypography variant="caption" fontWeight="medium">
                    {column.header}
                  </SuiTypography>
                </SuiBox>
                <SoftInput
                  key={column.accessorKey}
                  label={column.header}
                  placeholder={"Type here..."}
                  name={column.accessorKey}
                  multiline
                  rows={column.accessorKey !== "level" ? 5 : 1}
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                />
              </SuiBox>
            ))}
            <SuiBox textAlign="center">
              <p
                style={{
                  fontSize: ".8em",
                  color: "red",
                  textAlign: "center",
                  fontWeight: 300,
                  transition: ".2s all",
                }}
              >
                {error}
              </p>
            </SuiBox>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <SoftButton onClick={onClose}>Cancel</SoftButton>
        <SoftButton onClick={handleSubmit} variant="gradient" buttonColor="info" color="secondary">
          Add New Level
        </SoftButton>
      </DialogActions>
    </Dialog>
  );
};

AddLevelModal.propTypes = {
  open: PropTypes.bool.isRequired,
  columns: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  //onSubmit: PropTypes.func.isRequired,
};

export default AddLevelModal;
