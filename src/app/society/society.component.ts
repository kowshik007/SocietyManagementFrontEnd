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
  error=null;  
  
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

}
