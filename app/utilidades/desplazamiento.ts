/**
 * Reune operaciones matematicas pequenas usadas por las animaciones de scroll.
 */
export function limitar(valor: number, minimo: number, maximo: number) {
  return Math.min(maximo, Math.max(minimo, valor));
}
