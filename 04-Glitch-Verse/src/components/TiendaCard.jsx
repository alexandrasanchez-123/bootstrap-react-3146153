import React from "react";
import "../Styles/Tienda.css"
export const TiendaCard = () => {
  return (
    <section
  className="container d-flex flex-column align-items-center gap-5 py-5"
>
  {/* Título */}
  <h2
    className="fw-bold text-center px-4 py-2 rounded-pill"
    style={{ backgroundColor: "#a8d5c2", color: "#000", fontSize: "1.4rem" }}
  >
    PRODUCTOS DESTACADOS
  </h2>

  {/* Banner */}
  <div
    className="w-100 p-4 rounded d-flex align-items-center gap-3 shadow"
    style={{ backgroundColor: "#cfe3f5", maxWidth: "1100px" }}
  >
    <img
      src="../public/zapatos (2).png"
      alt="Banner"
      className="rounded"
      style={{ width: "21%" }}
    />

    <p className="m-0" style={{ width: "55%", color: "#333" }}>
      "Glitch Verse es más que una tienda: es una experiencia distópica donde los cómics se viven en cada página y se visten en cada prenda. Desde camisetas, suéteres, vasos, libros y zapatos hasta nuestras exclusivas tabletas diseñadas solo para leer nuestros cómics… aquí todo está pensado para que entres al glitch y no quieras salir."
    </p>
  </div>

  {/* Productos */}
 <div
  className="row w-100 justify-content-center"
  style={{ maxWidth: "1100px", cursor: "pointer" }}
>
  {/* Producto 1 */}
  <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
    <div className="card text-center shadow-sm rounded-4 p-3 product-card">
      <img className="card-img-top" src="../public/camisa-blanca.png" alt="Camiseta GlitchVerse" />
      <p className="mt-3 fw-semibold">Camiseta de seda Glitch Verse</p>
      <p className="fw-bold">$40.000</p>
    </div>
  </div>

  {/* Producto 2 */}
  <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
    <div className="card text-center shadow rounded-4 p-3 border border-dark product-card">
      <img className="card-img-top" src="../public/buso-blanco.png" alt="Hoodie GlitchVerse" />
      <p className="mt-3 fw-semibold">Suéter de seda Glitch Verse</p>
      <p className="fw-bold">$80.000</p>
    </div>
  </div>

  {/* Producto 3 */}
  <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
    <div className="card text-center shadow-sm rounded-4 p-3 product-card">
      <img className="card-img-top" src="../public/cuaderno-blanco.png" alt="Cuaderno GlitchVerse" />
      <p className="mt-3 fw-semibold">Cuaderno 150 hojas Glitch Verse</p>
      <p className="fw-bold">$30.000</p>
    </div>
  </div>

  {/* Producto 4 */}
  <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
    <div className="card text-center shadow-sm rounded-4 p-3 product-card">
      <img className="card-img-top" src="../public/cuaderno-negro.png" alt="Cuaderno GlitchVerse" />
      <p className="mt-3 fw-semibold">Cuaderno 150 hojas Glitch Verse</p>
      <p className="fw-bold">$30.000</p>
    </div>
  </div>

  {/* Producto 5 */}
  <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
    <div className="card text-center shadow rounded-4 p-3 border border-dark product-card">
      <img className="card-img-top" src="../public/buso-negro.png" alt="Hoodie GlitchVerse" />
      <p className="mt-3 fw-semibold">Suéter Negro de seda Glitch Verse</p>
      <p className="fw-bold">$80.000</p>
    </div>
  </div>

  {/* Producto 6 */}
  <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
    <div className="card text-center shadow-sm rounded-4 p-3 product-card">
      <img className="card-img-top" src="../public/camisa-negra.png" alt="Camiseta GlitchVerse" />
      <p className="mt-3 fw-semibold">Camiseta Negra de seda Glitch Verse</p>
      <p className="fw-bold">$40.000</p>
    </div>
  </div>

  {/* Producto 7 */}
  <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
    <div className="card text-center shadow-sm rounded-4 p-3 product-card">
      <img className="card-img-top" src="../public/termo.png" alt="Termo GlitchVerse" />
      <p className="mt-3 fw-semibold">Termo edición especial Glitch Verse</p>
      <p className="fw-bold">$50.000</p>
    </div>
  </div>

  {/* Producto 8 */}
  <div className="col-12 col-sm-6 col-md-4 mb-4 d-flex justify-content-center">
    <div className="card text-center shadow-sm rounded-4 p-3 product-card">
      <img className="card-img-top" src="../public/tablet.png" alt="Tablet GlitchVerse" />
      <p className="mt-3 fw-semibold">Tablet edición especial Glitch Verse</p>
      <p className="fw-bold">$150.000</p>
    </div>
  </div>
</div>
</section>
  );
};