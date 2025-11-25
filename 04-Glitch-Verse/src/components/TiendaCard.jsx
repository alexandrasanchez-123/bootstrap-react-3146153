import React from 'react'
import "../Styles/Tienda.css"

export const TiendaCard = () => {
  return (
    <section className="tienda-container">
<h2 className="titulo-destacados">PRODUCTOS DESTACADOS</h2>


<div className="banner-tienda">
<img src="/mnt/data/tienda.png" alt="Banner" className="banner-img" />
<p className="banner-texto">
Descubre la colección exclusiva de Glitch Verse con productos únicos
y de alta calidad. ¡Lleva tu estilo al siguiente nivel!
</p>
</div>


{/* Productos */}
<div className="productos-grid">
{/* Producto 1 */}
<div className="producto-card">
<img src="/mnt/data/tienda.png" alt="Camiseta GlitchVerse" />
<p className="producto-nombre">Camiseta de seda Glitch Verse</p>
<p className="producto-precio">$40.000</p>
</div>


{/* Producto 2 */}
<div className="producto-card seleccionado">
<img src="/mnt/data/tienda.png" alt="Hoodie GlitchVerse" />
<p className="producto-nombre">Suéter de seda Glitch Verse</p>
<p className="producto-precio">$80.000</p>
</div>


{/* Producto 3 */}
<div className="producto-card">
<img src="/mnt/data/tienda.png" alt="Cuaderno GlitchVerse" />
<p className="producto-nombre">Cuaderno 150 hojas Glitch Verse</p>
<p className="producto-precio">$30.000</p>
</div>


{/* Producto 4 */}
<div className="producto-card">
<img src="/mnt/data/tienda.png" alt="Gorra GlitchVerse" />
<p className="producto-nombre">Gorra edición Glitch Verse</p>
<p className="producto-precio">$25.000</p>
</div>


{/* Producto 5 */}
<div className="producto-card">
<img src="/mnt/data/tienda.png" alt="Stickers GlitchVerse" />
<p className="producto-nombre">Sticker Pack Glitch Verse</p>
<p className="producto-precio">$10.000</p>
</div>


{/* Producto 6 */}
<div className="producto-card">
<img src="/mnt/data/tienda.png" alt="Llavero GlitchVerse" />
<p className="producto-nombre">Llavero metálico Glitch Verse</p>
<p className="producto-precio">$15.000</p>
</div>


{/* Producto 7 */}
<div className="producto-card">
<img src="/mnt/data/tienda.png" alt="Poster GlitchVerse" />
<p className="producto-nombre">Póster edición especial Glitch Verse</p>
<p className="producto-precio">$20.000</p>
</div>



</div>
</section>
  )
}
