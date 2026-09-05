/**
 * Define el documento raiz, las fuentes locales y los metadatos de Oro & Glow.
 */
import type { Metadata } from 'next';
import '@fontsource/castoro-titling/400.css';
import '@fontsource/lato/400.css';
import './estilos/variables.css';
import './globals.css';
import './estilos/tipografias.css';
import './estilos/animaciones.css';
import './estilos/secciones.css';
import './estilos/retroalimentacion.css';

export const metadata: Metadata = {
  title: 'Oro & Glow | Joyería en oro laminado 18K',
  description:
    'Joyas en oro laminado 18K con lujo, exclusividad y garantía de hasta 5 años. Envíos a toda Colombia desde Ibagué, Tolima.',
};

export default function DisposicionRaiz({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
