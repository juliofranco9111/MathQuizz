import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: [],
})
export class StartComponent implements OnInit {
  
  public nameUser: string;
  showForm = false;
  loading = true;

  constructor(private dataS: DataService, private router: Router, private update: SwUpdate) {}

  ngOnInit(): void {
    this.nameUser = this.dataS.getUserName();

    if (!this.nameUser || this.nameUser === '') {
      this.showForm = true;
    }

    this.loading = false;

  }



  
}
