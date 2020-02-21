export class Payment {

    payment: string;
    ammount: number;
    code: string;
    grid: number;

    constructor(payment: string, ammount: number, code: string, grid: number) {
        this.payment = payment;
        this.ammount = ammount;
        this.code = code;
        this.grid = grid;
    }
}
