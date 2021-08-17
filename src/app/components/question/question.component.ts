import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { getWrongResponses } from '../../helpers/question';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: [],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() firstNumber: number;
  @Input() secondNumber: number;
  @Output() setResponse = new EventEmitter<number>();

  public responses: number[];
  public first: number;
  public disabled: boolean;
  public second: number;
  public result: number;
  public obser: any;
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
    this.disabled = false;
  }
  
  ngOnInit(): void {
    this.disabled = false;
    this.result = this.firstNumber * this.secondNumber;
    
    this.responses = getWrongResponses(this.result);
  }
  
  handleResponse(response: number): void {
    this.disabled = true;
    this.setResponse.emit(response);
  }
}
