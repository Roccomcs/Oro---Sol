'use client';

/**
 * Observa un elemento y comunica cuando entró por primera vez al área visible.
 */
import { useEffect, useRef, useState } from 'react';
import { usarMovimientoReducido } from './usarMovimientoReducido';

export function usarRevelado(margen = '0px 0px -10%') {
  const referencia = useRef<HTMLDivElement>(null);
  const reducirMovimiento = usarMovimientoReducido();
  const [visible, establecerVisible] = useState(false);

  useEffect(() => {
    const elemento = referencia.current;
    if (!elemento || reducirMovimiento || !('IntersectionObserver' in window)) {
      establecerVisible(true);
      return;
    }

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (!entrada.isIntersecting) return;
        establecerVisible(true);
        observador.disconnect();
      },
      { rootMargin: margen, threshold: 0.08 },
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, [margen, reducirMovimiento]);

  return { referencia, visible };
}
