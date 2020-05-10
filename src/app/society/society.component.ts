import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Society } from '../model/society.model';
import { SocietyService } from './society.service';

@Component({
  selector: 'app-society',
  templateUrl: './society.component.html',
  styleUrls: ['./society.component.css']
})
export class SocietyComponent implements OnInit {
  constructor(private http: HttpClient,private societyService: SocietyService) { }
  
  ngOnInit() {
    this.societyService.fetchSocieties().subscribe(
        socities=>{
            this.socities=socities;
        },
        error =>{
          this.error=error.message;
        }
    );
  }
  
  name:string="";
  status:number=0;
  socities: Society[];
  isLoading: boolean=false;
  error=null;
  onCreateSocietyEvent(society: Society){
    console.log(society)
    this.socities.push(society);
  }
}
