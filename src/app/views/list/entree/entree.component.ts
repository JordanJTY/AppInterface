import { Component, Input, OnInit } from '@angular/core';
import { Entree } from 'src/app/shared/interfaces/entree';

@Component({
  selector: 'app-entree',
  templateUrl: './entree.component.html',
  styleUrls: ['./entree.component.css']
})
export class EntreeComponent implements OnInit {

  @Input()
  public entree: Entree;

  constructor() {
    this.entree = {
      title: '',
      body: ''
    }
  }

  ngOnInit(): void {
  }

}
