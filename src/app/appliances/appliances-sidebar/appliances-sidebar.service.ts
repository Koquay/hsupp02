import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppliancesSidebarService {
  private appliancesLinks;

  constructor() {
    this.createLinks();
   }

   public getAppliancesLinks() {
    return this.appliancesLinks;
  }

  private createLinks() {
    this.appliancesLinks = {
      appliancesBrand: {
        title: 'Appliances Brands',
        links: [
          "Amana",
          "Bosch",
          "Electrolux",
          "Frigidaire",
          "GE",
          "Hotpoint",
          "Haier",
          "KitchenAid",
          "LG",
          "Maytag",
          "Samsung",
          "Whirlpool",
        ]
      },

      refrigerators: {
        title: "Refrigerators",
        links: [
          "French Door Refrigerators",
          "Side by Side Refrigerators",
          "Top Freezer Refrigerators",
          "Bottom Freezer Refrigerators",
          "Mini Refrigerators",
          "Counter Depth Refrigerators",
          "Wine Coolers & Beverage Centers",
          "Freezers & Ice Makers",
        ]
      },

      washers: {
        title: "Washers",
        links: [
          "Front Load Washers",
          "Top Load Washers",
          "Unitized Washers & Dryers"
        ]
      },

      dryers: {
        title: "Dryers",
        links: [
          "Electric Dryers",
          "Gas Dryers",
        ]
      },
    };
  }
}
