import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  private breadcrumbsArr = [];
  private backslash = "/";

  constructor(
    private activatedRoute:ActivatedRoute,
    private router:Router
  ) { 
  }

  ngOnInit() {
    console.log('activatedRoute', this.activatedRoute);
    this.configureBreadcrumb();
  }

  private configureBreadcrumb() {
    console.log('activatedRoute', this.activatedRoute)
    console.log('url', this.router.routerState.snapshot.url)
    console.log('router', this.router.routerState)

    let url = this.router.routerState.snapshot.url;
    
    let breadcrumb:string = this.activatedRoute.routeConfig.data.breadcrumb;
    let breadcrumbs = JSON.parse(localStorage.getItem('breadcrumbs'))
    
    console.log('breadcrumbs', breadcrumbs)
    breadcrumbs.push({breadcrumb:breadcrumb, url: url});    
    localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs))
    console.log('breadcrumbs', breadcrumbs)
    this.breadcrumbsArr = breadcrumbs;
    
  }
}
