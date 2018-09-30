import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

function SingleEventPage(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Grid container spacing={24}>
            <Grid item lg={9}>
                <Paper className={classes.paper}></Paper>
            </Grid>
            <Grid item lg={3}>
                <Paper className={classes.paper}></Paper>
            </Grid>
            </Grid>
        </div>
    )
}

export default SingleEventPage