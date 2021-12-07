import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthserviceService } from 'src/app/services/UserAuth/authservice.service';


@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  form! : FormGroup;
  submitted =false;
  data: any;

  constructor(private authService: AuthserviceService,
    private toastr: ToastrService,
    private formBuilder : FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

     // Form For Login
     creatForm(){
      this.form = this.formBuilder.group({
        email: ['', Validators.required],
      });
    }

  ngOnInit(): void {
    this.creatForm();
  }
  get f(){
    return this.form.controls;
  }

  resetPassword(){
    this.submitted =true;
    if(this.form.invalid){
      return;
    }
    this.authService.resetPassword(this.form.value).subscribe(res => {
      this.data = res;
      if(this.data){
        this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
          timeOut:2000,
          progressBar:true
        });
        this.router.navigate(['/login']);
      }else{
        this.toastr.error(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
          timeOut:3000,
          progressBar: true
        })
      }
    })
  }

}
