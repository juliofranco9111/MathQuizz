import { LoadingComponent } from './../components/loading/loading.component';
import { LevelItemComponent } from './../components/level-item/level-item.component';
import { FormComponent } from './../components/form/form.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { StartComponent } from './start/start.component';
import { QuestionComponent } from './../components/question/question.component';
import { QuizzComponent } from './quizz/quizz.component';
import { GameOverComponent } from './game-over/game-over.component';
import { LevelComponent } from './level/level.component';
import { RouterModule } from '@angular/router';
import { MedalComponent } from '../components/medal/medal.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  exports: [StartComponent, FormComponent, QuestionComponent, LevelItemComponent, LoadingComponent, MedalComponent],
  declarations: [
    StartComponent,
    FormComponent,
    QuestionComponent,
    QuizzComponent,
    GameOverComponent,
    LevelComponent,
    MedalComponent,
    LevelItemComponent,
    LoadingComponent
  ],
  providers: [],
})
export class PagesModule {}
