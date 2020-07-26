import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.color='red'
   }

}
