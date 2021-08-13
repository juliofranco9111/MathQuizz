import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-level-item',
  templateUrl: './level-item.component.html',
  styleUrls: ['./level-item.component.scss']
})
export class LevelItemComponent implements OnInit {

  @Input() level: string
  @Input() numbers: string

  constructor() { }

  ngOnInit(): void {
  }

}
