/**
 * Presenta la propuesta principal con la imagen cinematográfica de la marca.
 */
export function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="titulo-principal">
      <picture className="hero__imagen">
        <source media="(max-width: 639px)" srcSet="/imagenes/hero/hero-cinematografico-movil.avif" type="image/avif" />
        <source media="(max-width: 639px)" srcSet="/imagenes/hero/hero-cinematografico-movil.webp" type="image/webp" />
        <source
          srcSet="/imagenes/hero/hero-cinematografico-768.avif 768w, /imagenes/hero/hero-cinematografico-1280.avif 1280w, /imagenes/hero/hero-cinematografico-1672.avif 1672w"
          sizes="100vw"
          type="image/avif"
        />
        <img
          src="/imagenes/hero/hero-cinematografico-1280.webp"
          srcSet="/imagenes/hero/hero-cinematografico-768.webp 768w, /imagenes/hero/hero-cinematografico-1280.webp 1280w, /imagenes/hero/hero-cinematografico-1672.webp 1672w"
          sizes="100vw"
          width="1672"
          height="941"
          fetchPriority="high"
          alt="Cadena dorada sobre seda negra iluminada con reflejos cálidos"
        />
      </picture>
      <div className="hero__velo" aria-hidden="true" />

      <header className="encabezado">
        <a className="encabezado__marca" href="#inicio" aria-label="Ir al inicio de Oro y Glow">
          <picture>
            <source srcSet="/imagenes/marca/logo-oro-glow-256.avif" type="image/avif" />
            <img src="/imagenes/marca/logo-oro-glow-256.webp" width="256" height="256" alt="" />
          </picture>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#galeria">Galería</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <div className="hero__contenido">
        <p className="hero__etiqueta">Oro laminado 18K</p>
        <h1 id="titulo-principal">El brillo de lo extraordinario</h1>
        <p className="hero__descripcion">Joyas creadas para acompañar tus momentos con elegancia, carácter y distinción.</p>
        <a className="boton-dorado" href="#galeria">Descubrir la colección</a>
      </div>
      <a className="hero__indicador" href="#galeria" aria-label="Bajar hasta la galería">
        <span aria-hidden="true" />
        Desliza para descubrir
      </a>
    </section>
  );
}
