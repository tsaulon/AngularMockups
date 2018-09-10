import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor = 'black';
  /*  Optional: Can bind directive name alias for major properties */
  /*  Note: Turn off TSLint for any errors regarding 'no renaming of alias inside @Input() decorator.'  */
  @Input('appBetterHighlight') highlightColor = 'white';
  //  METHOD 2
  @HostBinding('style.color') color: string;

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //  METHOD 1
    this.renderer.setStyle(this.element.nativeElement, 'background-color', 'blue');
    this.color = this.defaultColor; /*   SET COLOR BEFORE ELEMENT RENDER   */
  }

  //  adding interactivity
  //  on mouse hover
  @HostListener('mouseenter') mouseover(data: Event) {
    //  this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
    this.color = this.highlightColor;
  }

  //  on mouse hover ends
  @HostListener('mouseleave') mouseLeave(data: Event) {
    //  this.renderer.setStyle(this.element.nativeElement, 'color', 'black');
    this.color = this.defaultColor;
  }
}
