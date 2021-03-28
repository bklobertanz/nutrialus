import { Grid, Box, Button } from '@material-ui/core';
import MailIcon from '@material-ui/icons/Mail';
import PhoneIcon from '@material-ui/icons/Phone';

export const Paciente = (props) =>{
  return(
    <>
      <img alt="avatar_usuario" src={props.imagen}></img>
      <Grid style={{marginLeft:"4%"}}>
        <h1>{props.nombre}</h1>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <MailIcon style={{marginTop:"5%"}}></MailIcon>
          <p style={{paddingLeft:"2%"}}>{props.email}</p>
        </Box>
        <Box display="flex" flexDirection="row" justifyContent="center">
          <PhoneIcon style={{marginTop:"5%"}}></PhoneIcon>
          <p style={{paddingLeft:"2%"}}>{props.tel}</p>
        </Box>
        <p></p>
        <Button onClick={props.cambiarPaciente} variant="contained" color="primary">
         Cambiar
        </Button>
      </Grid>
    </>
  )
}