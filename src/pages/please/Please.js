import React, { useState, useEffect } from 'react';
import MailForm from '../../components/mail-form/MailForm';
import { useHistory } from 'react-router-dom';
import { Grid, Card, CardContent } from '@material-ui/core';
import CongratMessage from '../../components/congrat-message/CongratMessage';

const Please = ({isChecked}) => {
    const history = useHistory()
    const [res, setRes] = useState(false);
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    const onSend = () => {
        setRes(true)
    }
// °°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°
    useEffect(() => {
        if(isChecked){
            history.push("/movies")
        }
    }, [isChecked, history])
        return(
            <div className={ res ? "fun-please" : null }>
                <Grid container justify="center" className="container-center" alignItems="center">
                    <Grid item xs={12} className="flex-center">
                        <Card>
                            <CardContent>
                                { !res ?
                                <MailForm
                                data={{
                                    empty: "Empty",
                                    onsend: "en cours",
                                    send: "Envoyer une demande"
                                }}
                                onSend={() => onSend()}
                                /> 
                                : <CongratMessage/> }   
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
}
export default Please;