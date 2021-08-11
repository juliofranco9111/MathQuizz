import { FormComponent } from './../components/form/form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './../components/question/question.component';
import { QuizzComponent } from './quizz/quizz.component';
import { GameOverComponent } from './game-over/game-over.component';
import { LevelComponent } from './level/level.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  exports: [StartComponent, FormComponent, QuestionComponent],
  declarations: [
    StartComponent,
    FormComponent,
    QuestionComponent,
    QuizzComponent,
    GameOverComponent,
    LevelComponent,
  ],
  providers: [],
})
export class PagesModule {}
