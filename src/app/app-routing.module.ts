import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadoReadComponent } from './component/views/chamado/chamado-read/chamado-read.component';

const routes: Routes = [

{
  path:'chamado',
  component:ChamadoReadComponent

}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
