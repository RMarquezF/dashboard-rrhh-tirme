import { Component, ChangeDetectorRef, OnDestroy, effect, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize, Subject, Subscription, takeUntil } from 'rxjs';
import { FiltrosService } from '../../services/filtros';
import { HeService, PlantillaGrupoResumen } from '../../services/he.service';

@Component({
  selector: 'app-resumen-general',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resumen-general.html',
})
export class ResumenGeneral implements OnDestroy {
  public filtrosService = inject(FiltrosService);
  private readonly heService = inject(HeService);
  private readonly changeDetector = inject(ChangeDetectorRef);
  private readonly destroy$ = new Subject<void>();
  private solicitud?: Subscription;

  // Métricas reactivas que cambian según los filtros globales
  public totalPlantilla = computed(() => {
    const filtros = this.filtrosService.filtros();
    let base = 248;

    // Simulamos variación según el año o dirección seleccionada
    if (filtros.anio === 2025) {
      base = 230;
    }
    if (filtros.anio === 2024) {
      base = 210;
    }
    if (filtros.direccion === 'Operaciones') {
      base = 160;
    }
    if (filtros.direccion === 'Administracion') {
      base = 40;
    }

    return base;
  });

  public activosPlanta = computed(() => Math.round(this.totalPlantilla() * 0.93));
  public bajasMedicas = computed(() => Math.round(this.totalPlantilla() * 0.05));
  public vacaciones = computed(
    () => this.totalPlantilla() - this.activosPlanta() - this.bajasMedicas(),
  );

  // Porcentaje de asistencia dinámico según la dirección o filtros
  public porcentajeAsistencia = computed(() => {
    const filtros = this.filtrosService.filtros();
    let porcentaje = 92.7;

    if (filtros.direccion === 'Administracion') {
      porcentaje = 96.5;
    }
    if (filtros.direccion === 'Operaciones') {
      porcentaje = 90.4;
    }

    return porcentaje;
  });
}

