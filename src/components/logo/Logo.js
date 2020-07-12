import React, { useState, useEffect } from 'react';
import { Link,  useLocation } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

/*


WARNING, SOME LOGIC HAS BEEN REMOVE TEMPORARY FOR PRODUCTION PURPOSE

*/

const Logo = () => {
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
            <Grid item xs={2}>
                <Grid container alignItems="center">
                    <Grid item xs={8} sm={11} lg={8}>
                        <Link to={isHomed ? "/movies" : "/series"}>
                            <img src={isHomed ? '/logo.png' : '/logo2.gif'} alt="logo" className="logo"/>
                        </Link>
                    </Grid>
                </Grid>
            </Grid> 
        )
}

export default Logo;