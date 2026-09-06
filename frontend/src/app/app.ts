import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router'; // 1. Importa el RouterOutlet
import { SidebarComponent } from './components/sidebar/sidebar';
import { HeaderFiltros } from './components/header-filtros/header-filtros';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet, // 2. Añádelo a los imports del componente
    SidebarComponent,
    HeaderFiltros,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class AppComponent {
  title = 'Dashboard RRHH';
}
