import React, { useState, useEffect } from 'react';
import { TextField, Grid, Button, Card, CardContent } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import { store } from '../../redux/store';
import { checkUser } from '../../utils/req';

const Login = ({msg, isChecked}) => {
    const history = useHistory()
    const [username, setUsername] = useState('');
    const [pw, setPw] = useState('');
    const [isFailed, setisFailed] = useState(false)
    useEffect(() => {
        if(isChecked){
            history.push("/movies")
        }
    }, [isChecked, history]);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleChange = (type, e ) => {
        if(type === 'username'){
            setUsername(e.target.value)
        }else{
            setPw(e.target.value)
        }
    }
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const handleClick = () => {
        checkUser({username: username, pw: pw}, callback)
    }
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const callback = {
        success: (user) => {
            store.dispatch({ type: 'CHECKUSER', data: user})
            history.push('/movies')
        },
        error: () => {
            setisFailed(true)
        }
    }
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    return(
        <>
            { msg ?
                <div>msg</div>
            : null}
        <Grid container justify="center" className="container-center" alignItems="flex-end">
            <Grid item xs={12} className="flex-center">
                <Card>
                    <CardContent>
                        <Grid container justify="center" alignItems="center" spacing={3}>
                            <Grid item xs={12} onChange={(e) => handleChange('username', e)} className="flex-center">
                                <TextField label="username"/>
                            </Grid>
                            <Grid item xs={12} className="flex-center">
                                <TextField label="password" type="password" onChange={(e) => handleChange('pw', e)} className="flex-center"/>
                            </Grid>
                            <Grid item xs={12} className="flex-center">
                                <Button onClick={() => handleClick()} color="primary" variant="contained">Connect</Button>
                            </Grid>
                            <Grid item xs={12}  className="flex-center">
                                { isFailed ? 'Something went wrong' : '' }
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} className="flex-center">
                <Link to="/please">Demander un compte</Link>
            </Grid>
        </Grid>
        </>
    )
}

export default Login