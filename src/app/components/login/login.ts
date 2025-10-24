import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';
import { IUser } from '../../interfaces/iuser';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  productservice = inject(ProductService);
  router = inject(Router);
  http = inject(HttpClient);
  products: IUser[] = [];

  onSubmit(form: any) {
    this.http.get<any>('https://dummyjson.com/users').subscribe((data) => {
      this.products = data.users;

      let userfound = this.products.find(user => {
        return user.username == form.value.Username && user.password == form.value.password;
      });

      if (userfound) {
        localStorage.setItem('auth', 'true');
        this.router.navigate(['/product-list']);
      }
      else {
        localStorage.setItem('auth', 'false');
        alert("invalid username or password");
      }
    });
  }
  goToRegister() {
    this.router.navigate(['/add-user']);
  }
}
