import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: [],
})
export class LevelComponent implements OnInit {
  public loading = true;
  public levels = [
    {
      level: '1',
      numbers: '1 - 3',
      maxPoints: this.dataService.getMaxPoints(1) || 0,
    },
    {
      level: '2',
      numbers: '4 - 6',
      maxPoints: this.dataService.getMaxPoints(2) || 0,
    },
    {
      level: '3',
      numbers: '7 - 9',
      maxPoints: this.dataService.getMaxPoints(3) || 0,
    },
    {
      level: '4',
      numbers: 'Todos',
      maxPoints: this.dataService.getMaxPoints(4) || 0,
    },
  ];

  constructor(
    private router: Router,
    private dataService: DataService,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('| MathQuizz - Select level |');
    this.meta.updateTag({ name: 'description', content: 'Select level of MathQuizz' })
    this.loading = false;
  }

  handleSelectLevel(level: string) {
    this.router.navigateByUrl(`/quizz/${level}`);
  }
}
