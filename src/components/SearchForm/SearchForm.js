import React, { useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button, TextField } from '@material-ui/core';
import { MoviesContext } from '../MoviesProvider';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    width: '100%',
    margin: '10px 0 15px',
  },
  input: {
    backgroundColor: 'white',
  },
  button: {
    marginLeft: '10px',
    height: '99%'
  }
});

export const SearchForm = () => {
  const [ value, setValue ] = useState('');
  const { searchMovies } = useContext(MoviesContext);
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    searchMovies({ query: value });
  };

  return (
    <Grid container spacing={1}>
      <form className={classes.form} onSubmit={submitForm}>
        <Grid item xs={11}>
          <TextField
            className={classes.input}
            fullWidth
            autoComplete="off"
            label="Поиск фильма"
            name="film"
            color="primary"
            id="outlined-basic"
            variant="outlined"
            size="medium"
            value={value}
            onChange={handleChange}
          />
        </Grid>

        <Grid item lg={1}>
          <Button className={classes.button} variant="contained" color="primary" type="submit">Поиск</Button>
        </Grid>
      </form>
    </Grid>
  );
};
