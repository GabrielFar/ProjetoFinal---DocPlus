import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from "@angular/router";

@Component({
  selector: 'app-pag-de-load',
  templateUrl: './pag-de-load.component.html',
  styleUrls: ['./pag-de-load.component.css']
})
export class PagDeLoadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadScreen();
  }

  public loadScreen(){
    setTimeout(() => {
      this.router.navigate(['/tipoUsuario']);
    }, 20000);
  }
}
