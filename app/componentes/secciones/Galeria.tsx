/**
 * Presenta la colección mediante un carrusel circular adaptable.
 */
import { RevelarAlDesplazar } from '../movimiento/RevelarAlDesplazar';
import { CarruselGaleria } from './CarruselGaleria';

export function Galeria() {
  return (
    <section className="seccion galeria" id="galeria" aria-labelledby="titulo-galeria">
      <RevelarAlDesplazar claseAdicional="seccion__cabecera">
        <p className="sobretitulo">Colección Oro & Glow</p>
        <h2 id="titulo-galeria">Una expresión para cada momento</h2>
        <p>Cadenas seleccionadas para iluminar tu estilo con una presencia sutil e inolvidable.</p>
      </RevelarAlDesplazar>

      <RevelarAlDesplazar retraso={90}>
        <CarruselGaleria />
      </RevelarAlDesplazar>
    </section>
  );
}
