
import {Button, Paper} from '@material-ui/core';
import axios from 'axios';
import { useState } from "react";
import './App.css';

function App() {
  const [usuario, setUsuario] = useState({});
  const URL = "https://0q27loouph.execute-api.us-east-1.amazonaws.com/"
  const handleOnClick= async() =>{
    const res = await axios.get(URL);
    if(res.status === 200){
      setUsuario({
        nombre: res.data.name,
        email: res.data.email,
        phone: res.data.phone,
        image: res.data.image,
      })
    }
    console.log(usuario);
  }
  return (
    <div className="App">
      <Paper elevation={3} />
      <Button onClick={handleOnClick} variant="contained" color="primary">
          cambiar
      </Button>
      <div>
        <h1>Usuario</h1>
        <hr/>
      </div>
    </div>
  );
}

export default App;
