import { Component, OnInit } from '@angular/core';
import { PaginationService } from './pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  private pageNumbers = [1, 2, 3, 4, 5];

  constructor(private paginationService:PaginationService) { }

  ngOnInit() {
  }

  private getPage(pageNo:number) {
    this.paginationService.getPage(pageNo);
  }

}
