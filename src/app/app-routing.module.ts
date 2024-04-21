import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadoReadComponent } from './component/views/chamado/chamado-read/chamado-read.component';
import { ChamadoCreatComponent } from './component/views/chamado/chamado-creat/chamado-creat.component';



const routes: Routes = [

{
  path:'chamado',
  component:ChamadoReadComponent

},
{
  path:'chamado/create',
  component:ChamadoCreatComponent

}]


;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
