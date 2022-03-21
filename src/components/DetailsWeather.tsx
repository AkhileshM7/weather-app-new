import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { ClassNameMap, makeStyles } from "@material-ui/styles";
import { classicNameResolver, createClassExpression } from "typescript";


const useStyles = makeStyles(()=> ({
    root3: {
       minWidth: 275,
       marginLeft:500,
       marginRight:500,
       marginTop:45,
        alignContent:"center",
    },
    typog: {
        fontSize:22,
        fontFamily:"times new roman"
    }
}));

const DetailsWeather = ({ weather }: any) => {

    const classes: ClassNameMap = useStyles();

  return (
    <>
      {weather ? (
        <Card className={classes.root3}>
          <CardContent>
            <Typography className={classes.typog}>Location: {weather?.location?.country}</Typography>
            <Typography className={classes.typog}>
              Weather: {weather?.current?.temperature}°C. Feels like:{" "}
              {weather?.current?.feelslike}°C
            </Typography>
            <Typography className={classes.typog}>Humidity: {weather?.current?.humidity}%</Typography>
            <Typography className={classes.typog}>
              Wind Speed: {weather?.current?.wind_speed}kmph
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
    </>
  );
};
export default DetailsWeather;
