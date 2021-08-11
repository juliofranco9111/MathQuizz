import { DataService } from './../../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent implements OnInit, OnDestroy {
  public nameUser: string;

  showForm = false;

  constructor(private dataS: DataService, private router: Router) {}

  ngOnInit(): void {
    this.nameUser = this.dataS.getUserName();

    if (!this.nameUser || this.nameUser === '') {
      this.showForm = true;
    }

    console.log('me inicie');
  }

  ngOnDestroy(): void {
    console.log('me fui');
  }

  handleStart(): void {
    this.router.navigateByUrl('/level')
  }
}
