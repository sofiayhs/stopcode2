import { Component } from '@angular/core';
import {Transazione} from '../models/transazioni';
import {TRANSAZIONI} from '../data/transactions';

@Component({
  selector: 'app-lista-transazioni',
  templateUrl: './lista-transazioni.component.html',
  styleUrls: ['./lista-transazioni.component.css']
})

export class ListaTransazioniComponent {
  transazioni: Transazione[] = TRANSAZIONI;
}
