import { LevelComponent } from './pages/level/level.component';
import { GameOverComponent } from './pages/game-over/game-over.component';
import { QuizzComponent } from './pages/quizz/quizz.component';
import { StartComponent } from './pages/start/start.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesGuard } from './guards/pages.guard';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'quizz/:level', component: QuizzComponent, canActivate: [PagesGuard] },
  { path: 'level', component: LevelComponent, canActivate: [PagesGuard] },
  { path: 'game-over/:level', component: GameOverComponent, canActivate: [PagesGuard] },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
