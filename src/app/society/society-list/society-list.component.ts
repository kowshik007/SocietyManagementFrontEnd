import { Component, OnInit } from '@angular/core';
import { SocietyService } from '../society.service';
import { Society } from 'src/app/model/society.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-society-list',
  templateUrl: './society-list.component.html',
  styleUrls: ['./society-list.component.css']
})
export class SocietyListComponent implements OnInit {

  constructor(private societyService: SocietyService, private route: ActivatedRoute,private router: Router) { }

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
  onShowClick(i:number){
    this.router.navigate([this.socities[i].id],{relativeTo:this.route})
  }
  onEditClick(i:number){
    this.router.navigate([this.socities[i].id,'edit'],{relativeTo:this.route})
  }

  socities: Society[];
  error=null;
}
