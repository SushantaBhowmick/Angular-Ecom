import { Component } from '@angular/core';
import { mainCarouselData } from 'src/Data/mainCarousel';
@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss'],
})
export class MainCarouselComponent {
  currentSlide: any = 0;
  interval: any;
  carouselData: any;
  isAnimating:Boolean=false;

  maincarouselData = [
    {
      image: 'assets/images/carousel/c1.webp',
      path: '/women/clothing/lengha_choli',
    },
    {
      image: 'assets/images/carousel/c2.webp',
      path: '/women/clothing/women_dress',
    },
    {
      image: 'assets/images/carousel/c3.webp',
      path: '/women/clothing/women_dress',
    },
    {
      image: 'assets/images/carousel/c4.webp',
      path: '/women/clothing/women_saree',
    },
  ];

  ngOnInit() {
    this.carouselData = this.maincarouselData;
    this.autoPlay();
  }

  autoPlay() {
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    this.isAnimating = true;
    if (this.currentSlide >= this.carouselData.length - 1) {
      setTimeout(() => {
        this.isAnimating = false;
        this.currentSlide = 0;
      }, 1500); // Reset after animation completes
    } else {
      this.currentSlide++;
    }
  }
}
