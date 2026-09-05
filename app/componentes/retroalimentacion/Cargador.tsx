/**
 * Proporciona un indicador reutilizable para futuros procesos asíncronos.
 */
/** Personaliza el texto accesible mostrado junto al indicador. */
interface PropiedadesCargador {
  mensaje?: string;
}

export function Cargador({ mensaje = 'Preparando la experiencia' }: PropiedadesCargador) {
  return (
    <div className="cargador" role="status" aria-live="polite">
      <span className="cargador__anillo" aria-hidden="true" />
      <span>{mensaje}</span>
    </div>
  );
}
