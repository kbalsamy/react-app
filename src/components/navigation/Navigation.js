import React from 'react';
import {
    Box,
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Icon,
    Badge
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"


const useStyles = makeStyles(theme => ({

    root: {
        flexGrow: 1,
    },
    brand: {
        flexGrow: 1,
    },

    tools: {
        marginRight: theme.spacing(2),
    }

}))

export default function Navigation() {

    const classes = useStyles()

    return (
        <Box className={classes.root} >
            <AppBar position="sticky">
                <Toolbar>
                    <Typography className={classes.brand}>Brand</Typography>
                    <Button className={classes.tools} variant="outlined" color="inherit">Order Online</Button>
                    <IconButton color="inherit" edge="end" disabled >
                        <Badge color="secondary" badgeContent={0} showZero>
                            <Icon>add_shopping_cart</Icon>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
