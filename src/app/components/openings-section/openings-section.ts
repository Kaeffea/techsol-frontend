import { Component } from '@angular/core';
import { JobCard } from '../job-card/job-card'; // Importa o componente filho

@Component({
  selector: 'app-openings-section',
  standalone: true,
  imports: [JobCard], // Declara que vamos usar o JobCard aqui
  templateUrl: './openings-section.html',
  styleUrl: './openings-section.scss'
})
export class OpeningsSection {
  // Dados estáticos para as vagas
  jobOpenings = [
    {
      title: 'Desenvolvedor(a) Backend Pleno (PHP/Laravel)',
      location: 'Remoto',
      description: 'Buscamos um(a) dev apaixonado(a) por PHP e Laravel para construir APIs robustas e escaláveis para nossos clientes.'
    },
    {
      title: 'Desenvolvedor(a) Frontend Sênior (Angular)',
      location: 'São Paulo, SP (Híbrido)',
      description: 'Oportunidade para liderar o desenvolvimento de interfaces complexas e reativas com Angular, criando experiências incríveis.'
    },
    {
      title: 'Analista de QA (Automação)',
      location: 'Remoto',
      description: 'Venha garantir a qualidade dos nossos sistemas através da criação e manutenção de testes automatizados.'
    }
  ];
}