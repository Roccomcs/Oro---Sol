/**
 * Encapsula el acceso defensivo al almacenamiento temporal del navegador.
 */
export function existeEnSesion(clave: string) {
  try {
    return window.sessionStorage.getItem(clave) !== null;
  } catch {
    return false;
  }
}

export function guardarEnSesion(clave: string) {
  try {
    window.sessionStorage.setItem(clave, 'true');
  } catch {
    // La presentacion puede finalizar aunque el navegador bloquee sessionStorage.
  }
}
