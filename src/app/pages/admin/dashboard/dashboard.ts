import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollaboratorService } from '../../../services/collaborator';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard implements OnInit {
  collaborators: any[] = [];
  displayedColumns: string[] = ['id', 'name', 'email', 'cpf', 'actions'];
  
  // Controles de Paginação e Busca
  totalItems = 0;
  currentPage = 1;
  pageSize = 15;
  searchControl = new FormControl('');

  constructor(private collaboratorService: CollaboratorService) {}

  ngOnInit(): void {
    this.loadCollaborators();
    
    // Escuta as mudanças no campo de busca
    this.searchControl.valueChanges.pipe(
      debounceTime(300), // Espera 300ms após o usuário parar de digitar
      distinctUntilChanged() // Só emite se o valor for diferente do anterior
    ).subscribe(value => {
      this.currentPage = 1; // Volta para a primeira página ao buscar
      this.loadCollaborators(value || '');
    });
  }

  loadCollaborators(search: string = ''): void {
    this.collaboratorService.getCollaborators(this.currentPage, search).subscribe(response => {
      this.collaborators = response.data;
      this.totalItems = response.total;
      this.pageSize = response.per_page;
    });
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex + 1;
    this.loadCollaborators(this.searchControl.value || '');
  }
}