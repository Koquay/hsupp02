import { Component, OnInit } from '@angular/core';
import { AppliancesService } from './appliances.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css']
})
export class AppliancesComponent implements OnInit {  

  constructor(
    private appliancesService:AppliancesService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ) { 
    
  }

  ngOnInit() {    
    
  }  
}
