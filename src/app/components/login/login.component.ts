import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/UserAuth/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form! : FormGroup;
  submitted =false;
  data: any;

  constructor(private authService: AuthserviceService,
    private toastr: ToastrService,
    private formBuilder : FormBuilder,
    private router: Router) { }

    // Form For Login
    creatForm(){
      this.form = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      });
    }
  ngOnInit(): void {
    this.creatForm();

  }
  get f(){
    return this.form.controls;
  }

  loginUser(){
    this.submitted =true;
    if(this.form.invalid){
      return;
    }
    this.authService.loginUser(this.form.value).subscribe(res => {
      this.data = res
      console.log(this.data);
      // Store Token
      localStorage.setItem('token', res.token)
     if(this.data){
      this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
        timeOut:2000,
        progressBar:true
      });
     }else{
       this.toastr.error(JSON.stringify(this.data.code), JSON.stringify(this.data.message),{
         progressBar: true,
         timeOut: 3000
       })
     }
      this.router.navigate(['/dashboard']);
    })
  }

}
