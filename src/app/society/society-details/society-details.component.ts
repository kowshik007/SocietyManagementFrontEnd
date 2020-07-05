import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SocietyService } from '../society.service';
import { Society } from 'src/app/model/society.model';

@Component({
  selector: 'app-society-details',
  templateUrl: './society-details.component.html',
  styleUrls: ['./society-details.component.css']
})
export class SocietyDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private societyService: SocietyService) { }
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.societyService.fetchSociety(this.id).subscribe(
          society=>{
              this.society=society;
          },
          error =>{
            this.error=error.message;
          }
        );
      }
    );
  }
  error=null;
  society: Society;
  id:number;
}
