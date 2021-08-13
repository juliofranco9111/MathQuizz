import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
})
export class LevelComponent implements OnInit {
  public levels = [
    { level: '1', numbers: '1 - 3' },
    { level: '2', numbers: '4 - 6' },
    { level: '3', numbers: '7 - 9' },
    { level: '4', numbers: 'Todos' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleNavigateBack() {
    this.router.navigateByUrl('/');
  }

  handleSelectLevel(level: string) {
    console.log(level);
    this.router.navigateByUrl(`/quizz/${level}`);
  }
}
