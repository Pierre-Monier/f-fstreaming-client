import React, { useState, useEffect, useRef } from 'react';
import { Link,  useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import SwitchLink from '../switch-link/SwitchLink'

/*


WARNING, SOME LOGIC HAS BEEN REMOVE TEMPORARY FOR PRODUCTION PURPOSE

*/

const Logo = props => {
    const selfRef = useRef()
    const {pathname} = useLocation() 
    const [isHomed, setIsHomed] = useState(true);

// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
        if(pathname.includes("/series")){
            setIsHomed(false)
        }else{
            setIsHomed(true)
        }
    }, [pathname]);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
        return(
            <Grid item xs={12} sm={2} lg={1}ref={selfRef}>
                <Grid container alignItems="center">
                    <Grid item xs={8} sm={11} lg={8}>
                        <Link to={isHomed ? "/movies" : "/series"}>
                            <img src={isHomed ? '/logo.png' : '/logo2.gif'} alt="logo" className="logo"/>
                        </Link>
                    </Grid>
                    {props.loading ? null : !props.filterActive ? null : null
                    // <Grid item xs={4} sm={1} lg={4}>
                    //     <SwitchLink/>
                    // </Grid>
                    }
                </Grid>
            </Grid> 
        )
}

export default Logo;