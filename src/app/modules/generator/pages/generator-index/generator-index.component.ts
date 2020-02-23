import { Component, OnInit } from '@angular/core';
import { GeneratorService } from '../../services/generator.service';
import { interval, range, timer, } from 'rxjs';

@Component({
  selector: 'app-generator-index',
  templateUrl: './generator-index.component.html',
  styleUrls: ['./generator-index.component.css']
})
export class GeneratorIndexComponent implements OnInit {

  private intevalGenerateGrid = interval(2000);
  private intervalId: number;

  code: string;
  characterTimeoutActive: boolean;

  grid2D: any[][] = [];

  get grid(): any[][] {
    return this.grid2D;
  }

  constructor(private generatorService: GeneratorService) {
    this.generatorService.sendCodeSource.subscribe(code => {
      this.code = code;
    });
  }

  ngOnInit(): void {
    if (this.code) {
      this.generatorService.getGrid2D().subscribe(grid => this.grid2D = grid);
    } else {
      range(1, 10).subscribe(() => this.grid2D.push(new Array(10).fill('-')));
    }
    console.log(this.grid2D.reduce((count, row) => count + row.length, 0));
  }

  generateGrid = () => {
    this.intevalGenerateGrid.subscribe((i) => {
      this.intervalId = i;
      this.generatorService.generate2dGrid();
      this.generatorService.getGrid2D().subscribe(grid => this.grid2D = grid);
      this.generatorService.generateCode();
    });
  }

  stopGeneration = () => {
    clearInterval(this.intervalId);
    this.generatorService.stopGenerationGrid();
  }

  waitCharacterTimer = () => {
    this.characterTimeoutActive = true;
    const timeout = timer(4000);
    timeout.subscribe(() => this.characterTimeoutActive = false);
  }
}
