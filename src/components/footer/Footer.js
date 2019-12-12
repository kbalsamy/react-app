import React from 'react';
import { Paper, Typography } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({

    root: {

        display: "flex",
        flexGrow: 1,
        height: 64,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center"


    }
});


export default function Footer() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Typography variant="subtitle2" color="secondary"> Name and Address of the Mess</Typography>
        </div>
    )
}
