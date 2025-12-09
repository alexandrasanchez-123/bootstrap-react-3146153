import React from "react";

export const FooterCard = () => {
  return (
    <footer
      className="w-100 py-5"
      style={{ backgroundColor: "#c7daea" }}
    >
      {/* CONTENEDOR PRINCIPAL */}
      <div
        className="container d-grid"
        style={{
          maxWidth: "1100px",
          gap: "40px",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        }}
      >
        {/* Columna 1 */}
        <div>
          <h3 className="fw-bold text-center mb-3" style={{ fontSize: "1.4rem" }}>
            Tienda
          </h3>

          <ul className="ps-3" style={{ cursor: "pointer", textDecoration: "underline dotted" }}>
            <li>Accesorias</li>

            <ul className="ps-3 mt-2" style={{ listStyle: "circle" }}>
              <li>Moda</li>
              <li>Mujer</li>
              <li>Hombre</li>
            </ul>
          </ul>
        </div>

        {/* Columna 2 */}
        <div>
          <h3 className="fw-bold text-center mb-3" style={{ fontSize: "1.4rem" }}>
            Links Importantes
          </h3>

          <ul className="ps-3" style={{ cursor: "pointer", textDecoration: "underline dotted" }}>
            <li>Condiciones de uso</li>
            <li>Políticas de seguridad</li>
            <li>Políticas de privacidad</li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="d-flex justify-content-center align-items-center gap-4">
          <img
            src="../public/tij-tok.png"
            alt="tiktok"
            style={{ width: "50px", cursor: "pointer" }}
          />

          <img
            src="../public/insta.png"
            alt="instagram"
            style={{ width: "50px", cursor: "pointer" }}
          />

          <img
            src="../public/facebook (2).png"
            alt="facebook"
            style={{ width: "50px", cursor: "pointer" }}
          />

          <img
            src="../public/whass.png"
            alt="whatsapp"
            style={{ width: "50px", cursor: "pointer" }}
          />
        </div>
      </div>

      {/* PARTE INFERIOR */}
      <div
        className="container mt-4 text-center"
        style={{ maxWidth: "1100px", fontSize: "0.9rem", lineHeight: "1.5" }}
      >
        <p>Políticas de seguridad</p>
        <p>©2025 - CleverPrototypes, LLC</p>
        <p>-Reservados todos los derechos.</p>
      </div>
    </footer>
  );
};