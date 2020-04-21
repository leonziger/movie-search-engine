import React from "react";
import { Container, Link, Paper, Typography } from '@material-ui/core';

export function Footer() {
  return(
    <Paper elevation={0}>
      <Container>
        <Typography variant="h6" component="h1" align="center">
          <Link color="primary" underline="none" href="/">Movie Search Engine. Copyright 2020</Link>
        </Typography>
      </Container>
    </Paper>
  );
};
