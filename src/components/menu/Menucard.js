import React from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Grid
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import meal from "./menuImage.jpg"

const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
        margin: 20,

    },

    card: {
        maxWidth: 300,

    },
    media: {
        height: 300,
        width: 300,

    },
}));


const catagory = ['breakfast', "lunch", "dinner"]


export default function Menucard() {

    const classes = useStyles();

    const listItems = catagory.map(item =>
        <Grid item alignContent="space-evenly" style={{ paddingBottom: 20 }}>
            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia className={classes.media}
                        image={meal}
                        title="Food"
                    />
                    <CardContent>
                        <Typography variant="h5" component="h2" align="center">
                            {item.toUpperCase()}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>

    )

    return (
        <div className={classes.root}>
            <Grid container direction="row" justify="space-evenly" alignItems="center" >
                {listItems}
            </Grid>

        </div>
    )
}
