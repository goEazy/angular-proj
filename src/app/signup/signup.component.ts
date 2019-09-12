import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsernameValidators } from './username.validators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private router: Router){}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

  form = new FormGroup({
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
    ]),
    password: new FormControl("", Validators.required)
  });

  get username() {
    return this.form.get("username");
  }

  login() {
    console.log("called");
    if(this.username.value == "harsha"){
      this.router.navigate(['/heroes']);
    }else{
      this.form.setErrors({
        invalidLogin: true
      });
    }
    
  }
}