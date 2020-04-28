import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Society } from './society.model';

@Injectable({providedIn:'root'})
export class SocietyService{
    constructor(private http:HttpClient){}
    createPostResult: Society;
    token: string='9d9c470c-3ad8-48dd-a0fb-e65f3fa1bc4f';
    socities: Society[]=[];
    createAndStoreSociety(name: string,status:number){
        const postData: Society = {name:name,status:status}
        this.http.post<Society>('http://localhost:7070/societies?access_token='+this.token,postData)
        .subscribe(
            responseData=>{
                this.createPostResult=responseData;
                console.log(this.createPostResult.createdTimestamp)
            }
        );
        return this.createPostResult;
    }
    fetchSocieties(){
        return this.http.get<[]>('http://localhost:7070/societies?access_token='+this.token);
    }
}