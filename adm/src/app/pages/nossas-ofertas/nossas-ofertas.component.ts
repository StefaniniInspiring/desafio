import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nossas-ofertas',
  templateUrl: './nossas-ofertas.component.html',
  styleUrls: ['./nossas-ofertas.component.scss']
})

export class NossasOfertasComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'preco', 'precoDesconto'];
  dataSource;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = JSON.parse(window.localStorage.getItem("ofertas-game-tracker"));
  }

}
