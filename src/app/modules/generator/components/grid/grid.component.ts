import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { GeneratorService } from '../../services/generator.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  header = new Array(10);

  rows = new Array(10);
  cols = new Array(10);

  @Input()
  private grid;

  get grids(): any[][] {
    return this.grid;
  }

  @Output()
  generateGridEvent = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  generateGrid = () => {
    this.generateGridEvent.emit();
  }
}
