import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importe FormsModule

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
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './component/views/home/home.component';
import { ChamadoReadComponent } from './component/views/chamado/chamado-read/chamado-read.component';

import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
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
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    CommonModule,
    MatRadioModule,
    MatInputModule,
    FormsModule, // Adicione FormsModule aos imports
    MatFormFieldModule,
    MatButtonModule,
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
