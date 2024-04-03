import { Component } from '@angular/core';
import { FormControl, FormGroup, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm : FormGroup;

  constructor() {
    this.registerForm = new FormGroup({
      email: new FormControl('' , [
        Validators.required,
        Validators.pattern("^[a-z][a-z 0-9 (-_.)]{3,40}@[a-z]{3,15}(.com|.net|.edu|.org)$")
      ]),
      fullname: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]{3,20} [a-zA-Z]{3,20} [a-zA-Z]{3,20}$")
      ]),
      username: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]{1}[a-zA-Z0-9]{3,30}$")
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]),
      password2: new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ])
    })
  }
  submitf() {
    console.log(this.registerForm)
    console.log(this.registerForm.controls["password2"].value)
  }

}
