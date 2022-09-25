import React, { useState } from "react";
import { Dialog, DialogTitle, DialogActions, DialogContent, Stack } from "@mui/material";
import SoftInput from "components/SuiInput";
import SuiTypography from "components/SuiTypography";
import PropTypes from "prop-types";
import SoftButton from "components/SuiButton";
import SuiBox from "components/SuiBox";
import ModulesApi from "api/Module";
import { useAuth } from "auth-context/auth.context";
import Alert from "@mui/material/Alert";

const AddModule = ({ open, columns, onClose, id }) => {
  let { user } = useAuth();
  const [buttonText, setButtonText] = useState("ADD MODULE");
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ""] = "";
      return acc;
    }, {})
  );
  const [error, setError] = useState(undefined);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    if (event) {
      event.preventDefault();
    }
    if (values.module === "") {
      return setError("You cannot submit an empty field!");
    }
    if (values.description === "") {
      return setError(`Kindly fill up the description box that suits ${values.name}`);
    }

    setError(undefined);
    setButtonText("ADDING");
    try {
      const token = user.token;
      const name = values.module;
      const course_id = id;
      const description = values.description;
      let response = await ModulesApi.AddModule({
        name,
        description,
        course_id,
        token,
      });
      setButtonText("ADD NEW MODULE");
      setValues(null);
      const error = response.data.error;
      if (error) {
        setError(response.data.response);
      }
      setSuccess(true);
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
                  rows={column.accessorKey !== "module" ? 5 : 1}
                  onChange={(e) => setValues({ ...values, [e.target.name]: e.target.value })}
                />
              </SuiBox>
            ))}
            <SuiBox textAlign="center">{error && <Alert severity="error">{error}</Alert>}</SuiBox>
            <SuiBox mb={2} textAlign="center">
              {success && <Alert severity="success">Successful</Alert>}
            </SuiBox>
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: "1.25rem" }}>
        <SoftButton onClick={onClose}>Cancel</SoftButton>
        <SoftButton onClick={handleSubmit} variant="gradient" buttonColor="info" color="secondary">
          Add New Module
        </SoftButton>
      </DialogActions>
    </Dialog>
  );
};

AddModule.propTypes = {
  open: PropTypes.bool.isRequired,
  columns: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.number,
  //onSubmit: PropTypes.func.isRequired,
};

export default AddModule;
