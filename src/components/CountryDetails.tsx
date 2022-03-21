import { Box } from "@material-ui/core";
import { Params, useParams } from "react-router-dom";
import Form from "./Form";
import axios from "axios";
import CountryOutput from "./CountryOutput";
import { type } from "os";
import { FormEvent, useEffect, useState } from "react";
import { TextField } from "material-ui";
// import { FormEvent } from "react";

// type  CountryDetailsType={cntrData:string}

const CountryDetails = (): JSX.Element => {
  const country: string | undefined = useParams().country;
  const [cntrData, setCountryData] = useState<string>("");

  function CountryData() {
    axios
      .get("https://restcountries.com/v3.1/name/{" + country + "}")
      .then((resCo) => {
        console.log("country response", resCo?.data[0]);
        setCountryData(resCo?.data);
      })
      .catch((err1) => {
        console.log("error country", err1);
      });
  }

  useEffect(() => {
    CountryData();
  }, []);
  //   console.log("abcdef", country);

  return (
    <>
      <div>{cntrData ? <CountryOutput cntrData={cntrData?.[0]} /> : <></>}</div>
    </>
  );
};

export default CountryDetails;
