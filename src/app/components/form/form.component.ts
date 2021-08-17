import { DataService } from './../../services/data.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: [],
})
export class FormComponent implements OnInit {
  userName = this.dataS.getUserName();

  registerName = this.fb.group({
    userName: [this.userName],
  });

  @Output() closeForm: EventEmitter<Object> = new EventEmitter();

  constructor(private fb: FormBuilder, private dataS: DataService) {}

  ngOnInit(): void {}

  submit() {
    const { userName } = this.registerName.value;
    if (userName.length > 0 && userName !== '') {
      this.dataS.setUserName(userName);
      this.closeForm.emit(userName);
    }
  }
}
