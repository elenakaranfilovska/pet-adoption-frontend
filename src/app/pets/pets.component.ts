import { Component, OnInit } from '@angular/core';
import { Pet } from '../../model/Pet'
import { PagerService } from '../z-service/pager.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  currentPageParams: number;

  currentPage: number = 1;
  pageSize: number = 15;
  totalItems: number = 15;

  petName: string;
  petType: string;
  petBreed: string;
  petAge: string;
  petSex: string;
  petColor: string;
  items: Array<Pet>;
  loading = false;

  constructor(private pagerService: PagerService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      switchMap(params => {
        this.petName = params.get('name');
        this.petType = params.get('type');
        this.petBreed = params.get('breed');
        //replace age with calendar o
        this.petAge = params.get('age');
        this.petSex = params.get('sex');
        this.petColor = params.get('color');
        this.currentPageParams = Number(params.get('page'));
        if (this.currentPageParams == 0) {
          this.currentPageParams = 1;
        }
        this.pageSize = Number(params.get('size'));
        if (this.pageSize == 0) {
          this.pageSize = 15;
        }
        this.loading = true;
        return this.pagerService.getPageList(this.petName, this.petType, this.petBreed, this.petAge, this.petSex, this.petColor, this.currentPageParams, this.pageSize);
      }),
    ).subscribe(petSearchResult => {
      this.loading = false;
      this.items = petSearchResult.content;
      this.totalItems = petSearchResult.totalElements;
      this.currentPage = this.currentPageParams;

    }, error => {
      console.log('Error: ', error);
    });
  }
}
