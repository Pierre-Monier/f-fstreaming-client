import React from 'react';
import { Fab, useScrollTrigger, Zoom } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import './ScroolTop.css';

const ScroolTop = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
      });
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })

    }
    return(
        <Zoom in={trigger}>
            <div className="btn-abs" onClick={() => handleClick()}>
                <Fab color="primary" aria-label="scrool back to top">
                    <KeyboardArrowUpIcon/>
                </Fab>
            </div>
        </Zoom>
    )
}

export default ScroolTop;