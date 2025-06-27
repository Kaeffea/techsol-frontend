import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './carousel.html',
  styleUrl: './carousel.scss',
})
export class Carousel {}
