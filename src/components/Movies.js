import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const useStyles = makeStyles({
  cardGrid: {
    padding: "20px 0"
  },
  card: {
    maxWidth: "345px"
  },
  cardMedia: {
    height: "300px",
    paddingTop: "56.25%"
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center"
  },
  loading: {
    textAlign: "center",
    color: "green"
  }
});

const Movies = () => {
  const classes = useStyles();
  const { movies, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <Typography variant="h2" className={classes.loading}>
        Loading
      </Typography>
    );
  }
  return (
    <Container maxWidth="md" className={classes.cardGrid}>
      <Grid container spacing={4}>
        {movies.map((movie) => {
          const {
            imdbID: id,
            Poster: poster,
            Title: title,
            Year: year
          } = movie;

          return (
            <Grid item key={id} xs={6} sm={3}>
              <Link to={`/movies/${id}`}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.cardMedia}
                      image={poster === "N/A" ? url : poster}
                      alt={title}
                    />
                    <CardContent className={classes.cardContent}>
                      <Typography variant="h6">{title}</Typography>
                      <Typography>{year}</Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Link>
            </Grid>
          );
        }) }
      </Grid>
    </Container>
  );
};

export default Movies;
