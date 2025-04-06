import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { AuthComponent } from 'src/app/Module/auth/auth.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isNavbarConteneOpen:Boolean=false;
  selectedSection: any;
  category:any;
  
  constructor(private router:Router, private dialog:MatDialog) {}

  ngOnInit(): void {}

  openNavbar(section: any) {
    this.isNavbarConteneOpen = true;
    this.selectedSection = section; 
  }
  navigateTo(path: any) {
    this.router.navigate([path]);
  }
  openProfileMenu(menu?: any) {}

  closeNavbar() {
    this.isNavbarConteneOpen = false;
  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
   const modelContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickInsideButton =false;
    openButtons.forEach((button:Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    });
    if(modelContainer && !clickInsideButton && this.isNavbarConteneOpen){
      this.closeNavbar();
    }
  }


  onOpenLoginModal() {
    this.dialog.open(AuthComponent,{
      width:'500px',
      disableClose:false,
    })
  }
}
