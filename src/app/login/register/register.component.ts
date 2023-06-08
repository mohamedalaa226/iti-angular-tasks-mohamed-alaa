import { Component } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  regForm ! : FormGroup;

  ngOnInit(){

    this.regForm = new FormGroup({
      formname : new FormControl('',[
        Validators.pattern("^[A-Za-z]+$"),
        Validators.required,
    ]),
    formUname :new FormControl('',[
      Validators.pattern("^@[^ ]*"),
      Validators.required,
    ]),
    formEmail :new FormControl('',[
      Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"),
      Validators.required,
    ]),
    formPass :new FormControl('',[
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
      Validators.required,
      Validators.minLength(8)
    ]),
    formCPass :new FormControl('',[
      Validators.required,
      Validators.minLength(8)
    ])
    });
  }
  submitForm(){
    console.log(this.regForm.value)
  }

}
