import { Usuario } from 'src/models/Usuario';
import { RandomUserService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-registros',
  templateUrl: './view-registros.component.html',
  styleUrls: ['./view-registros.component.css'],
})
export class ViewRegistrosComponent implements OnInit {
  // interface Usuario{}
  constructor(private randomUsersService: RandomUserService) {}
  public users: any = [];
  totalUsuarios: number = 0;
  paginaActual = 1;
  usuariosPorPagina = 10;
  paginasTotales = 0;

  ngOnInit(): void {
    this.cargarUsuarios();
  }
  public cargarUsuarios() {
    this.randomUsersService
      .getUsers(
        `https://randomuser.me/api/?inc=name,email,picture,phone&?page=${
          this.paginaActual
        }&results=${50}&seed=abc`
      )
      .subscribe((res: any) => {
        this.users = res.results;
        this.totalUsuarios = res.info.results;
        // this.paginasTotales = 24;
      });
  }
  handlerChangeRangeValue(event: Event) {
    const inputRange = event.target as HTMLInputElement;
    this.usuariosPorPagina = +inputRange.value;
  }
}
