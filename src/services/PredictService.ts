import { Matrix, MatrixTransposeView, solve } from 'ml-matrix';
import { AxisObject } from './PredictService.d';
import getLocalData from '../utils/getLocalData';

export default class PredictService {
  private degree: number;

  private coefficients: number[];

  private axis: AxisObject[];

  constructor() {
    this.axis = getLocalData();
    this.degree = 4;
    this.regress();
  }

  private forecastInfectedsDay(day: number): any {
    let value = 0;
    for (let rotation = 0; rotation < this.degree; rotation += 1) {
      value += this.coefficients[rotation] * day ** rotation;
    }
    return value;
  }

  private arrayUntilValue(value: number) {
    const count = [];
    for (let index = 0; index < value; index += 1) {
      count.push(index);
    }
    return count;
  }

  private regress() {
    const rows = this.axis.length;
    const columns = [this.axis.map(({ y }) => y)];
    const degree = this.degree + 1;
    const powers = this.arrayUntilValue(degree);

    const F = new Matrix(rows, degree);
    const Y = new Matrix(columns);

    for (let k = 0; k < degree; k += 1) {
      for (let i = 0; i < rows; i += 1) {
        if (powers[k] === 0) {
          F.set(i, k, 1);
        } else {
          F.set(i, k, (this.axis[i].x ** powers[k]));
        }
      }
    }

    const FT = new MatrixTransposeView(F);
    const A = FT.mmul(F);
    const B = FT.mmul(new MatrixTransposeView(Y));
    this.coefficients = solve(A, B).to1DArray();
  }

  predict(value: number) {
    const days = this.arrayUntilValue(value);
    const forecast = [];
    for (let day = 1; day <= days.length; day += 1) {
      forecast.push({
        day,
        infecteds: Math.floor(this.forecastInfectedsDay(day) * 10),
      });
    }
    return forecast;
  }
}
