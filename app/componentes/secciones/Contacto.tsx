/**
 * Dirige la conversación hacia los dos canales oficiales de Oro & Glow.
 */
import { FaInstagram, FaWhatsapp } from 'react-icons/fa6';
import { contactos } from '../../contenido/contactos';
import { RevelarAlDesplazar } from '../movimiento/RevelarAlDesplazar';

export function Contacto() {
  return (
    <section className="seccion contacto" id="contacto" aria-labelledby="titulo-contacto">
      <RevelarAlDesplazar claseAdicional="contacto__interior">
        <p className="sobretitulo">Atención personal</p>
        <h2 id="titulo-contacto">Hablemos de tu próxima joya</h2>
        <p className="contacto__texto">Descubre nuestras novedades o recibe atención directa de Oro & Glow.</p>
        <div className="contacto__acciones">
          <a className="boton-dorado" href={contactos.whatsapp} target="_blank" rel="noreferrer noopener" aria-label="Conversar con Oro y Glow por WhatsApp">
            <FaWhatsapp aria-hidden="true" />
            WhatsApp
          </a>
          <a className="boton-contorno" href={contactos.instagram} target="_blank" rel="noreferrer noopener" aria-label="Visitar el Instagram de Oro y Glow">
            <FaInstagram aria-hidden="true" />
            Instagram
          </a>
        </div>
      </RevelarAlDesplazar>
    </section>
  );
}
