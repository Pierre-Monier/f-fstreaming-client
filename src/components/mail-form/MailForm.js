import React, { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const MailForm = props => {
    const [variable, setVariable] = useState( { name: '', email: '' } );
    const [sending, setSending] = useState(false);
    const [err, setErr] = useState(false);
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
// °°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°°
    const handleChange = (type,e) => {
        setVariable({...variable, [type]: e.target.value})
    }
// °°°°°°°°°°°°°°°°°°°°°
    const handleSubmit = () => {
        setSending(true)
        let service_id = 'f_fstreaming';
        let template_id = "f_fstreamin";
        if(variable.name && variable.email.includes('@')){
            window.emailjs.send(service_id, template_id, { "name": variable.name, "email": variable.email  }).then(() => {props.onSend(props.data.good);setVariable({ name: '', email: ''  });setSending(false)}).catch(() => {props.onSend(props.data.error);setSending(false)})
        }else{
            setErr(true)
            setSending(false)
        }
    }
    return(
        <Grid container justify="space-evenly" alignItems="center" spacing={3}> 
            <Grid item xs={12} className="flex-center">
                <Typography>
                    Les comptes sont attribués uniquement pour les personnes que je connais personnellement
                </Typography>
            </Grid>
            <Grid item xs={12} className="flex-center">
                <TextField required label="Nom Prénom" placeholder="John Doe" onChange={(e) => handleChange('name', e)} value={variable.name}/>
            </Grid>
            <Grid item xs={12} className="flex-center">
                <TextField required label="Email" placeholder="johndoe@gmail.com" onChange={(e) => handleChange('email', e)} value={variable.email}/>
            </Grid>
            { err ? 
            <Grid item xs={12} className="flex-center">
                <Typography color="error">
                    Vous n'avez pas bien remplis les champs :(
                </Typography>
            </Grid>
            : null }
            <Grid item xs={12} className="flex-center">
                <Button variant="contained" color="primary" onClick={(e) => handleSubmit(e)}>
                    {sending ? props.data.onsend : props.data.send}
                </Button>
            </Grid>
        </Grid>
    )
}

export default MailForm