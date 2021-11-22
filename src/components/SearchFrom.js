import { useGlobalContext } from "./context";
import { Container, Typography, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  searchForm: {
    margin: "0 auto",
    marginTop: "5rem",
    marginBottom: "3rem"
  },
  error: {
    color: "hsl(360, 67%, 44%)",
    textTransform: "capitalize",
    paddingTop: "0.5rem",
    letterSpacing: "0.1rem"
  }
});

const SearchForm = () => {
  const classes = useStyles();
  const { query, setQuery, error } = useGlobalContext();
  return (
    <Container maxWidth="lg">
      <form className={classes.searchForm} onSubmit={(e) => e.preventDefault()}>
        <Typography variant="h2" color="primary" align="center" gutterBottom>
          Search Movies
        </Typography>
        <TextField
          label="Search Movies"
          variant="outlined"
          fullWidth
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {error.show && (
          <Typography className={classes.error}>{error.msg}</Typography>
        )}
      </form>
    </Container>
  );
};

export default SearchForm;