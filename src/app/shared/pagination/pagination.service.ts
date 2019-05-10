import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private paginationSubject:Subject<number> = new Subject();

  constructor() { }

  public getPage(pageNo) {
    this.paginationSubject.next(pageNo);
  }

  public getPaginationSubject() {
    return this.paginationSubject;
  }
}
