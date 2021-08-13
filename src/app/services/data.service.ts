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

  getPoints( level: number): any {
    return JSON.parse(localStorage.getItem(`level-${level}`)) || {};
  }

  setPoints(points: number, level: number): void {
    const data = JSON.stringify({ level, points });
    localStorage.setItem(`level-${level}`, data);
  }
}
