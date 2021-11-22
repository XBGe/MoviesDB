import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import { Typography, Container, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  singleMovie: {
    width: "90vw",
    maxWidth: "1170px",
    margin: "4rem auto",
    display: "grid",
    gap: "2rem"
  },
  "@media (min-width: 992px)": {
    singleMovie: {
      gridTemplateColumns: "1fr 2fr"
    }
  },
  img: {
    width: "100%",
    display: "block"
  },
  info: {
    textAlign: "center",
    margin: "auto 10"
  },
  btn: {
    textDecoration: "none",
    textTransform: "capitalize",
    padding: "0.25rem 0.5rem",
    background: "hsl(205, 78%, 60%)",
    color: "#fff",
    borderRadius: "0.25rem",
    display: "inline-block",
    marginTop: "1rem",
    letterSpacing: "0.1rem",
    "&:hover": {
      color: "#242424"
    }
  }
});

const SingleMovie = () => {
  const classes = useStyles();
  const { id } = useParams();
  const { isLoading, error, data: movie } = useFetch(`&i=${id}`);

  if (isLoading) {
    return <Typography variant="h2">Loading</Typography>;
  }
  if (error.show) {
    return (
      <Container>
        <Typography variant="h1">{error.msg}</Typography>
        <Link to="/" className={classes.btn}>
          back to movies
        </Link>
      </Container>
    );
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = movie;
  return (
    <Container className={classes.singleMovie}>
      <img src={poster} alt={title} className={classes.img} />
      <Paper className={classes.info}>
        <Typography variant="h2" gutterBottom>
          {title}
        </Typography>
        <Typography gutterBottom>{plot}</Typography>
        <Typography variant="h4" gutterBottom>
          {year}
        </Typography>
        <Link to="/" className={classes.btn}>
          back to movies
        </Link>
      </Paper>
    </Container>
  );
};

export default SingleMovie;
