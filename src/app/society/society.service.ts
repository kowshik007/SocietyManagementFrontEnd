import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Society } from './society.model';

@Injectable({providedIn:'root'})
export class SocietyService{
    constructor(private http:HttpClient){}
    token: string='28345086-0625-4ea8-a847-1500c637a536';
    createAndStoreSociety(name: string,status:number){
        const postData: Society = {name:name,status:status}
        return this.http.post<Society>('http://localhost:7070/societies?access_token='+this.token,postData);
    }
    fetchSocieties(){
        return this.http.get<[]>('http://localhost:7070/societies?access_token='+this.token);
    }
}