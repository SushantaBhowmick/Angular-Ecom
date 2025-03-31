import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isNavbarConteneOpen:Boolean=false;
  selectedSection: any;
  category:any;
  
  constructor(private router:Router) {}

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
}
