'use client';

/**
 * Controla que la presentacion ceremonial aparezca una unica vez por sesion.
 */
import { useEffect, useState } from 'react';
import { existeEnSesion, guardarEnSesion } from '../utilidades/sesion';
import { usarMovimientoReducido } from './usarMovimientoReducido';

const CLAVE_PRESENTACION = 'oro-glow-presentacion-vista';

export function usarPresentacionMarca() {
  const reducirMovimiento = usarMovimientoReducido();
  const [visible, establecerVisible] = useState(false);
  const [saliendo, establecerSaliendo] = useState(false);

  useEffect(() => {
    if (existeEnSesion(CLAVE_PRESENTACION)) return;

    guardarEnSesion(CLAVE_PRESENTACION);
    establecerVisible(true);

    const espera = reducirMovimiento ? 120 : 1_250;
    const tiempoSalida = reducirMovimiento ? 100 : 450;
    const temporizadorSalida = window.setTimeout(() => establecerSaliendo(true), espera);
    const temporizadorFin = window.setTimeout(() => establecerVisible(false), espera + tiempoSalida);

    return () => {
      window.clearTimeout(temporizadorSalida);
      window.clearTimeout(temporizadorFin);
    };
  }, [reducirMovimiento]);

  return { visible, saliendo };
}
