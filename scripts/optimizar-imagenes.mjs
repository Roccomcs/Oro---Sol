/**
 * Genera derivados web reproducibles sin alterar las fotografías originales.
 */
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const raiz = process.cwd();
const carpetaOriginales = path.join(raiz, 'Imagenes');
const carpetaPublica = path.join(raiz, 'public', 'imagenes');

const joyas = [
  ['Cadena China.jpg', 'cadena-china'],
  ['Cadena Cubana.jpg', 'cadena-cubana'],
  ['Cadena Escalera.jpg', 'cadena-escalera'],
  ['Cadena Lazo.jpg', 'cadena-lazo'],
  ['Cadena Militar Diamantada.jpg', 'cadena-militar-diamantada'],
  ['Cadena Singapur.jpg', 'cadena-singapur'],
];

async function guardarVariantes({ entrada, destino, nombre, anchos, calidadAvif = 55, calidadWebp = 80 }) {
  await mkdir(destino, { recursive: true });

  await Promise.all(
    anchos.flatMap((ancho) => {
      const base = sharp(entrada).resize({ width: ancho, withoutEnlargement: true });
      return [
        base.clone().avif({ quality: calidadAvif, effort: 5 }).toFile(path.join(destino, `${nombre}-${ancho}.avif`)),
        base.clone().webp({ quality: calidadWebp, smartSubsample: true }).toFile(path.join(destino, `${nombre}-${ancho}.webp`)),
      ];
    }),
  );
}

async function optimizarHero() {
  const entrada = path.join(carpetaOriginales, 'Hero Cinematografico v2.png');
  const destino = path.join(carpetaPublica, 'hero');

  await guardarVariantes({
    entrada,
    destino,
    nombre: 'hero-cinematografico',
    anchos: [768, 1280, 1672],
    calidadAvif: 58,
    calidadWebp: 82,
  });

  const recorteMovil = sharp(entrada).resize({ width: 720, height: 1080, fit: 'cover', position: 'right' });
  await Promise.all([
    recorteMovil.clone().avif({ quality: 58, effort: 5 }).toFile(path.join(destino, 'hero-cinematografico-movil.avif')),
    recorteMovil.clone().webp({ quality: 82, smartSubsample: true }).toFile(path.join(destino, 'hero-cinematografico-movil.webp')),
  ]);
}

async function optimizarLogo() {
  await guardarVariantes({
    entrada: path.join(carpetaOriginales, 'Logo.jpg'),
    destino: path.join(carpetaPublica, 'marca'),
    nombre: 'logo-oro-glow',
    anchos: [256, 512],
    calidadAvif: 62,
    calidadWebp: 84,
  });
}

async function optimizarGaleria() {
  const destino = path.join(carpetaPublica, 'galeria');
  await Promise.all(
    joyas.map(([archivo, nombre]) =>
      guardarVariantes({
        entrada: path.join(carpetaOriginales, archivo),
        destino,
        nombre,
        anchos: [480, 768, 1080],
      }),
    ),
  );
}

await Promise.all([optimizarHero(), optimizarLogo(), optimizarGaleria()]);
console.log('Imágenes optimizadas correctamente.');
