import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'revsion';
  loginForm
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
this.loginForm = new FormGroup({
  email: new FormControl('',[Validators.required,Validators.email]),
  password: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
});


}

get email() { return this.loginForm.get('email'); }

get password() { return this.loginForm.get('password'); }
submit(data){
  console.log(data);
  }
}
