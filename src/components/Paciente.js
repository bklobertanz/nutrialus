
export const Paciente = (props) =>{
  return(
    <>
      <h1>{props.nombre}</h1>
      <p>{props.email}</p>
      <p>{props.tel}</p>
      <img alt="avatar_usuario" src={props.imagen}></img>
    </>
  )
}