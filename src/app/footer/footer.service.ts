import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private footerLinks;

  constructor() {
    this.createFooterLinks();
   }

  public getFooterLinks() {
    return this.footerLinks;
  }

  private createFooterLinks() {
    this.footerLinks = {
      customerService: {
        title: 'Customer Service',
        links: [
          'Check Order Status',
          'Pay Your Credit Card',
          'Order Cancellation',
          'Returns',
          'Shipping & Delivery',
          'Product Recalls',
          'Help & FAQs',
        ]
      },

      resources: {
        title: 'Resources',
        links: [
          'Specials & Offers',
          'DIY Projects & Ideas',
          'Truck & Tool Rental',
          'Home Services',
          'Moving Supplies & Rentals',
          'Real Estate Floor Plan Services',
          'Protection Plans',
          'Rebate Center',
          'Gift Cards',
        ]
      },

      aboutUs: {
        title: 'About Us',
        links: [
          'Careers',
          'Corporate Information',
          'Digital Newsroom',
          'Home Supply Foundation',
          'Investor Relations',
          'Government Customers',
          'Suppliers & Providers',
          'Affiliate Program',
          'Eco Options',
          'Corporate Responsibility',
        ]
      },
    }
  }
}
