'use client';

/**
 * Activa Lenis solo cuando puede mejorar la rueda sin alterar el gesto tactil.
 */
import { useEffect } from 'react';
import Lenis from 'lenis';
import { usarMovimientoReducido } from '../../ganchos/usarMovimientoReducido';

export function DesplazamientoSuave() {
  const reducirMovimiento = usarMovimientoReducido();

  useEffect(() => {
    if (reducirMovimiento || window.matchMedia('(pointer: coarse)').matches) return;

    const desplazamiento = new Lenis({
      autoRaf: true,
      anchors: true,
      smoothWheel: true,
      syncTouch: false,
      lerp: 0.1,
      wheelMultiplier: 0.9,
    });

    return () => desplazamiento.destroy();
  }, [reducirMovimiento]);

  return null;
}
