import React, { FormEvent, ChangeEvent, useState } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { useNavigate, NavigateFunction, useParams } from "react-router";
import { ClassNameMap, makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  box: {
    textAlign: "center",
    marginTop:25,
  },
  
  input: {
    marginRight:10,

  },
}));

function Form(): JSX.Element {
  const navigate: NavigateFunction = useNavigate();
  const [country, setCountry] = useState<string>("");
  // const [cntrData, setCountryData] = useState<string>("");

  // const params = useParams();
  // const { state = {country}} = params;
  const classes: ClassNameMap = useStyles();

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("countryInput", country);

    navigate(`/${country}`);
  };

  return (
    <Box component="form" className={classes.box} onSubmit={handleSubmit}>
      <h1>Country Details</h1>
      <TextField
      InputProps={{className: classes.input}}
        type={"text"}
        required
        placeholder="Enter Country"
        value={country}
        onChange={handleChange}
        
      ></TextField>
      <Button variant={"contained"} type="submit">
        Search
      </Button>
    </Box>
  );
}
export default Form;
