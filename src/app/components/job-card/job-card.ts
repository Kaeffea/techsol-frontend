import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss'
})
export class JobCard {
  // Usando @Input() para dizer que essas propriedades virão de fora
  @Input() title: string = '';
  @Input() location: string = '';
  @Input() description: string = '';
}