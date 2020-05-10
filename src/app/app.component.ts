import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'society-management-frontend-angular';
  homeSelected:boolean=true;
  documentSelected: boolean=false;
  selectedObject(data){
    if(data ==='home'){
      this.homeSelected=true;
      this.documentSelected=false;
    }else if(data='document'){
      this.homeSelected=false;
      this.documentSelected=true;
    }
  }
}
