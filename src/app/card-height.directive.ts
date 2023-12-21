import { Directive, ElementRef, AfterViewInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHeight]'
})
export class CardHeightDirective implements AfterViewInit {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit() {
    // Get all card elements
    const cards = this.el.nativeElement.querySelectorAll('.card');

    // Calculate the maximum height among all cards
    let maxHeight = 0;
    cards.forEach((card: HTMLElement) => {
      const cardHeight = card.offsetHeight;
      if (cardHeight > maxHeight) {
        maxHeight = cardHeight;
      }
    });

    // Set the maximum height to all cards
    cards.forEach((card: HTMLElement) => {
      this.renderer.setStyle(card, 'height', maxHeight + 'px');
    });
  }
}
