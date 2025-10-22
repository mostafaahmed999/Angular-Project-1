import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit() {
  // 🔒 بسيط كمثال – تقدر تبدله بـ service أو API
  if (this.email === 'admin@gmail.com' && this.password === '123456') {
    localStorage.setItem('auth', 'true'); // نحط علامة إنه داخل ✅
    this.router.navigate(['/product-list']);
  } else {
    this.errorMessage = 'Invalid email or password!';
  }
}

}
