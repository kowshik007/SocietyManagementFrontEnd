import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {
  name:string="";
  status:number=0;
  constructor(private http: HttpClient) { }
  onCreateSociety(postData: {name: string,status: number}){
    this.http.post('http://localhost:7070/societies?access_token=c3d8c54e-6261-4394-bbd0-a54f4220d0ed',postData).subscribe(
      responseData=>{
        console.log(responseData);
      }
    );
  }
  ngOnInit() {
  }

}
