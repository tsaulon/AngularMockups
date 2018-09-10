import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})

// Note:  Example of creating a directive but NOT the BEST PRACTICE in making directives!
//        SHOULD NOT ACCESS HTML ELEMENTS DIRECTLY!
export class BasicHighlightDirective implements OnInit {

  //  reference element
  constructor(private element: ElementRef) {

  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'green';
    this.element.nativeElement.style.color = 'white';
  }
}
