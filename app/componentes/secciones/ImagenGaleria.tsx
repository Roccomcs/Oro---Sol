'use client';

/**
 * Carga una joya con formatos modernos, skeleton y recuperación ante errores.
 */
import { useCallback, useState } from 'react';
import { FaRegGem } from 'react-icons/fa6';
import type { JoyaGaleria } from '../../contenido/joyas';
import { EsqueletoImagen } from '../retroalimentacion/EsqueletoImagen';

/** Recibe una pieza ya normalizada desde el catálogo local. */
interface PropiedadesImagenGaleria {
  joya: JoyaGaleria;
  prioritaria?: boolean;
}

function crearFuentes(base: string, extension: 'avif' | 'webp') {
  return [480, 768, 1080]
    .map((ancho) => `/imagenes/galeria/${base}-${ancho}.${extension} ${ancho}w`)
    .join(', ');
}

export function ImagenGaleria({ joya, prioritaria = false }: PropiedadesImagenGaleria) {
  const [cargada, establecerCargada] = useState(false);
  const [error, establecerError] = useState(false);

  const comprobarImagenCacheada = useCallback((elemento: HTMLImageElement | null) => {
    if (!elemento?.complete) return;
    if (elemento.naturalWidth > 0) establecerCargada(true);
    else establecerError(true);
  }, []);

  return (
    <div className="pieza-galeria">
      <div className="pieza-galeria__marco">
        {!cargada && !error ? <EsqueletoImagen /> : null}
        {error ? (
          <div className="pieza-galeria__error" role="img" aria-label={`No fue posible cargar ${joya.nombre}`}>
            <FaRegGem aria-hidden="true" />
            <span>La pieza volverá a brillar pronto</span>
          </div>
        ) : (
          <picture>
            <source srcSet={crearFuentes(joya.imagen.base, 'avif')} sizes="(max-width: 639px) 78vw, 34vw" type="image/avif" />
            <source srcSet={crearFuentes(joya.imagen.base, 'webp')} sizes="(max-width: 639px) 78vw, 34vw" type="image/webp" />
            <img
              ref={comprobarImagenCacheada}
              src={`/imagenes/galeria/${joya.imagen.base}-768.webp`}
              width={joya.imagen.ancho}
              height={joya.imagen.alto}
              loading={prioritaria ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
              alt={joya.textoAlternativo}
              onLoad={() => establecerCargada(true)}
              onError={() => establecerError(true)}
            />
          </picture>
        )}
        <div className="pieza-galeria__brillo" aria-hidden="true" />
      </div>
    </div>
  );
}
