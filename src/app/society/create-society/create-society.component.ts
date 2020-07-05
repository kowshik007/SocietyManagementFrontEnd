import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Society } from '../../model/society.model';
import { SocietyService } from '../society.service';
import { ZipCode } from 'src/app/model/zipcode.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-society',
  templateUrl: './create-society.component.html',
  styleUrls: ['./create-society.component.css']
})
export class CreateSocietyComponent implements OnInit {

  createPostResult: Society;
  name: string;
  zipCode: number=0;
  error:string;
  displayZipCodeList: boolean=false;
  zipCodeList: ZipCode;
  @Output('onCreateSocietyEvent') onCreateSocietyEvent=new EventEmitter<Society>();
  constructor(private societyService: SocietyService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onCreateSociety(postData: Society){
    this.societyService.createAndStoreSociety(postData.name,postData.pincode,postData.officeName).subscribe(
      responseData=>{
          this.createPostResult=responseData;
          this.onCreateSocietyEvent.emit(this.createPostResult);
          this.router.navigate(['/societies'],{relativeTo:this.route});
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
  resetInputs(){
    this.name="";
    this.zipCode=0;
    this.displayZipCodeList=false;
  }
}
