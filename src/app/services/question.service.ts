import { getTables } from 'src/app/helpers/question';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  public questions: any[];
  public level: string = '1';

  constructor() {
    this.questions = getTables(this.level);
  }

  removeQuestion() {
    this.questions.shift();
  }

  setLevel(level: string) {
    this.level = level;
  }

  setNewQuestions(){
    this.questions = null;
    this.questions = getTables(this.level);
  }
}
