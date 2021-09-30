import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: [],
})
export class StartComponent implements OnInit {
  public nameUser: string;
  showForm = false;
  loading = true;

  constructor(
    private dataS: DataService,
    private router: Router,
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('| MathQuizz - Home|');
    
    this.meta.updateTag({ name: 'description', content: 'Home page MathQuizz' })
    this.nameUser = this.dataS.getUserName();

    if (!this.nameUser || this.nameUser === '') {
      this.showForm = true;
    }

    this.loading = false;
  }
}
