// lista-contatti.component.ts
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Contatto {
  nome: string;
  cognome: string;
  eta: number;
  numeroTelefono: string;
  isOnline: boolean;
  colorePreferito: string;
}

@Component({
  selector: 'app-lista-contatti',
  standalone: true,
  templateUrl: './lista-contatti.component.html',
  styleUrls: ['./lista-contatti.component.css'],
  imports:[ CommonModule],
})
export class ListaContattiComponent {
  contatti: Contatto[] = [
    { nome: 'Mario', cognome: 'Rossi', eta: 30, numeroTelefono: '123456789', isOnline: true, colorePreferito: 'verde' },
    { nome: 'Luigi', cognome: 'Bianchi', eta: 25, numeroTelefono: '987654321', isOnline: false, colorePreferito: 'rosso' }
    // Aggiungi altri contatti se necessario
  ];
}
