import React from 'react';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const CongratMessage = () => {
    return(
        <Grid container justify="space-evenly" alignItems="center" spacing={3}> 
            <Grid item xs={12} className="flex-center">
                <Typography variant="h3" component="h3" className="text-center">
                    Vous recevrez vos identifiants par mail prochainement :)
                </Typography>
            </Grid>
        </Grid>
    )
}

export default CongratMessage