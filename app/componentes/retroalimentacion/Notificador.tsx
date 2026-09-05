'use client';

/**
 * Monta el centro global de notificaciones listo para acciones con resultado.
 */
import { Toaster } from 'sonner';

export function Notificador() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        classNames: {
          toast: 'notificacion',
          title: 'notificacion__titulo',
          description: 'notificacion__descripcion',
        },
      }}
    />
  );
}
