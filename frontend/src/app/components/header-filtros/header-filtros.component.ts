import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltrosService } from '../../services/filtros';

@Component({
  selector: 'app-header-filtros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header-filtros.component.html',
  styleUrl: './header-filtros.scss'
})
export class HeaderFiltrosComponent {
  // Inyectamos nuestro servicio con Signals
  public filtrosService = inject(FiltrosService);

  // Métodos para actualizar cada filtro individualmente al cambiar el select
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