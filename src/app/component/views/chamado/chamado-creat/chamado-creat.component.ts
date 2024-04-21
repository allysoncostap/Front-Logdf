import { Component } from '@angular/core';
import { ChamadoService } from '../chamado.service';
import { Chamado } from '../chamado.model';
@Component({
  selector: 'app-chamado-creat',
  templateUrl: './chamado-creat.component.html',
  styleUrl: './chamado-creat.component.css'
})
export class ChamadoCreatComponent {
  chamado: Chamado = {
    usuarioId: 0,
    descricao: ''
  };

  constructor(private service: ChamadoService) {}

  enviar(): void {
    this.service.create(this.chamado.usuarioId, this.chamado)
      .subscribe((resposta) => {
        console.log(resposta);
      });
  }

  cancelar() {
    // Lógica para cancelar a operação
  }

}