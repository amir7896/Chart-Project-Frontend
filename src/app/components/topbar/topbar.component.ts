import { Component, EventEmitter,  OnInit, Output } from '@angular/core';
import { AuthserviceService } from 'src/app/services/UserAuth/authservice.service';
import { SidebarService } from 'src/app/services/Sidebar/sidebar.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  // providers:[SidebarService]
})
export class TopbarComponent implements OnInit {

  isDisplayed:boolean = false;

  constructor(public authService: AuthserviceService,
    private sidebarService: SidebarService) {}


  ngOnInit(): void {
    
  }
  
  togglesideNav() {
    this.isDisplayed = !this.isDisplayed;
    this.sidebarService.toggle(this.isDisplayed);
  }


  

}
