'use client';

/**
 * Representa una tarjeta individual dentro de la pila desplazable.
 */
import type { ReactNode } from 'react';

interface PropiedadesElementoPila {
  children: ReactNode;
  indice: number;
  claseAdicional?: string;
}

export function ElementoPila({ children, indice, claseAdicional = '' }: PropiedadesElementoPila) {
  return (
    <article
      className={`elemento-pila ${claseAdicional}`.trim()}
      data-elemento-pila
      data-indice={indice}
    >
      {children}
    </article>
  );
}
