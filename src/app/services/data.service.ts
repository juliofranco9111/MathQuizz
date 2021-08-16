import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getUserName(): string {
    const nameUser = localStorage.getItem('name');
    return nameUser && nameUser.length > 0 && nameUser !== '' ? nameUser : '';
  }

  setUserName(name: string): void {
    name = name.trim();
    localStorage.setItem('name', name);
  }

  getMaxPoints(level: number): number {
    const levelString = level.toString();
    const storedData = JSON.parse(localStorage.getItem(`level-${levelString}`));

    if (storedData && typeof storedData === 'object') {
      return parseInt(storedData.points);
    } else {
      return 0;
    }
  }

  setMaxPoints(points: number, level: number): void {
    const data = JSON.stringify({ level, points });
    localStorage.setItem(`level-${level}`, data);
  }

  setPoints(points: number): void {
    localStorage.setItem('current', points.toString());
  }
  getPoints(): number {
    return parseInt(localStorage.getItem('current'));
  }
}
