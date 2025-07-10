import { Component } from '@angular/core';
import { Carousel } from '../../components/carousel/carousel';
import { AboutUs } from '../../components/about-us/about-us';
import { OpeningsSection } from '../../components/openings-section/openings-section';
import { ContactForm } from '../../components/contact-form/contact-form';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [Carousel, AboutUs, OpeningsSection, ContactForm],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {}
