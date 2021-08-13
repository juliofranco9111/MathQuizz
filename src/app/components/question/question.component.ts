import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { getWrongResponses } from '../../helpers/question';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() firstNumber: number;
  @Input() secondNumber: number;
  @Output() setResponse = new EventEmitter<number>();

  public responses: number[];
  public first: number;
  public second: number;
  public result: number;
  public obser: any;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('he cambiado');
    console.log(changes);
    this.ngOnInit();
    
  }
  
  ngOnInit(): void {
    
    this.result = this.firstNumber * this.secondNumber;

    this.responses = getWrongResponses(this.result);

    
  }


  handleResponse(response: number):void {

    this.setResponse.emit(response);

  }
}
