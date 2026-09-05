/**
 * Compone la portada narrativa de Oro & Glow por secciones independientes.
 */
import { DesplazamientoSuave } from './componentes/movimiento/DesplazamientoSuave';
import { Notificador } from './componentes/retroalimentacion/Notificador';
import { PresentacionMarca } from './componentes/retroalimentacion/PresentacionMarca';
import { Beneficios } from './componentes/secciones/Beneficios';
import { Contacto } from './componentes/secciones/Contacto';
import { Galeria } from './componentes/secciones/Galeria';
import { Hero } from './componentes/secciones/Hero';
import { PiePagina } from './componentes/secciones/PiePagina';

export default function PaginaInicio() {
  return (
    <>
      <DesplazamientoSuave />
      <PresentacionMarca />
      <main>
        <Hero />
        <Galeria />
        <Beneficios />
        <Contacto />
      </main>
      <PiePagina />
      <Notificador />
    </>
  );
}
