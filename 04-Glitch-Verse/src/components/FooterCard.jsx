import React from 'react'
import "../Styles/Footer.css"
export const FooterCard = () => {
  return (
      <footer className="footer-container">

      {/* CONTENEDOR PRINCIPAL */}
      <div className="footer-content">

        {/* Columna 1 */}
        <div className="footer-column">
          <h3>Tienda</h3>
          <ul>
            <li>Accesorias</li>
            <ul className="sub-list">
              <li>Moda</li>
              <li>Mujer</li>
              <li>Hombre</li>
            </ul>
          </ul>
        </div>

        {/* Columna 2 */}
        <div className="footer-column">
          <h3>Links Importantes</h3>
          <ul>
            <li>Condiciones de uso</li>
            <li>Políticas de seguridad</li>
            <li>Políticas de privacidad</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="footer-social">
          <img src="../public/tij-tok.png" alt="tiktok" />
          <img src="../public/insta.png" alt="instagram" />
       
          <img src="../public/facebook (2).png" alt="facebook" />
        
          <img src="../public/whass.png" alt="whatsapp" />
         
        </div>

      </div>

      {/* PARTE INFERIOR */}
      <div className="footer-bottom">
        <p>Políticas de seguridad</p>
        <p>©2025 - CleverPrototypes, LLC</p>
        <p>-Reservados todos los derechos.</p>
      </div>

    </footer>
  )
}
