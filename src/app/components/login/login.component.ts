import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RandomUserService } from './../../../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private router: Router, private RandomUserService: RandomUserService) {}
  
  public user: any = null;
  //constructor(private RandomUserService: RandomUserService) { }
  nombre: string = '';
  correo: string = '';
  imag: string = '';

  email: string = '';
  password: string = '';
  fullname: string = '';
  disableLoginButton: boolean = false;
  warning: boolean = false;
  warningMessage: string = '';

  login(event: Event) {
    event.preventDefault();
    const user: object = {
      email: this.email,
      password: this.password,
      fullname: this.fullname,
    };

    if (this.validar()) {
      sessionStorage.setItem('fullname', this.fullname);

      this.router.navigate(['/home']);
    }
  }
  
  singup(event: Event) {
    this.router.navigate(['/singup']);
  }

  validar() {
    //if (!this.fullname || !this.password || !this.email) {
    if (!this.fullname || !this.password) {
      // alert();
      this.warningMessage = 'Todos los campos son obligatorios';
      this.warning = true;
      return false;
    }
    // valida nombre
    const fullnameRegex = /^[a-zA-Z\s]+$/;
    if (!fullnameRegex.test(this.fullname)) {
      this.warningMessage = 'El nombre solo puede contener letras y numeros';
      this.warning = true;
      return false;
    }

    // validar password
    if (this.password.length < 6) {
      this.warningMessage =
        'la constraseña debe contener al menos 6 caracteres';
      this.warning = true;
      return false;
    }

    return true;
  }

  // para guardar en storage
  
  ngOnInit() {
    this.RandomUserService.getUsers('https://randomuser.me/api/').subscribe(
      (res: any) => {
        console.log('Response', res.results[0]);
        this.user = res.results[0];
        console.log(this.user.email);
        sessionStorage.setItem('nombre', this.user.name.first + this.user.name.last);
        sessionStorage.setItem('correo', this.user.email);
        sessionStorage.setItem('foto', this.user.picture.medium);
      }
    );
  }
}