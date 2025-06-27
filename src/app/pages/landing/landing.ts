import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { Footer } from '../../components/footer/footer';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Header, Footer],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {}
