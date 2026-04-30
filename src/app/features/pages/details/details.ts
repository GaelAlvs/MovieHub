import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {
  blur = 0;
  scale = 1;
  expanded = false;

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollY = window.scrollY;

    const maxBlur = 12;
    const maxScroll = 400;

    this.blur = Math.min((scrollY / maxScroll) * maxBlur, maxBlur);
    this.scale = 1 + scrollY / 2000;
  }
}
