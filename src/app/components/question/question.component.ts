import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: [],
})
export class QuestionComponent implements OnInit, OnChanges {
  @Input() question: any;
  @Output() setResponse = new EventEmitter<number>();

  public responses: number[];
  public first: number;
  public disabled: boolean;
  public second: number;
  public result: number;
  constructor() {}

  ngOnInit(): void {
    this.disabled = false;
    this.responses = this.question.options;
    this.first = this.question.table;
    this.second = this.question.multiplier;
    this.result = this.question.result;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();
    this.disabled = false;
  }

  handleResponse(response: number): void {
    this.disabled = true;
    this.setResponse.emit(response);
  }
}
