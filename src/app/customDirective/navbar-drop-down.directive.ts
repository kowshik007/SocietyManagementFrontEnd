import { Directive, Output, HostListener, AfterViewInit,EventEmitter, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appNavbarDropDown]'
})
export class NavbarDropDownDirective implements AfterViewInit {

  @Output('eventEmit') eventEmit=new EventEmitter<boolean>();
  isOpen:boolean=false;
  @HostListener('click') toggleOpen(){
    this.isOpen=!this.isOpen;
    this.eventEmit.emit(this.isOpen);
  }

  ngAfterViewInit(){
  }

  constructor(private renderer: Renderer2) { }
}
