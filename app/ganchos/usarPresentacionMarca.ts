'use client';

/**
 * Controla que la presentacion ceremonial aparezca una unica vez por sesion.
 */
import { useEffect, useState } from 'react';
import { existeEnSesion, guardarEnSesion } from '../utilidades/sesion';

const CLAVE_PRESENTACION = 'oro-glow-presentacion-vista';

export function usarPresentacionMarca() {
  const [visible, establecerVisible] = useState(false);
  const [saliendo, establecerSaliendo] = useState(false);

  useEffect(() => {
    if (existeEnSesion(CLAVE_PRESENTACION)) return;

    const reducirMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    establecerVisible(true);

    const espera = reducirMovimiento ? 120 : 1_250;
    const tiempoSalida = reducirMovimiento ? 100 : 450;
    const temporizadorSalida = window.setTimeout(() => establecerSaliendo(true), espera);
    const temporizadorFin = window.setTimeout(() => {
      establecerVisible(false);
      guardarEnSesion(CLAVE_PRESENTACION);
    }, espera + tiempoSalida);

    return () => {
      window.clearTimeout(temporizadorSalida);
      window.clearTimeout(temporizadorFin);
    };
  }, []);

  return { visible, saliendo };
}
