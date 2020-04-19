import React from "react";
import { Container, Link, Paper, Typography } from '@material-ui/core';
import { SearchForm } from '../SearchForm';
import './Header.css';

export const Header = (props) => {

    return (
        <Paper elevation={0}>
            <Container>
                <Typography variant="h6" component="h1" color="textPrimary" align="center">
                    <Link color="primary" underline="none" href="/">Movie Search Engine</Link>
                </Typography>
                <SearchForm
                    query={props.query}
                    currentPage={props.currentPage}
                    totalPages={props.totalPages}
                    onChange = {props.handleChange}
                    formSubmitHandler={props.formSubmitHandler}
                    submitForm={props.submitForm}
                />
            </Container>
        </Paper>
    );
};
