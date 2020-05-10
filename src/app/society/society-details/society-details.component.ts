import { Component, OnInit, Input } from '@angular/core';
import { Society } from 'src/app/model/society.model';

@Component({
  selector: 'app-society-details',
  templateUrl: './society-details.component.html',
  styleUrls: ['./society-details.component.css']
})
export class SocietyDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() society: Society;

}
