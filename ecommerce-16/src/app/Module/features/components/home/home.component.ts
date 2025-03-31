import { Component } from '@angular/core';
import { gounsPage1 } from 'src/Data/Gouns/gouns';
import { kurtaPage1 } from 'src/Data/Kurta/kurta';
import { mensJeans } from 'src/Data/Men/men_jeans'
import { mens_kurta } from 'src/Data/Men/men_kurta';
import { mensShoesPage1 } from 'src/Data/shoes';
import { lengha_page1 } from 'src/Data/Women/LenghaCholi';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  menJeans:any;
  womenGouns:any;
  lehengaCholi:any;
  mensKurta:any;
  shoes:any;
  womnesKurti:any;

  ngOnInit(){
    this.menJeans=mensJeans.slice(0,5)
    this.womenGouns=gounsPage1.slice(0,5)
    this.lehengaCholi=lengha_page1.slice(0,5)
    this.mensKurta=mens_kurta.slice(0,5)
    this.shoes=mensShoesPage1.slice(0,5);
    this.womnesKurti=kurtaPage1.slice(0,5)
  }

}
