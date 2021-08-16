import { Component, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-level-item',
  templateUrl: './level-item.component.html',
  styleUrls: ['./level-item.component.scss'],
})
export class LevelItemComponent {
  @Input() level: string;
  @Input() numbers: string;
  @Input() maxPoints: string;

  constructor() {}

  
}
