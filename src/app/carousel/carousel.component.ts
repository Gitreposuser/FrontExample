import { Component, Input, OnInit } from '@angular/core';

interface carouselImage{
  imageSrc: string;
  imageAlt: string;
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})

export class CarouselComponent implements OnInit {

  @Input() images: carouselImage[] = [];
  @Input() indicators: boolean = true;
  @Input() controls: boolean = true;
  @Input() autoSlide: boolean = true;
  @Input() slideInterval: number = 3000;

  timerId: any;

  selectedIndex: number = 0;

  ngOnInit(): void {
    this.startAutoSlide();
  }

  startAutoSlide(): void{
    if(this.autoSlide){
      this.timerId = setInterval(() => {
        this.onNextClick();
      }, this.slideInterval);
    }
  }

  onImgEnter(): void{
    clearInterval(this.timerId);
  }

  onImgLeave(): void{
    this.startAutoSlide();
  }


  selectImage(index:number): void{
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.images.length - 1;
    } 
    else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void{
    if(this.selectedIndex === this.images.length - 1){
      this.selectedIndex = 0;
    } 
    else {
      this.selectedIndex++;
    }
  }
}