import React from 'react';
import { Fab } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import './FloatBtn.css';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';

const FloatBtnHome = () => {

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

    }
    return(
        <Fade bottom>
            <div className="btn-abs" onClick={() => handleClick()}>
                <Link to="/movies">
                    <Fab color="primary" aria-label="scrool back to top">
                        <HomeIcon/>
                    </Fab>
                </Link>
            </div>
        </Fade>
    )
}

export default FloatBtnHome;
