'use client';

/**
 * Muestra el ritual visual inicial de la marca sin bloquear visitas repetidas.
 */
import { usarPresentacionMarca } from '../../ganchos/usarPresentacionMarca';

export function PresentacionMarca() {
  const { visible, saliendo } = usarPresentacionMarca();

  if (!visible) return null;

  return (
    <div
      className={`presentacion-marca${saliendo ? ' presentacion-marca--saliendo' : ''}`}
      role="status"
      aria-live="polite"
      aria-label="Presentando Oro y Glow"
    >
      <div className="presentacion-marca__halo" aria-hidden="true" />
      <picture className="presentacion-marca__logo">
        <source srcSet="/imagenes/marca/logo-oro-glow-512.avif" type="image/avif" />
        <img src="/imagenes/marca/logo-oro-glow-512.webp" width="512" height="512" alt="Oro & Glow" />
      </picture>
      <div className="presentacion-marca__linea" aria-hidden="true" />
      <p>Lujo · Exclusividad · Brillo</p>
    </div>
  );
}
