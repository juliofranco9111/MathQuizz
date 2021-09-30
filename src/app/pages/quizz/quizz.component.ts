import { QuestionService } from './../../services/question.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getTables } from 'src/app/helpers/question';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: [],
})
export class QuizzComponent implements OnInit {
  public error: boolean;
  public correct: boolean;
  public loading = true;

  public tables: any[];

  public currentQuestion: any;

  public points: number = 0;

  public level: string;

  constructor(
    private router: Router,
    private dataService: DataService,
    private questionService: QuestionService
  ) {}

  ngOnInit(): void {
    localStorage.setItem('current', null);
    this.questionService.setNewQuestions();
    this.handleInit();
    
  }

  handleInit() {
    this.level = this.questionService.level;
    this.tables = this.questionService.questions;
    this.currentQuestion = this.tables[0];
    this.loading = false;
    if (this.tables.length < 1) {
      this.handleExit();
      return;
    }
  }

  handleNextQuestion() {
    this.tables.shift();
    this.handleInit();
  }

  handleValidateResponse(response: number) {
    if (response !== this.currentQuestion.result) {
      this.error = true;
      this.correct = false;
      setTimeout(() => {
        this.router.navigateByUrl(`game-over/${this.level}`);
        this.correct = null;
      }, 1000);
      return;
    }
    this.error = false;
    this.correct = true;
    setTimeout(() => {
      this.points = this.points + 500;
      this.dataService.setPoints(this.points);
      this.correct = null;
      this.handleNextQuestion();
    }, 700);
  }

  handleExit() {
    this.router.navigateByUrl(`/game-over/${this.level}`);
  }
}
