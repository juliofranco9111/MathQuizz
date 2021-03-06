import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: [],
})
export class GameOverComponent implements OnInit {
  public level = parseInt(this.route.params['_value'].level);
  public current = parseInt(localStorage.getItem('current')) || 0;
  public max: any = this.dataService.getMaxPoints(this.level);
  public loading = true;
  public userName: string;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router,
    private meta: Meta,
    private title: Title
  ) {}
  ngOnInit(): void {

    this.title.setTitle(`| Game Over | Points: ${this.current}`)
    this.meta.updateTag({ name: 'description', content: 'Game over page of MathQuizz' })



    if (!this.max && this.current > 0) {
      this.dataService.setMaxPoints(this.current, this.level);
    }

    if (this.max && this.current > this.max) {
      this.max = this.current;
      this.dataService.setMaxPoints(this.current, this.level);
    }

    this.userName = localStorage.getItem('name');

    this.loading = false;
  }

  handleStartAgain(): void {
    this.router.navigateByUrl(`quizz/${this.level}`);
  }
}
