import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hsupp02';

  constructor() {
    localStorage.removeItem('user');
    
    localStorage.removeItem('breadcrumbs')
    let breadcrumbs = [{breadcrumb: 'Home', url: '/home'}];
    localStorage.setItem('breadcrumbs', JSON.stringify(breadcrumbs))    
  }
}
