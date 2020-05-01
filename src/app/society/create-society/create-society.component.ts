import { Component, OnInit } from '@angular/core';
import { Society } from '../society.model';
import { SocietyService } from '../society.service';

@Component({
  selector: 'app-create-society',
  templateUrl: './create-society.component.html',
  styleUrls: ['./create-society.component.css']
})
export class CreateSocietyComponent implements OnInit {

  societyService: SocietyService;
  createPostResult: Society;
  constructor() { }

  ngOnInit() {
  }
  onCreateSociety(postData: Society){
    this.societyService.createAndStoreSociety(postData.name,postData.status).subscribe(
      responseData=>{
          this.createPostResult=responseData;
          console.log(this.createPostResult.createdTimestamp)
      }
    );
  }
}
