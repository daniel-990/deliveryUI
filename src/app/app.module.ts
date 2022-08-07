import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
//aqui se importan los paquetes de form
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/page404/page404.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalogo', component: CatalogoComponent},
  {path: '**', component: Page404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RegistroComponent,
    LoginComponent,
    CatalogoComponent,
    Page404Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
