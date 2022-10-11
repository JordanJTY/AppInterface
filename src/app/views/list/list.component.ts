import { Component, OnInit } from '@angular/core';
import { Entree } from 'src/app/shared/interfaces/entree';
import { EntreeService } from 'src/app/shared/services/entree.service';
import { LoadScriptsService } from 'src/app/shared/services/load-scripts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public entryList: Entree[];
  public search: string = '';

  constructor(private entreeService: EntreeService, private name: LoadScriptsService) {
    this.entryList = [
      {
        name: 'Monitor 144hz',
        description: 'xd',
        image: 'https://www.reasonwhy.es/media/cache/destacada/colores-vender-mas.jpg'
      },
      {
        name: 'dx',
        description: 'dx',
        image: 'https://www.reasonwhy.es/media/cache/destacada/colores-vender-mas.jpg'
      }
    ];

    name.Load(["slider"]);
  }

  ngOnInit(): void { }

  public showTitle(title: string): void {
    alert(`Entrada seleccionada: ${title}.`);
  }
}
