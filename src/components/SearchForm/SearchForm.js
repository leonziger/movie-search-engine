import React from "react";
import { Grid, Button, TextField } from '@material-ui/core';
import './SearchForm.css';

export const SearchForm  = (props) => {
  return (
    <Grid container spacing={1}>
      <form className="search-form">
        <Grid item lg={11}>
          <TextField
            InputProps = {{className : 'whiteBg'}}
            label="Поиск фильма"
            name="film"
            color="primary"
            id="outlined-basic"
            variant="outlined"
            fullWidth
            size="medium"
            value={props.query}
            onChange={props.onChange}
          />
        </Grid>
        <Grid item lg={1}>
          <Button variant="contained" color="primary" onClick={props.submitForm}>Поиск</Button>
        </Grid>
      </form>
    </Grid>
  );
};
