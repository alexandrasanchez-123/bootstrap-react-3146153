export function UserCard ({image, userName}){
    return(
      <>
      <h1>{userName}</h1>
      <img src={image} alt="" width="280"/>
      <small>{userName}</small>
      </> 
       
    )
}