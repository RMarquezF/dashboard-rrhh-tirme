import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosService } from '../../services/filtros';

@Component({
  selector: 'app-header-filtros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-filtros.html',
  styleUrl: './header-filtros.scss',
})
export class HeaderFiltros {
  // Inyectamos el servicio global de Signals
  public filtrosService = inject(FiltrosService);

  // Métodos que capturan los cambios en los selects y actualizan el estado global
  onAnioChange(event: any) {
    this.filtrosService.actualizarFiltros({ anio: Number(event.target.value) });
  }

  onDireccionChange(event: any) {
    this.filtrosService.actualizarFiltros({ direccion: event.target.value });
  }

  onGrupoChange(event: any) {
    this.filtrosService.actualizarFiltros({ grupo: event.target.value });
  }

  onEstadoChange(event: any) {
    this.filtrosService.actualizarFiltros({ estado: event.target.value });
  }
}
