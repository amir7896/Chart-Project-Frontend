import { AfterViewInit, Component, HostBinding, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { SidebarService } from 'src/app/services/Sidebar/sidebar.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
 

  showSideNav:boolean = true;



  constructor(private sidebarService : SidebarService) { }


  ngOnInit(): void {
    this.sidebarService.get().subscribe(sideNav => this.showSideNav = sideNav);
  }

}



