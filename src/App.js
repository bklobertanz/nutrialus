
import {Button, Paper, Box} from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import axios from 'axios';
import { useState, useEffect } from "react";
import { Paciente } from "./components/Paciente";
import './App.css';

function App() {
  const [usuario, setUsuario] = useState({});
  const URL = "https://0q27loouph.execute-api.us-east-1.amazonaws.com/"
  const handleOnClick= () =>{
    getData();
  }
  const generateDummyString = () =>{
    const random =  Math.floor((Math.random() * 100000) + 1);
    return `?d=${random}`;
  }
  const getData = async() =>{
    const dummy = generateDummyString();
    try {
      const res = await axios.get(URL);
      if(res.status !== 200){
        console.log(`Error!`);
      }
      setUsuario({
        nombre: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
        image: res.data.image + dummy
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getData();
  },[])

  return (
  <Paper elevation={3} style={{ maxHeight: "1400px", maxWidth: "1200px", margin: "auto" }}>
    <div className="App">
      <Box display="flex" flexDirection="row" justifyContent="center">
        <PersonIcon style={{marginTop:"1.5%"}}></PersonIcon>
        <p style={{fontWeight:"bold", paddingLeft:"1%", marginBottom: "0.5%"}}>PERFIL PACIENTE</p>
      </Box>
      <hr></hr>
      <Box
      display="flex" flexDirection="row" justifyContent="center"
      >
        <Paciente 
          nombre={usuario.nombre}
          email={usuario.email}
          tel={usuario.phone}
          imagen={usuario.image}
          cambiarPaciente={handleOnClick}
        />
      </Box>
      
    </div>
  </Paper>
  );
}

export default App;
