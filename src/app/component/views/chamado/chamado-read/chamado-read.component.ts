import { Component, OnInit } from '@angular/core';
import { ChamadoService } from '../chamado.service';
import { Chamado } from '../chamado.model';

import { Router } from '@angular/router';


@Component({
  selector: 'app-chamado-read',
  templateUrl: './chamado-read.component.html',
  styleUrls: ['./chamado-read.component.css']
})
export class ChamadoReadComponent implements OnInit {

  chamado: Chamado[] = [];
  displayedColumns: string[] = ['id', 'status', 'fila', 'date', 'acoes'];
  isLoading: boolean = false;
  error: string | null = null;

  constructor(private service: ChamadoService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.isLoading = true;
    this.service.findAll().subscribe(
      (resposta: Chamado[]) => {
        this.chamado = resposta;
        this.isLoading = false;
      },
      (error: any) => {
        this.error = 'Ocorreu um erro ao carregar os chamados.';
        this.isLoading = false;
      }
    );
  }

  irParaChamadoCreate() {
  
   this.router.navigate(["chamado/create"]);
  }
}