/**
 * Cierra la experiencia con identidad, ubicación y accesos de contacto.
 */
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { contactos } from '../../contenido/contactos';
import { RevelarAlDesplazar } from '../movimiento/RevelarAlDesplazar';

export function PiePagina() {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="pie-pagina">
      <RevelarAlDesplazar claseAdicional="pie-pagina__interior">
        <picture className="pie-pagina__logo">
          <source srcSet="/imagenes/marca/logo-oro-glow-256.avif" type="image/avif" />
          <img src="/imagenes/marca/logo-oro-glow-256.webp" width="256" height="256" alt="Oro & Glow" loading="lazy" />
        </picture>
        <div className="pie-pagina__marca">
          <h2>Oro & Glow</h2>
          <p>Lujo · Exclusividad · Brillo</p>
        </div>
        <p>Ibagué, Tolima · Colombia</p>
        <div className="pie-pagina__redes" aria-label="Redes sociales">
          <a href={contactos.instagram} target="_blank" rel="noreferrer noopener" aria-label="Instagram de Oro y Glow"><FaInstagram aria-hidden="true" /></a>
          <a href={contactos.whatsapp} target="_blank" rel="noreferrer noopener" aria-label="WhatsApp de Oro y Glow"><FaWhatsapp aria-hidden="true" /></a>
        </div>
        <small>© {anioActual} Oro & Glow. Todos los derechos reservados.</small>
      </RevelarAlDesplazar>
    </footer>
  );
}
