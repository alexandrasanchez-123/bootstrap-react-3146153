import React from 'react'
import "./Extencion.css"


export const ExtensionCard = ({cardTitle,cardImage, cardDescripton,}) => {
  return (
    <>
    <div>
     

    <div className='caja'>
    <img className='imagen' src={cardImage} alt="" />
    <h1 className='title'>{cardTitle}</h1>
   <p className='descrip'>{cardDescripton}</p>
   <button className='boton'>Remove</button>
   </div>

   </div>
    </>
  )
}
