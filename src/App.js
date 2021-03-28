
import {Button, Paper} from '@material-ui/core';
import axios from 'axios';
import { useState, useEffect } from "react";
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
    <div className="App">
      <Paper elevation={3}>
      <div>
        <h1>{usuario.nombre}</h1>
        <p>{usuario.email}</p>
        <p>{usuario.phone}</p>
        <img alt="avatar_usuario" src={usuario.image}></img>
        <hr/>
      </div>
      <Button onClick={handleOnClick} variant="contained" color="primary">
          cambiar
      </Button>
      </Paper>
    </div>
  );
}

export default App;
