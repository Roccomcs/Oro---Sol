/**
 * Centraliza los datos y las variantes responsivas de la galería editorial.
 */
/** Describe el nombre base y la proporción original de una imagen optimizada. */
export interface ImagenResponsiva {
  base: string;
  ancho: number;
  alto: number;
}

/** Define el contenido accesible y visual de una pieza de la galería. */
export interface JoyaGaleria {
  id: string;
  nombre: string;
  imagen: ImagenResponsiva;
  textoAlternativo: string;
}

export const joyas: JoyaGaleria[] = [
  {
    id: 'china',
    nombre: 'Cadena China',
    imagen: { base: 'cadena-china', ancho: 1080, alto: 1264 },
    textoAlternativo: 'Cadena china dorada presentada en estuche',
  },
  {
    id: 'cubana',
    nombre: 'Cadena Cubana',
    imagen: { base: 'cadena-cubana', ancho: 1086, alto: 941 },
    textoAlternativo: 'Cadena cubana dorada sobre fondo claro',
  },
  {
    id: 'escalera',
    nombre: 'Cadena Escalera',
    imagen: { base: 'cadena-escalera', ancho: 1080, alto: 923 },
    textoAlternativo: 'Cadena escalera dorada en composición de producto',
  },
  {
    id: 'lazo',
    nombre: 'Cadena Lazo',
    imagen: { base: 'cadena-lazo', ancho: 1078, alto: 915 },
    textoAlternativo: 'Cadena lazo dorada sobre fondo de exhibición',
  },
  {
    id: 'militar-diamantada',
    nombre: 'Cadena Militar Diamantada',
    imagen: { base: 'cadena-militar-diamantada', ancho: 1081, alto: 945 },
    textoAlternativo: 'Cadena militar diamantada dorada',
  },
  {
    id: 'singapur',
    nombre: 'Cadena Singapur',
    imagen: { base: 'cadena-singapur', ancho: 1077, alto: 1263 },
    textoAlternativo: 'Cadena Singapur dorada presentada en estuche',
  },
];
