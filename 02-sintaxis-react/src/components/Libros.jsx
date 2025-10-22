export function Libros ({image, userBook, descripcion}){
    return(
      <>
      <h1>{userBook}</h1>
      <img src={image} alt="" width="280"/>
      <p>{descripcion}</p>

      </> 
       
    )
}