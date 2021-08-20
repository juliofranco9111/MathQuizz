import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: [],
})
export class StartComponent implements OnInit {
  
  public nameUser: string;
  showForm = false;
  loading = true;

  constructor(private dataS: DataService, private router: Router) {}

  ngOnInit(): void {
    this.nameUser = this.dataS.getUserName();

    if (!this.nameUser || this.nameUser === '') {
      this.showForm = true;
    }

    this.loading = false;

    
  }

  
}
