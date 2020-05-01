import { Component } from '@angular/core';

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls:['./index.component.css']
})
export class IndexComponent{
    message: string="Need to manage a big society! No problem I am here"
    name: string="Kowshik"
    showButton: boolean=false;
    constructor(){
        setTimeout(() => {
            this.showButton=true;
        }, 2000);
    }
    onButtonClick(){
        this.message="Welcome "+this.name;
        return "You have clicked a button";
    }
    onChangingName(event: Event){
        this.name=(<HTMLInputElement>event.target).value;
    }
    getWelcomeMessage(){
        return this.message;
    }
    displayColor(){
        return 'green';
    }
}