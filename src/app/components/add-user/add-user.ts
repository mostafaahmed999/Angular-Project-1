import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.css'
})
export class AddUser {
    fb=inject(FormBuilder)
  router=inject(Router)

    userForm: FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    imageUrl: ['', Validators.required],
  });

  users: any[] = [];

  onSave() {
    if (this.userForm.valid) {
      this.users.push(this.userForm.value);
      alert('User added successfully Please login now.');
      this.userForm.reset();

      //بعد ما يضيف المستخدم، يرجع لصفحة login
      // this.router.navigate(['/login']);
    }
  }


}
