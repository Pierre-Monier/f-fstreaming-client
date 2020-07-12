import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import ClearIcon from "@material-ui/icons/Clear";


const EndAdornment = ({value, click}) => {

    const handleMouseDown = event => {
        event.preventDefault();
    };
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    if(value){ 
        return (
          <InputAdornment position="end">
            <IconButton
              onClick={click}
              onMouseDown={handleMouseDown}
              color="inherit"
            >
              <ClearIcon />
            </IconButton>
          </InputAdornment>
        );
      }
      return "";
    };

export default EndAdornment;