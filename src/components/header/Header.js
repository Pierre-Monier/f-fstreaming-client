import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, fade, AppBar, Toolbar, InputBase, Grid, Slide, useScrollTrigger } from '@material-ui/core/';
import './Header.css';
import EndAdornment from '../end-adornment/EndAdornment';
import { filterStore } from '../../redux/filter-store/filter-store';

export default function Header() {

    const [value, setValue] = useState('');    
    const classes = useStyles();
    const trigger = useScrollTrigger();
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleChange = (e) => {
        setValue(e.target.value)
        filterStore.dispatch({ type: 'CHANGESEARCH', data: e.target.value })
        if(e.target.value.length === 1){
            window.scrollTo({
                top: 0,
                behavior: 'auto'
            })
        }
    }
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleClick = () => {
        setValue("");
        filterStore.dispatch({ type: 'CHANGESEARCH', data: "" })
    };
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar position="fixed" className={classes.wrapper}>
                    <Toolbar>
                        <Grid container alignItems="center">
                                <Grid item xs={12}className="flex-end">
                                    <div className={classes.search}>
                                        <InputBase
                                        placeholder="Filtrer..."
                                        type="text"
                                        value={value}
                                        onChange={(e) => handleChange(e)}
                                        startAdornment={<SearchIcon/>}
                                        endAdornment={<EndAdornment click={() => handleClick()} value={value}/>}
                                        autoFocus={true}
                                        size="large"
                                        className={classes.input}
                                        />
                                    </div>
                                </Grid> 
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Slide>
        );
}

const useStyles = makeStyles((theme) => ({
    wrapper: {
        transition: 'all .3s ease',
        '&:hover, &:focus': {
          backgroundColor: fade(theme.palette.primary.main, 0.85),
        },
    },
    search: {
      display: 'inline-flex',
      minWidth: '100%'
    },
    input: {
        color: 'white',
        minWidth: '100%',
        paddingLeft: '.6em'
    }
  }));