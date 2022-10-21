import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prontuario',
  templateUrl: './prontuario.component.html',
  styleUrls: ['./prontuario.component.css']
})
export class ProntuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let calendarioAgenda = (document.getElementById("dataConsulta1") as HTMLInputElement)
    let hoje: Date = new Date;
  }
}
