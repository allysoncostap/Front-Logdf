import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; // Importado para usar o mat-nav-list
import { MatIconModule } from '@angular/material/icon'; // Importado para usar o mat-icon
import { MatToolbarModule } from '@angular/material/toolbar'; // Importado para usar o mat-sidenav-content
import { HeaderComponent } from './component/template/header/header.component';
import { FooterComponent } from './component/template/footer/footer.component';
import { NavComponent } from './component/template/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';

import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './component/views/home/home.component';
import { ChamadoReadComponent } from './component/views/chamado/chamado-read/chamado-read.component';
import { ChamadoCreatComponent } from './component/views/chamado/chamado-creat/chamado-creat.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    ChamadoReadComponent,
    ChamadoCreatComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule, // Importado
    MatIconModule, // Importado
    MatToolbarModule, // Importado
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
