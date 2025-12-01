import React from 'react'
import "../Styles/Tienda.css"

export const TiendaCard = () => {
  return (
    <section className="tienda-container">
<h2 className="titulo-destacados">PRODUCTOS DESTACADOS</h2>


<div className="banner-tienda">
<img src="../public/zapatos (2).png" alt="Banner" className="banner-img" />
<p className="banner-texto">
"Glitch Verse es más que una tienda: es una experiencia distópica donde los cómics se viven en cada página y se visten en cada prenda. Desde camisetas, suéteres, vasos, libros y zapatos hasta nuestras exclusivas tabletas diseñadas solo para leer nuestros cómics… aquí todo está pensado para que entres al glitch y no quieras salir."
</p>
</div>


{/* Productos */}
<div className="productos-grid">
{/* Producto 1 */}
<div className="producto-card">
<img className="imagen" src="../public/camisa-blanca.png" alt="Camiseta GlitchVerse" />
<p className="producto-nombre">Camiseta de seda Glitch Verse</p>
<p className="producto-precio">$40.000</p>
</div>


{/* Producto 2 */}
<div className="producto-card seleccionado">
<img src="../public/buso-blanco.png" alt="Hoodie GlitchVerse" />
<p className="producto-nombre">Suéter de seda Glitch Verse</p>
<p className="producto-precio">$80.000</p>
</div>


{/* Producto 3 */}
<div className="producto-card">
<img src="../public/cuaderno-blanco.png" alt="Cuaderno GlitchVerse" />
<p className="producto-nombre">Cuaderno 150 hojas Glitch Verse</p>
<p className="producto-precio">$30.000</p>
</div>


{/* Producto 4 */}
<div className="producto-card">
<img src="../public/cuaderno-negro.png" alt="Gorra GlitchVerse" />
<p className="producto-nombre">Cuaderno Negro  150 hojas Glitch Verse</p>
<p className="producto-precio">$30.000</p>
</div>


{/* Producto 5 */}
<div className="producto-card seleccionado">
<img src="../public/buso-negro.png" alt="Hoodie GlitchVerse" />
<p className="producto-nombre">Suéter Negro de seda Glitch Verse</p>
<p className="producto-precio">$80.000</p>
</div>



{/* Producto 6 */}
<div className="producto-card">
<img className="imagen" src="../public/camisa-negra.png" alt="Camiseta GlitchVerse" />
<p className="producto-nombre">Camiseta Negra de seda Glitch Verse</p>
<p className="producto-precio">$40.000</p>
</div>


{/* Producto 7 */}
<div className="producto-card-1">
<img src="../public/termo.png" alt="Poster GlitchVerse" />
<p className="producto-nombre">Termo edición especial Glitch Verse</p>
<p className="producto-precio">$50.000</p>
</div>

<div className="producto-card">
<img className="tablet" src="../public/tablet.png" alt="Poster GlitchVerse" />
<p className="producto-nombre">Tablet edición especial Glitch Verse</p>
<p className="producto-precio">$150.000</p>
</div>



</div>
</section>
  )
}
