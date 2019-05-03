import { Component, OnInit } from '@angular/core';
import { AppliancesService } from './appliances.service';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {  

  constructor(
    private appliancesService:AppliancesService
  ) { }

  ngOnInit() {    
  }  
}
