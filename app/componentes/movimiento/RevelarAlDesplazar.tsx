'use client';

/**
 * Añade una entrada progresiva reutilizable sin escuchar el scroll manualmente.
 */
import type { CSSProperties, ReactNode } from 'react';
import { usarRevelado } from '../../ganchos/usarRevelado';

/** Permite ajustar la clase y el escalonamiento de cada revelado. */
interface PropiedadesRevelarAlDesplazar {
  children: ReactNode;
  claseAdicional?: string;
  retraso?: number;
}

export function RevelarAlDesplazar({ children, claseAdicional = '', retraso = 0 }: PropiedadesRevelarAlDesplazar) {
  const { referencia, visible } = usarRevelado();
  const estilo = { '--retraso-revelado': `${retraso}ms` } as CSSProperties;

  return (
    <div
      ref={referencia}
      className={`revelar${visible ? ' revelar--visible' : ''} ${claseAdicional}`.trim()}
      style={estilo}
    >
      {children}
    </div>
  );
}
