import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators , FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthserviceService } from 'src/app/services/UserAuth/authservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form! : FormGroup;
  submitted =false;
  data: any;
  token: any
  constructor( private authService: AuthserviceService,
    private toastr: ToastrService,
    private formBuilder : FormBuilder,
    private router: Router ) { }

  creatForm(){
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.creatForm();
  }

  get f(){
    return this.form.controls;
  }

  registerUser(){
    this.submitted = true;
    if(this.form.invalid){
      return;
    }
    this.authService.registerNewUser(this.form.value).subscribe(res => {
      this.data = res;
      console.log(this.data);
      //Store Token In Local Storage
      localStorage.setItem('token', res.token)
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut:2000,
        progressBar:true
      })
      this.router.navigateByUrl('/');
    },
    err=> {
      console.log(err);
    })
  }

}
