import { Component, OnInit } from '@angular/core';

import {FooterService} from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private footerLinks;

  constructor(
    private footerService:FooterService
  ) { }

  ngOnInit() {
    this.getFooterLinks();
  }

  private async getFooterLinks() {
    this.footerLinks = await this.footerService.getFooterLinks();
    console.log('footerLinks', this.footerLinks)
  }

}
