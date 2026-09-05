/**
 * Convierte las promesas centrales de la marca en una experiencia Scroll Stack.
 */
import { beneficios } from '../../contenido/beneficios';
import { ElementoPila } from '../movimiento/ElementoPila';
import { PilaDesplazable } from '../movimiento/PilaDesplazable';
import { RevelarAlDesplazar } from '../movimiento/RevelarAlDesplazar';

export function Beneficios() {
  return (
    <section className="seccion beneficios" id="beneficios" aria-labelledby="titulo-beneficios">
      <RevelarAlDesplazar claseAdicional="seccion__cabecera seccion__cabecera--centrada">
        <p className="sobretitulo">Nuestro compromiso</p>
        <h2 id="titulo-beneficios">La elegancia también se demuestra en los detalles</h2>
      </RevelarAlDesplazar>

      <PilaDesplazable>
        {beneficios.map((beneficio, indice) => {
          const Icono = beneficio.icono;
          return (
            <ElementoPila key={beneficio.id} indice={indice}>
              <span className="elemento-pila__numero">{beneficio.numero}</span>
              <div className="elemento-pila__icono" aria-hidden="true"><Icono /></div>
              <div className="elemento-pila__contenido">
                <h3>{beneficio.titulo}</h3>
                <p>{beneficio.descripcion}</p>
              </div>
            </ElementoPila>
          );
        })}
      </PilaDesplazable>
      <p className="beneficios__nota">La garantía está sujeta a las condiciones de cada pieza.</p>
    </section>
  );
}
