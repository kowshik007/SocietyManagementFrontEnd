import { Directive, Renderer2, OnInit, Input,ElementRef } from '@angular/core';

@Directive({
  selector: '[appNeedSpace]'
})
export class NeedSpaceDirective implements OnInit{

  @Input() marginRight: number=5;
  constructor(private renderer: Renderer2, private el: ElementRef) { }

  ngOnInit(){
    this.renderer.setStyle(this.el.nativeElement,'margin-right',this.marginRight+'px');
  }

}
