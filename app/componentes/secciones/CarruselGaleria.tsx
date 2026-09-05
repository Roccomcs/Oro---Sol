'use client';

/**
 * Organiza las joyas como una rueda navegable con gestos, teclado y controles visibles.
 */
import { useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { joyas } from '../../contenido/joyas';
import { ImagenGaleria } from './ImagenGaleria';

/** Conserva los datos mínimos de un gesto para diferenciar un toque de un arrastre. */
interface InicioGesto {
  identificador: number;
  x: number;
  y: number;
}

function envolverIndice(indice: number) {
  return (indice + joyas.length) % joyas.length;
}

/** Devuelve la distancia circular más corta entre una pieza y la pieza activa. */
function calcularPosicionRelativa(indice: number, indiceActivo: number) {
  let posicion = envolverIndice(indice - indiceActivo);
  if (posicion > joyas.length / 2) posicion -= joyas.length;
  return posicion;
}

export function CarruselGaleria() {
  const [indiceActivo, establecerIndiceActivo] = useState(0);
  const inicioGesto = useRef<InicioGesto | null>(null);
  const ignorarSiguienteClic = useRef(false);
  const joyaActiva = joyas[indiceActivo];

  const avanzar = () => establecerIndiceActivo((indice) => envolverIndice(indice + 1));
  const retroceder = () => establecerIndiceActivo((indice) => envolverIndice(indice - 1));

  const manejarTeclado = (evento: KeyboardEvent<HTMLDivElement>) => {
    if (evento.target !== evento.currentTarget) return;
    if (evento.key === 'ArrowLeft') {
      evento.preventDefault();
      retroceder();
    }
    if (evento.key === 'ArrowRight') {
      evento.preventDefault();
      avanzar();
    }
    if (evento.key === 'Home') establecerIndiceActivo(0);
    if (evento.key === 'End') establecerIndiceActivo(joyas.length - 1);
  };

  const comenzarGesto = (evento: PointerEvent<HTMLDivElement>) => {
    if (evento.pointerType === 'mouse' && evento.button !== 0) return;
    evento.currentTarget.setPointerCapture(evento.pointerId);
    inicioGesto.current = {
      identificador: evento.pointerId,
      x: evento.clientX,
      y: evento.clientY,
    };
  };

  const terminarGesto = (evento: PointerEvent<HTMLDivElement>) => {
    const inicio = inicioGesto.current;
    inicioGesto.current = null;
    if (!inicio || inicio.identificador !== evento.pointerId) return;

    const diferenciaX = evento.clientX - inicio.x;
    const diferenciaY = evento.clientY - inicio.y;
    const esDeslizamientoHorizontal = Math.abs(diferenciaX) > 38 && Math.abs(diferenciaX) > Math.abs(diferenciaY) * 1.15;

    if (!esDeslizamientoHorizontal) return;
    ignorarSiguienteClic.current = true;
    window.setTimeout(() => {
      ignorarSiguienteClic.current = false;
    }, 0);
    if (diferenciaX < 0) avanzar();
    else retroceder();
  };

  const elegirPieza = (indice: number) => {
    if (ignorarSiguienteClic.current) {
      ignorarSiguienteClic.current = false;
      return;
    }
    establecerIndiceActivo(indice);
  };

  return (
    <div className="carrusel-galeria" aria-roledescription="carrusel" aria-label="Colección de cadenas Oro y Glow">
      <div
        className="carrusel-galeria__escenario"
        tabIndex={0}
        onKeyDown={manejarTeclado}
        onPointerDown={comenzarGesto}
        onPointerUp={terminarGesto}
        onPointerCancel={() => {
          inicioGesto.current = null;
        }}
      >
        <ol className="carrusel-galeria__lista">
          {joyas.map((joya, indice) => {
            const posicion = calcularPosicionRelativa(indice, indiceActivo);
            const distancia = Math.abs(posicion);
            const esActiva = posicion === 0;

            return (
              <li
                className="carrusel-galeria__diapositiva"
                data-posicion={posicion}
                aria-hidden={distancia > 2}
                key={joya.id}
              >
                <button
                  className="carrusel-galeria__pieza"
                  type="button"
                  tabIndex={esActiva ? 0 : -1}
                  aria-current={esActiva ? 'true' : undefined}
                  aria-label={`${joya.nombre}, ${indice + 1} de ${joyas.length}`}
                  onClick={() => elegirPieza(indice)}
                >
                  <ImagenGaleria joya={joya} prioritaria={esActiva} />
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="carrusel-galeria__pie">
        <button type="button" className="carrusel-galeria__flecha" onClick={retroceder} aria-label="Ver pieza anterior">
          <FaArrowLeftLong aria-hidden="true" />
        </button>

        <p className="carrusel-galeria__estado" aria-live="polite" aria-atomic="true">
          <span>{String(indiceActivo + 1).padStart(2, '0')}</span>
          <strong>{joyaActiva.nombre}</strong>
          <span>{String(joyas.length).padStart(2, '0')}</span>
        </p>

        <button type="button" className="carrusel-galeria__flecha" onClick={avanzar} aria-label="Ver pieza siguiente">
          <FaArrowRightLong aria-hidden="true" />
        </button>
      </div>

      <div className="carrusel-galeria__indicadores" aria-label="Elegir una pieza">
        {joyas.map((joya, indice) => (
          <button
            type="button"
            className={indice === indiceActivo ? 'carrusel-galeria__indicador carrusel-galeria__indicador--activo' : 'carrusel-galeria__indicador'}
            aria-label={`Mostrar ${joya.nombre}`}
            aria-current={indice === indiceActivo ? 'true' : undefined}
            onClick={() => establecerIndiceActivo(indice)}
            key={joya.id}
          />
        ))}
      </div>
    </div>
  );
}
