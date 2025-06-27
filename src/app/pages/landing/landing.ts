import { Component } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Carousel],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {}
