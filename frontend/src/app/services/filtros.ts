import { Injectable, signal } from '@angular/core';

export interface FiltrosGlobales {
  anio: number;
  direccion: string;
  grupo: string;
  estado: string;
}

@Injectable({
  providedIn: 'root',
})
export class FiltrosService {
  // Estado reactivo global con Signals
  public filtros = signal<FiltrosGlobales>({
    anio: new Date().getFullYear(),
    direccion: 'TODAS',
    grupo: 'TODOS',
    estado: 'TODOS',
  });

  // Método para actualizar los filtros desde la barra superior
  public actualizarFiltros(nuevosFiltros: Partial<FiltrosGlobales>) {
    this.filtros.update((actuales) => ({ ...actuales, ...nuevosFiltros }));
  }
}
