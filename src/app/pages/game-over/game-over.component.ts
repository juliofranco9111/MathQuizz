import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss'],
})
export class GameOverComponent implements OnInit {
  public level = parseInt(this.route.params['_value'].level);
  public current = parseInt(localStorage.getItem('current')) || 0;
  public max: any = this.dataService.getMaxPoints(this.level);
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
     
    console.log(this.level);
    console.log(this.max);
  }

  handleStartAgain(): void {

    if(!this.max && this.current > 0){
      console.log('no sirve');
      this.dataService.setMaxPoints(this.current, this.level)
    }

    if(this.max && this.current > this.max){
      this.max = this.current;
      this.dataService.setMaxPoints(this.current, this.level)
    }
    
    this.router.navigateByUrl(`quizz/${this.level}`);

  }
}
