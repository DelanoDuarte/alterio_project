import { Injectable } from '@angular/core';
import { ReplaySubject, Observable, of } from 'rxjs';
import { Util } from 'src/app/shared/Util';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  grid2D: any[][] = [];

  constructor() { }

  // Observable string sources
  sendCodeSource = new ReplaySubject<string>(5);

  // Service message commands
  sendCode(code: string) {
    this.sendCodeSource.next(code);
  }

  addItensGrid2D(list: any[]) {
    this.grid2D.push(list);
  }

  getGrid2D(): Observable<any[][]> {
    return of(this.grid2D);
  }

  generate2dGrid = () => {
    for (let i = 0; i < 10; i++) {
      this.grid2D[i] = [];
      for (let j = 0; j < 10; j++) {
        this.grid2D[i][j] = Util.generateRandomLetters(1, null);
      }
    }
  }

  generate2dGridWithCharacater = (character: string) => {
    for (let i = 0; i < 2; i++) {
      this.grid2D[i] = [];
      for (let j = 0; j < 10; j++) {
        if (character) {
          this.grid2D[i][j] = character.toLowerCase();
        }
      }
    }
    for (let i = 2; i < 10; i++) {
      this.grid2D[i] = [];
      for (let j = 0; j < 10; j++) {
        this.grid2D[i][j] = Util.generateRandomLetters(1, character);
      }
    }
  }

  stopGenerationGrid = () => {
    this.grid2D = [];
    this.sendCodeSource.next(null);
    this.sendCodeSource.complete();
  }

  generateCode = () => {
    const time = new Date().getSeconds();

    const firstLetter = this.grid2D[parseInt((time / 10).toString())][parseInt((time % 10).toString())];
    const secondLetter = this.grid2D[parseInt((time % 10).toString())][parseInt((time / 10).toString())];

    const occurrencesFirstLetter = this.grid2D.filter(g => g.some(v => firstLetter === v)).length;
    const occurrencesSecondLetter = this.grid2D.filter(g => g.some(v => secondLetter === v)).length;

    const finalCode = occurrencesFirstLetter.toString() + occurrencesSecondLetter.toString();

    this.sendCode(parseInt(finalCode).toString());
  }

}
