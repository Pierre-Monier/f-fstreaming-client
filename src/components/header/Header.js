import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, fade, AppBar, Toolbar, InputBase, Grid, Slide, useScrollTrigger } from '@material-ui/core/';
import './Header.css';
import EndAdornment from '../end-adornment/EndAdornment';
import Logo from '../logo/Logo';
import { useHistory } from 'react-router-dom';
import { filterStore } from '../../redux/filter-store/filter-store';

export default function Header() {

    const history = useHistory()
    const [value, setValue] = useState('');    
    const classes = useStyles();
    // const { window } = props;
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
// Crée un composant LOGO qui permet de choisir entre FILM et SERIE, rester appyer dessus permet de changer de composant PAGE (ROOT/ROOTSERIES)
    if(history.location.pathname !== "/" && history.location.pathname !== "/please"){
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Logo/> 
                                <Grid item xs={10}className="flex-end">
                                    <div className={classes.search}>
                                        <div className={classes.searchIcon}>
                                            <SearchIcon/>
                                        </div>
                                        <div>
                                            <InputBase
                                            placeholder="Filtrer..."
                                            type="text"
                                            value={value}
                                            onChange={(e) => handleChange(e)}
                                            endAdornment={<EndAdornment click={() => handleClick()} value={value}/>}
                                            autoFocus={true}
                                            size="large"
                                            className={classes.input}
                                            />
                                        </div>
                                    </div>
                                </Grid> 
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Slide>
        );
    }else{
        return null;
    }
}

const useStyles = makeStyles((theme) => ({
    search: {
    //   position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      '&:focus': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      display: 'inline-flex',
      padding: '.6em',
    //   boxShadow: '7px 7px 14px #575757, -7px -7px 14px #6b6b6b;',
      transition: 'all .3s ease',
    },
    searchIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        color: 'white'
    }
  }));