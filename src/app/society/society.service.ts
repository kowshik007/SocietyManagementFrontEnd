import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Society } from '../model/society.model';
import { ZipCode } from '../model/zipcode.model';

@Injectable({providedIn:'root'})
export class SocietyService{
    constructor(private http:HttpClient){}
    token: string='ce3ee27c-9b39-4a7f-848e-e1149ac9f72b';
    zipCode: ZipCode;
    createAndStoreSociety(name: string,pincode: number,officeName: string){
        const postData: Society = {name:name,pincode:pincode,officeName:officeName}
        return this.http.post<Society>('http://localhost:7070/societies?access_token='+this.token,postData);
    }
    fetchSocieties(){
        return this.http.get<[]>('http://localhost:7070/societies?access_token='+this.token);
    }
    fetchZipCodeDetails(input: number){
        return this.http.get<ZipCode>('https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&offset=0&limit=10&filters[pincode]='+input);
    }
}