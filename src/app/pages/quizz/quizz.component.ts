import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getQuestion } from 'src/app/helpers/question';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.scss'],
})
export class QuizzComponent implements OnInit {
  public error: boolean;
  public correct: boolean;
  public question: number[];

  public points: number = 0;

  public firstNumber: number;
  public secondNumber: number;

  public loading: boolean;

  public level: number;

  public prevQuestion: number[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    localStorage.setItem('current', null);
    this.loading = true;
    this.level = parseInt(this.route.params['value'].level);
    this.question = getQuestion(this.level);
    this.firstNumber = this.question[0];
    this.secondNumber = this.question[1];
    this.loading = false;
  }

  handleNextQuestion() {
    this.question = getQuestion(this.level);
    if (this.prevQuestion === this.question) {
      this.question = getQuestion(this.level);
      console.log('me repeat');
    } else {
      this.firstNumber = this.question[0];
      this.secondNumber = this.question[1];
    }
  }

  handleNavigate(path: string) {
    this.router.navigateByUrl(path);
  }

  handleValidateResponse(response: number) {
    if (response !== this.firstNumber * this.secondNumber) {
      this.error = true;
      this.correct = false;
      this.prevQuestion = this.question;
      setTimeout(() => {
        this.handleNavigate(`game-over/${this.level}`);
        this.correct = null;
      }, 1000);

      return;
    }
    this.error = false;
    this.correct = true;
    setTimeout(() => {
      this.points = this.points + 100;
      this.dataService.setPoints(this.points);
      this.correct = null;
      this.handleNextQuestion();
    }, 1000);
  }
}
