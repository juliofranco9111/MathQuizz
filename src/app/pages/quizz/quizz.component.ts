import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { getQuestion } from 'src/app/helpers/question';

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

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.loading = true;
    this.level = parseInt(this.route.params['value'].level);
    this.question = getQuestion(this.level);
    this.firstNumber = this.question[0];
    this.secondNumber = this.question[1];
    this.loading = false;

    /* setTimeout(() => {
      this.handleNextQuestion();
      console.log('me hago');
    }, 5000); */
  }

  handleNextQuestion() {
    this.question = getQuestion(this.level);
    this.firstNumber = this.question[0];
    this.secondNumber = this.question[1];
  }

  handleNavigate(path: string) {
    this.router.navigateByUrl(path);
  }

  handleValidateResponse(response: number) {
    if (response !== this.firstNumber * this.secondNumber) {
      this.error = true;
      this.correct = false;
      setTimeout(() => {
        this.handleNavigate('/game-over');
        this.correct = null;
      }, 1300);

      return;
    }
    this.error = false;
    this.correct = true;
    setTimeout(() => {
      this.points = this.points + 100;
      this.correct = null;
      this.handleNextQuestion();
    }, 1300);
  }
}
