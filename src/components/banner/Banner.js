import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import { display, flexbox } from '@material-ui/system'
import Hero from "./meal.jpg"


const useStyles = makeStyles(theme => ({

    root: {

        backgroundColor: "lightblue",
        margin: 10,
        height: 300,
    },

    cover: {
        height: "300px",
        width: "100%",
        objectFit: "cover",
        objectPosition: "right"
    }

}))

export default function Banner() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <img className={classes.cover} src={Hero} />
        </div>
    )
}
