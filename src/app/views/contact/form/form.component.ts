import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public confirmSend(): void {
    Swal.fire('Proceso terminado. Logout OK').then(respuesta => {
      window.location.reload();
    });
  }
}
