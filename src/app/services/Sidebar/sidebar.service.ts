import { Injectable } from '@angular/core';
import { Subject , Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  private showSideNavSubject = new Subject<boolean>();

  toggle(value: boolean) {
    this.showSideNavSubject.next(value);
  }
  
  get(): Observable<boolean> {
    return this.showSideNavSubject.asObservable();
  }

  // private isSideBarOpen: boolean = true;

  // public sideNavToggleSubject: Subject<boolean> = new Subject<boolean>();

  // public toggle() {
  //   this.isSideBarOpen = !this.isSideBarOpen;
  //   this.sideNavToggleSubject.next(this.isSideBarOpen);
  // }
}
