import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router , ActivatedRoute} from '@angular/router';
import { AuthserviceService } from 'src/app/services/UserAuth/authservice.service';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  gettingtoken:any;
  form! : FormGroup;
  submitted =false;
  data: any;
  token:any

  constructor(
    private authService: AuthserviceService,
    private toastr: ToastrService,
    private formBuilder : FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  // Form For Login
  creatForm(){
    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      confirm: ['', Validators.required]
    });
  }


  ngOnInit(): void {
    this.gettingtoken = (this.route.snapshot.params.token);
    //form for submit value
    this.creatForm();
    console.log(this.gettingtoken);
  }
  // getToken(token: any){
  //   this.authService.gettokenForReset(this.token).subscribe(res => {
  //     this.gettingtoken = res;
  //   })
  // }
  //form for error
  get f(){
    return this.form.controls;
  }
  changePassword(){
    this.submitted =true;
    if(this.form.invalid){
      return;
    }
    this.authService.changeUserPassword(this.gettingtoken, this.form.value).subscribe(res => {
      this.data = res;
      if(this.data){
        this.toastr.success(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
          progressBar: true,
          timeOut:3000
        })
      }else{
        this.toastr.error(JSON.stringify(this.data.code), JSON.stringify(this.data.message), {
          timeOut: 3000,
          progressBar: true
        })
      }
    })

  }


}
