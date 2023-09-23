import { Component,Input } from '@angular/core';
import {Transazione} from '../models/transazioni'


@Component({
  selector: 'app-elementi-transazione',
  templateUrl: './elementi-transazione.component.html',
  styleUrls: ['./elementi-transazione.component.css']
})
export class ElementiTransazioneComponent {
@Input() elemento?: Transazione;

}
