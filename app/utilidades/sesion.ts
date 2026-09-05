/**
 * Encapsula el acceso defensivo al almacenamiento temporal del navegador.
 */
export function existeEnSesion(clave: string) {
  return window.sessionStorage.getItem(clave) !== null;
}

export function guardarEnSesion(clave: string) {
  window.sessionStorage.setItem(clave, 'true');
}
