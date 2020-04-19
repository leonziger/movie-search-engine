import React from "react";
import { Container, Paper, Typography } from '@material-ui/core';
import { SearchForm } from '../SearchForm';
import './Header.css';

export const Header = (props) => {

    return (
        <Paper position="fixed">
            <Container>
                <Typography variant="h1" component="h2">
                    <a className="header-title" href="/">Movie Search Engine</a>
                </Typography>
                <SearchForm
                    query={props.query}
                    page={props.page}
                    totalPages={props.totalPages}
                    onChange = {props.handleChange}
                    formSubmitHandler={props.formSubmitHandler}
                    submitForm={props.submitForm}
                />
            </Container>
        </Paper>
    );
};
