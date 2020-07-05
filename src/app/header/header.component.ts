import { Component, OnInit,EventEmitter, Output, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean=false;
  @ViewChild('addDropDownActiveClass',{static:true})
  addDropDownActiveClass: ElementRef;
  constructor(private renderer:Renderer2) { }

  eventEmit(input:boolean){
    if(input){
      this.renderer.addClass(this.addDropDownActiveClass.nativeElement,'is-active')
    }else{
      this.renderer.removeClass(this.addDropDownActiveClass.nativeElement,'is-active')
    }
  }

  ngOnInit() {
  }

}
