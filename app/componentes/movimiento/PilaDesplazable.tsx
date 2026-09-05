'use client';

/**
 * Coordina una pila sticky con calculos cacheados y un unico ciclo por frame.
 */
import { useEffect, useRef, type ReactNode } from 'react';
import { usarMovimientoReducido } from '../../ganchos/usarMovimientoReducido';
import { limitar } from '../../utilidades/desplazamiento';

/** Configura el comportamiento compartido de la pila durante el desplazamiento. */
export interface PropiedadesPilaDesplazable {
  children: ReactNode;
  escalaBase?: number;
  separacionPila?: number;
  alCompletar?: () => void;
}

interface MedicionTarjeta {
  elemento: HTMLElement;
  inicio: number;
  indice: number;
}

export function PilaDesplazable({
  children,
  escalaBase = 0.9,
  separacionPila = 24,
  alCompletar,
}: PropiedadesPilaDesplazable) {
  const referencia = useRef<HTMLDivElement>(null);
  const reducirMovimiento = usarMovimientoReducido();
  const completada = useRef(false);

  useEffect(() => {
    const contenedor = referencia.current;
    if (!contenedor || reducirMovimiento) return;

    let cuadro: number | null = null;
    let mediciones: MedicionTarjeta[] = [];

    const medir = () => {
      const esMovil = window.innerWidth < 640;
      const separacionActual = esMovil ? Math.min(separacionPila, 10) : separacionPila;
      const topeBase = esMovil ? 64 : 88;
      mediciones = Array.from(contenedor.querySelectorAll<HTMLElement>('[data-elemento-pila]')).map(
        (elemento, indice) => {
          elemento.style.top = `${topeBase + indice * separacionActual}px`;
          elemento.style.zIndex = `${10 + indice}`;
          return { elemento, inicio: elemento.offsetTop, indice };
        },
      );
    };

    const actualizar = () => {
      cuadro = null;
      const inicioContenedor = contenedor.getBoundingClientRect().top + window.scrollY;
      const desplazamiento = window.scrollY - inicioContenedor + window.innerHeight * 0.22;

      mediciones.forEach(({ elemento, inicio, indice }) => {
        const progreso = limitar((desplazamiento - inicio) / (window.innerHeight * 0.34), 0, 1);
        const escalaObjetivo = limitar(escalaBase + indice * 0.025, escalaBase, 0.98);
        const escala = 1 - progreso * (1 - escalaObjetivo);
        elemento.style.transform = `translate3d(0, 0, 0) scale(${escala.toFixed(3)})`;
      });

      const ultima = mediciones.at(-1);
      if (ultima && desplazamiento >= ultima.inicio && !completada.current) {
        completada.current = true;
        alCompletar?.();
      }
    };

    const solicitarActualizacion = () => {
      if (cuadro !== null) return;
      cuadro = window.requestAnimationFrame(actualizar);
    };

    const actualizarMedidas = () => {
      medir();
      solicitarActualizacion();
    };

    actualizarMedidas();
    const observadorTamano = new ResizeObserver(actualizarMedidas);
    observadorTamano.observe(contenedor);
    window.addEventListener('scroll', solicitarActualizacion, { passive: true });
    window.addEventListener('resize', actualizarMedidas);

    return () => {
      if (cuadro !== null) window.cancelAnimationFrame(cuadro);
      observadorTamano.disconnect();
      window.removeEventListener('scroll', solicitarActualizacion);
      window.removeEventListener('resize', actualizarMedidas);
      mediciones.forEach(({ elemento }) => {
        elemento.style.removeProperty('top');
        elemento.style.removeProperty('z-index');
        elemento.style.removeProperty('transform');
      });
    };
  }, [alCompletar, escalaBase, reducirMovimiento, separacionPila]);

  return <div ref={referencia} className="pila-desplazable">{children}</div>;
}
