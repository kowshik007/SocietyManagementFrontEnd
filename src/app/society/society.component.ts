import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Society } from './society.model';
import { map } from 'rxjs/operators';
import { SocietyService } from './society.service';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {
  constructor(private http: HttpClient,private societyService: SocietyService) { }
  name:string="";
  status:number=0;
  socities: Society[];
  isLoading: boolean=false;
  createPostResult: Society;
  token: string='9d9c470c-3ad8-48dd-a0fb-e65f3fa1bc4f';
  
  onCreateSociety(postData: Society){
    this.societyService.createAndStoreSociety(postData.name,postData.status);
  }
  ngOnInit() {
    this.societyService.fetchSocieties().subscribe(
      socities=>{
          this.socities=socities;
      }
  );
  }

}
