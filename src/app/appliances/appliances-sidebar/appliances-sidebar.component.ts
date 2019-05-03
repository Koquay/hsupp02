import { Component, OnInit } from '@angular/core';
import { AppliancesSidebarService } from 'src/app/appliances/appliances-sidebar/appliances-sidebar.service';

@Component({
  selector: 'app-appliances-sidebar',
  templateUrl: './appliances-sidebar.component.html',
  styleUrls: ['./appliances-sidebar.component.scss']
})
export class AppliancesSidebarComponent implements OnInit {
  private appliancesSidebarLinks;

  constructor(
    private appliancesSidebarService: AppliancesSidebarService
  ) {
  }

  ngOnInit() {
    this.getAppliancesSidebarLinks();
  }

  private async getAppliancesSidebarLinks() {
    this.appliancesSidebarLinks = await this.appliancesSidebarService.getAppliancesLinks();
    console.log('this.appliancesSidebarLinks', this.appliancesSidebarLinks)
  }

}
