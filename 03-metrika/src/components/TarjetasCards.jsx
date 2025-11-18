
import "../styles/TarjetasCards.css";

export const TarjetasCards = () => {
  return (
     <div className="tarjetas-container">

      {/* 🟩 COLUMNA 1 */}
      <div className="columna">
        <div className="tarjeta-row">
          <div className="tarjeta-mini" style={{ background: "#5cb3a1" }}>
            <i className="bi bi-book icono"></i>
            <h2>About Us</h2>
          </div>

          <div className="tarjeta-mini" style={{ background: "#69b190" }}>
            <i className="bi bi-people icono"></i>
            <h2>Our Team</h2>
          </div>

          <div className="tarjeta-large" style={{ background: "#c25b47" }}>
            <i className="bi bi-download icono"></i>
            <h2>Resume</h2>
          </div>
        </div>
      </div>

      {/* 🟩 COLUMNA 2 */}
      <div className="columna">
        <div className="tarjeta-xl" style={{ background: "#3aa1d8" }}>
          <i className="bi bi-images icono"></i>
          <h2>Our Works</h2>
        </div>
      </div>

      {/* 🟩 COLUMNA 3 */}
      <div className="columna">
        <div className="tarjeta-row">

          <div className="tarjeta-large" style={{ background: "#c05a78" }}>
            <i className="bi bi-geo-alt icono"></i>
            <h2>Contacts</h2>
          </div>

          <div className="tarjeta-mini" style={{ background: "#d87535" }}>
            <i className="bi bi-pencil-square icono"></i>
            <h2>Blog</h2>
          </div>

          <div className="tarjeta-mini" style={{ background: "#e29e35" }}>
            <i className="bi bi-envelope icono"></i>
            <h2>Feedback</h2>
          </div>

        </div>
      </div>
    </div>
  );
};