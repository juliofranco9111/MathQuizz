import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-medal',
  templateUrl: './medal.component.html',
  styles: [
  ]
})
export class MedalComponent implements OnInit {

  @Input() width: number;

  constructor() { }

  ngOnInit(): void {
  }

}
