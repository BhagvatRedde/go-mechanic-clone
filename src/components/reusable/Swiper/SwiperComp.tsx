import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export const SwiperComp = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };


    return (
        <>
            <Box sx={{ maxWidth: { xs: 320, sm: 480 }, bgcolor: 'background.paper' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >

                    {/* <Grid item xs={4}>
                        <Tab {<Paper className={classes.paper}>item</Paper>}/>
                       
                    </Grid>

                    <Grid item xs={4}>
                        <Paper className={classes.paper}>item</Paper>
                    </Grid> */}
                </Tabs>
            </Box>
        </>
    );
};