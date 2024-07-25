import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const DATA: Array<Data> = [
  {
    name: 'John Doe',
    age: 30,
  },
  {
    name: 'Jane Doe',
    age: 25,
  },
  {
    name: 'Jim Doe',
    age: 40,
  },
  {
    name: 'Jill Doe',
    age: 35,
  },
];

export type Data = {
  name: string;
  age: number;
};

@Injectable({
  providedIn: 'root',
})
export class DataService {
  getData() {
    return of(DATA);
  }
}
