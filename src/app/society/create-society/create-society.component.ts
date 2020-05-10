import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Society } from '../../model/society.model';
import { SocietyService } from '../society.service';
import { ZipCode } from 'src/app/model/zipcode.model';

@Component({
  selector: 'app-create-society',
  templateUrl: './create-society.component.html',
  styleUrls: ['./create-society.component.css']
})
export class CreateSocietyComponent implements OnInit {

  createPostResult: Society;
  zipCode: number=0;
  error:string;
  displayZipCodeList: boolean=false;
  zipCodeList: ZipCode;
  @Output('onCreateSocietyEvent') onCreateSocietyEvent=new EventEmitter<Society>();
  constructor(private societyService: SocietyService) { }

  ngOnInit() {
  }
  onCreateSociety(postData: Society){
    this.societyService.createAndStoreSociety(postData.name,postData.pincode,postData.officeName).subscribe(
      responseData=>{
          this.createPostResult=responseData;
          this.onCreateSocietyEvent.emit(this.createPostResult);
      }
    );
  }
  fetchZipCodeDetails(){
    this.societyService.fetchZipCodeDetails(this.zipCode).subscribe(zipCodeList=>{
      if(zipCodeList){
        this.zipCodeList=zipCodeList;
        this.displayZipCodeList=true;
      }
    },
    error =>{
      this.error=error.message;
      console.log(this.error)
    });
  }
}
