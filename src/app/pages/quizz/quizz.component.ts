import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private dataService: DataService
  ) {
    
    
  }
  
  ngOnInit(): void {
    this.level = this.route.params['value'].level;
    localStorage.setItem('current', null);
    this.tables = getTables(this.level);
    this.currentQuestion = this.tables[0];
    this.loading = false;    
  }

  handleNextQuestion() {
    console.log(this.tables.length)
    this.tables.shift();
    this.ngOnInit();
  }

  handleValidateResponse(response: number) {
    if (response !== this.currentQuestion.result ) {
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
      this.points = this.points + 100;
      this.dataService.setPoints(this.points);
      this.correct = null;
      this.handleNextQuestion();
    }, 700); 
  }

  handleExit() {
    this.router.navigateByUrl(`/game-over/${this.level}`);
  }
}
