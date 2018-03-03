import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Input() public compteur: number;
  @Output() public updatedC: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  incremente(): void{
    this.updatedC.emit(1);
  }
  decremente(): void{
    this.updatedC.emit(-1);
  }
}
