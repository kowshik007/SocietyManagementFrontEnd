import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Society } from './society.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {
  name:string="";
  status:number=0;
  socities: Society[];
  isLoading: boolean=false;
  createPostResult: Society;
  token: string='9d9c470c-3ad8-48dd-a0fb-e65f3fa1bc4f';
  private fetchSocieties(){
    this.isLoading=true;
    this.http.get<[]>('http://localhost:7070/societies?access_token='+this.token).subscribe(
      socities=>{
        this.socities=socities;
      }
    );
    this.isLoading=false;
    return this.socities;
  }
  constructor(private http: HttpClient) { }
  onCreateSociety(postData: Society){
    this.http.post<Society>('http://localhost:7070/societies?access_token='+this.token,postData)
    .subscribe(
      responseData=>{
        this.createPostResult=responseData;
        console.log(this.createPostResult.createdTimestamp)
      }
    );
    return this.createPostResult;
  }
  ngOnInit() {
  }

}
