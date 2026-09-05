/**
 * Declara los cuatro pilares comerciales comunicados por Oro & Glow.
 */
import type { IconType } from 'react-icons';
import { FaGem, FaLocationDot, FaShieldHalved, FaTruckFast } from 'react-icons/fa6';

export interface BeneficioMarca {
  id: string;
  titulo: string;
  descripcion: string;
  icono: IconType;
  numero: string;
}

export const beneficios: BeneficioMarca[] = [
  {
    id: 'lujo',
    titulo: 'Lujo y exclusividad',
    descripcion: 'Piezas elegidas para convertir cada momento en una expresión de distinción.',
    icono: FaGem,
    numero: '01',
  },
  {
    id: 'garantia',
    titulo: 'Garantía de hasta 5 años',
    descripcion: 'El respaldo que acompaña la belleza y la calidad de cada joya.',
    icono: FaShieldHalved,
    numero: '02',
  },
  {
    id: 'envios',
    titulo: 'Envíos a toda Colombia',
    descripcion: 'Hacemos que el brillo de Oro & Glow llegue hasta donde estés.',
    icono: FaTruckFast,
    numero: '03',
  },
  {
    id: 'origen',
    titulo: 'Ibagué, Tolima',
    descripcion: 'Atención cercana desde el corazón de Colombia, con vocación por cada detalle.',
    icono: FaLocationDot,
    numero: '04',
  },
];
