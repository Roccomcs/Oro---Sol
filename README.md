# Oro & Glow

Landing narrativa y responsive para Oro & Glow, construida con React, TypeScript estricto y Vinext. La identidad visual combina negro carbón, dorado y marfil; usa Castoro Titling en títulos y Lato en el resto de textos visibles.

## Desarrollo local

```bash
npm install
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`.

## Comandos

- `npm run lint`: valida el código fuente.
- `npx tsc --noEmit`: comprueba los tipos sin generar archivos.
- `npm run build`: crea la compilación de producción.
- `npm run imagenes:optimizar`: regenera las variantes AVIF y WebP desde los originales de `Imagenes`.

## Organización

El código de la experiencia vive en `app`: componentes por sección, movimiento, retroalimentación, contenido, ganchos, utilidades y estilos. Los originales fotográficos se conservan en `Imagenes`; las versiones listas para la web se generan en `public/imagenes`.

Cloudflare Web Analytics queda previsto para la publicación futura. En desarrollo no se recopilan estadísticas ni se instalan cookies analíticas.
