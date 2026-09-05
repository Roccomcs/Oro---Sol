/**
 * Presenta seis piezas en una cuadrícula editorial de tres columnas por fila.
 */
import { joyas } from '../../contenido/joyas';
import { RevelarAlDesplazar } from '../movimiento/RevelarAlDesplazar';
import { ImagenGaleria } from './ImagenGaleria';

export function Galeria() {
  return (
    <section className="seccion galeria" id="galeria" aria-labelledby="titulo-galeria">
      <RevelarAlDesplazar claseAdicional="seccion__cabecera">
        <p className="sobretitulo">Colección Oro & Glow</p>
        <h2 id="titulo-galeria">Una expresión para cada momento</h2>
        <p>Cadenas seleccionadas para iluminar tu estilo con una presencia sutil e inolvidable.</p>
      </RevelarAlDesplazar>

      <div className="galeria__mosaico">
        {joyas.map((joya, indice) => (
          <RevelarAlDesplazar key={joya.id} retraso={(indice % 3) * 90}>
            <ImagenGaleria joya={joya} />
          </RevelarAlDesplazar>
        ))}
      </div>
    </section>
  );
}
