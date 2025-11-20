
import "../styles/TarjetasCards.css";

export const TarjetasCards = () => {
  return (
     <div className="tarjetas-container">

      
      <div className="columna">
        <div className="tarjeta-row">
          <div className="tarjeta-mini" style={{ background: "#5cb3a1" }}>
            <i className="bi bi-book icono"></i>
            <img className="icono" src="../public/libro (3).png" alt="" />
            <h2>About Us</h2>
          </div>

          <div className="tarjeta-mini" style={{ background: "#69b190" }}>
            <i className="bi bi-people icono"></i>
            <img className="icono" src="../public/our.png" alt="" />
            <h2>Our Team</h2>
          </div>

          <div className="tarjeta-large" style={{ background: "#c25b47" }}>
            <i className="bi bi-download icono"></i>
            <img className="icono" src="../public/descargas.png" alt="" />
            <h2>Resume</h2>
          </div>
        </div>
      </div>

      
      <div className="columna">
        <div className="tarjeta-xl" style={{ background: "#3aa1d8" }}>
          <i className="bi bi-images icono"></i>
          <img className="icono1" src="../public/imagenes.png" alt="" />
          <h2>Our Works</h2>
        </div>
      </div>

      
      <div className="columna">
        <div className="tarjeta-row">

          <div className="tarjeta-large" style={{ background: "#c05a78" }}>
            <i className="bi bi-geo-alt icono"></i>
            <img className="icono" src="../public/contacs-removebg-preview.png" alt="" />
            <h2>Contacts</h2>
          </div>

          <div className="tarjeta-mini" style={{ background: "#d87535" }}>
            <i className="bi bi-pencil-square icono"></i>
            <img className="icono" src="../public/lapiz (2).png" alt="" />
            <h2>Blog</h2>
          </div>

          <div className="tarjeta-mini" style={{ background: "#e29e35" }}>
            <i className="bi bi-envelope icono"></i>
            <img className="icono" src="../public/postal.png" alt="" />
            <h2>Feedback</h2>
          </div>

        </div>
      </div>
    </div>
  );
};