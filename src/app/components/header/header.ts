import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'; // Para ícones
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbarModule, // Módulo da Toolbar
    MatButtonModule, // Módulo dos Botões
    MatIconModule,
    RouterModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {}
