import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { RecientesComponent } from './components/recientes/recientes.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlertComponent } from './components/alert/alert.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { ViewRegistrosComponent } from './components/view-registros/view-registros.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ViewPokemonComponent } from './components/view-pokemon/view-pokemon.component';
import { ViewPokemonListComponent } from './components/view-pokemon-list/view-pokemon-list.component';
import { SingupComponent } from './components/singup/singup.component';

const rutas: Routes = [
  // { path: '', component: InicioComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // redirige al login si la ruta no se encuentra
  { path: 'recientes', component: RecientesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'singup', component: SingupComponent },
  { path: 'registros-api', component: ViewRegistrosComponent },
  { path: 'pokemon-api', component: ViewPokemonComponent },
  { path: 'pokemon-list', component: ViewPokemonListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RecientesComponent,
    LoginComponent,
    HomeComponent,
    SingupComponent,
    NavbarComponent,
    AlertComponent,
    DrawerComponent,
    ViewRegistrosComponent,
    ViewPokemonComponent,
    ViewPokemonListComponent,
    SingupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas),
    MatCardModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
