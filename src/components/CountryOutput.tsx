import { Box } from "@material-ui/core";
import { ClassNameMap, makeStyles } from "@material-ui/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsWeather from "./DetailsWeather";

const useStyles = makeStyles(() => ({
  box: {
    // display: "flex",
    textAlign: "center",
    marginTop: 10,
  },
  bttn: {
    background: "grey",
    border: "none",
    color: "white",
    padding: "10px 20px",
    marginBottom:30
  },
  
  h2: {
    fontSize:"55px"
  },
}));

const CountryOutput = ({ cntrData }: any): JSX.Element => {
  const country: string | undefined = useParams().country;
  const [weather, setWeather] = useState<string>("");
  const [showWeather, setShowWeather] = useState(false);
  const classes: ClassNameMap = useStyles();

  const weatherData = () => {
    if (country) {
      axios
        .get(
          "http://api.weatherstack.com/current?access_key=f97561106c9153d29b4081f510940097&query=" +
            country +
            "&units=m"
        )
        .then((res) => {
          console.log("response", res);
          setWeather(res?.data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    }
  };

  useEffect(() => {
    weatherData();
  }, []);

  const handleWeatherSubmit = () => {
    setShowWeather((prev) => !prev);
    console.log("submitted");

    // return <DetailsWeather weather={weather} />;
  };

  return (
    <Box className={classes.box}>
      {!showWeather ? (
        cntrData ? (
          <Box component={"form"}>
            <p>
              <img className={classes.img} src={cntrData?.flags?.png} />{" "}
            </p>
            <h2 className={classes.h2}> {cntrData?.name?.common} </h2>
            <h1>Capital: {cntrData?.capital}</h1>
            <h1>Population: {cntrData?.population}</h1>
          </Box>
        ) : (
          <></>
        )
      ) : (
        <>
          {" "}
          <DetailsWeather weather={weather} />
        </>
      )}
      <input
        className={classes.bttn}
        type="button"
        value={!showWeather ? "CAPITAL WEATHER" : "COUNTRY DETAILS"}
        onClick={handleWeatherSubmit}
      ></input>
    </Box>
  );
};
export default CountryOutput;
