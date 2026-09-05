'use client';

/**
 * Mantiene sincronizada la preferencia del sistema para reducir animaciones.
 */
import { useEffect, useState } from 'react';

export function usarMovimientoReducido() {
  const [reducirMovimiento, establecerReducirMovimiento] = useState(false);

  useEffect(() => {
    const consulta = window.matchMedia('(prefers-reduced-motion: reduce)');
    const actualizar = () => establecerReducirMovimiento(consulta.matches);
    actualizar();
    consulta.addEventListener('change', actualizar);
    return () => consulta.removeEventListener('change', actualizar);
  }, []);

  return reducirMovimiento;
}
