import { Component, OnInit } from '@angular/core';
import { EntreeService } from 'src/app/shared/services/entree.service';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public entryList: any;

  constructor(private entreeService: EntreeService, private name: LoadScriptsService) {
    // this.retrieveEntry = [];
    name.Load(["slider"]);
  }

  ngOnInit(): void {
    this.retrieveEntry();
  }

  private retrieveEntry(): void {
    this.entreeService.retrieveEntry().subscribe(
      (data) => {
        this.entryList = data;
      },
      (error: Error) => {
        console.log('Error: ', error);
      },
      () => {
        console.log('Petición realizada correctamente');
      }
    );
  }

  public showTitle(title: string): void {
    alert(`Entrada seleccionada: ${title}.`);
  }
}
