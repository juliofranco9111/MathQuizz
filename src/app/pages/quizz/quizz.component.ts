import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getQuestion } from 'src/app/helpers/question';
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

  public question: number[];
  public prevQuestion: number[];

  public points: number = 0;

  public firstNumber: number;
  public secondNumber: number;
  public level: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    localStorage.setItem('current', null);
    this.level = parseInt(this.route.params['value'].level);
    this.question = getQuestion(this.level);
    this.firstNumber = this.question[0];
    this.secondNumber = this.question[1];
    this.loading = false;    
  }

  handleNextQuestion(prev: number[]) {
    this.question = getQuestion(this.level, this.prevQuestion);
    this.firstNumber = this.question[0];
    this.secondNumber = this.question[1];
  }

  handleValidateResponse(response: number) {
    if (response !== this.firstNumber * this.secondNumber) {
      this.error = true;
      this.correct = false;
      setTimeout(() => {
        this.router.navigateByUrl(`game-over/${this.level}`);
        this.correct = null;
      }, 1000);
      return;
    }
    this.error = false;
    this.prevQuestion = this.question;
    this.correct = true;
    setTimeout(() => {
      this.points = this.points + 100;
      this.dataService.setPoints(this.points);
      this.correct = null;
      this.handleNextQuestion(this.question);
    }, 700);
  }

  handleExit() {
    this.router.navigateByUrl(`/game-over/${this.level}`);
  }
}
