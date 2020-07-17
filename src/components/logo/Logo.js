import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Logo = () => {
    
        return(
            <Grid item xs={2}>
                <Grid container alignItems="center">
                    <Grid item xs={8} sm={11} lg={8}>
                        <Link to="/movies">
                            <img src='/logo.png' alt="logo" className="logo"/>
                        </Link>
                    </Grid>
                </Grid>
            </Grid> 
        )
}

export default Logo;