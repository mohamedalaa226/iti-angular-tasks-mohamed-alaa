import { Component , OnInit} from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent  {

  regForm ! : FormGroup;

  ngOnInit(){

    this.regForm = new FormGroup({
    formEmail :new FormControl('',[
      Validators.pattern("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"),
      Validators.required,
    ]),
    formPass :new FormControl('',[
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
      Validators.required,
      Validators.minLength(8)
    ]),

  });
  }
  submitForm(){
    console.log(this.regForm.value)
  }
}
