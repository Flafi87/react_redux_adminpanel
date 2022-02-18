import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { MODAL_STATE, GET_ONE_USER, DELETE_MODAL_STATE } from "../redux/types";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const commonStyles = {
  border: 1,
  borderColor: "text.primary",
};

const User = ({ user, smallScreen }) => {
  const dispatch = useDispatch();

  const { id, name, username, email, address } = user;
  const { city } = address;

  const handleEdit = () => {
    dispatch({
      type: GET_ONE_USER,
      payload: user,
    });
    dispatch({
      type: MODAL_STATE,
      payload: {
        open: true,
        title: "Edit User Data",
      },
    });
  };

  const handleDelete = () => {
    dispatch({
      type: GET_ONE_USER,
      payload: { id, name, email, address: { city } },
    });
    dispatch({ type: DELETE_MODAL_STATE, payload: true });
  };

  const smallScreenView = (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography variant="h5">{name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          container
          display={"flex"}
          justifyContent={"center"}
          flexDirection={"column"}
          sx={{ ".MuiTypography-root": { textAlign: "center" } }}
        >
          <Box>
            <Typography variant="h6">ID: {id}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">USERNAME: {username}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">E-MAIL: {email}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">CITY: {city}</Typography>
          </Box>

          <Grid item md={1} display="flex" justifyContent={"space-between"}>
            <Box>
              <Button
                onClick={handleEdit}
                variant="contained"
                sx={{
                  color: "white",
                  backgroundColor: "#edb065",
                  ":hover": {
                    backgroundColor: "#f28704",
                  },
                }}
              >
                edit
              </Button>
            </Box>
            <Box>
              <Button variant="contained" color="error" onClick={handleDelete}>
                delete
              </Button>
            </Box>
          </Grid>
        </Box>
      </AccordionDetails>
    </Accordion>
  );

  if (smallScreen) {
    return smallScreenView;
  } else {
    return (
      <Grid
        container
        columns={7}
        sx={{
          ...commonStyles,
          borderBottom: 0,
          borderRight: 0,
          borderLeft: 0,
          textAlign: "center",
          columns: {
            xs: 2,
          },
        }}
        justifyContent="space-between"
        alignItems="center"
        wrap="wrap"
      >
        <Grid item md={1}>
          <p>{id}</p>
        </Grid>
        <Grid item md={1}>
          <p>{name}</p>
        </Grid>
        <Grid item md={1}>
          <p>{username}</p>
        </Grid>
        <Grid item md={1}>
          <p>{email}</p>
        </Grid>
        <Grid item md={1}>
          <p>{city}</p>
        </Grid>

        <Grid item md={1} display="flex" justifyContent={"space-between"}>
          <Button
            onClick={handleEdit}
            variant="contained"
            sx={{
              color: "white",
              backgroundColor: "#edb065",
              ":hover": {
                backgroundColor: "#f28704",
              },
            }}
          >
            edit
          </Button>
          <Button variant="contained" color="error" onClick={handleDelete}>
            delete
          </Button>
        </Grid>
      </Grid>
    );
  }
};

export default User;
