import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivityService } from '../../activity.service';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { element } from '@angular/core/src/render3/instructions';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { ThemeService, TableModule } from '@eds/angular';
import { NgxPaginationModule } from "ngx-pagination";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './activity-dashboard.component.html',
  styleUrls: ['./activity-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActivityComponent implements OnInit {

  p1: number = 1;
  p2: number = 2;
  p3: number = 3;
  p4: number = 4;
  p5: number = 5;
  p6: number = 6;
  p7: number = 7;
  p8: number = 8;
  p9: number = 9;
  p10: number = 10;
  p11: number = 11;
  p12: number = 12;
  chart = [];
  chart2 = [];
  tablePresetColumns;
  tablePresetData;
  
  constructor(private activityService: ActivityService, private router: Router) { }
  public apiData;
  public carousel;
  public tables;
  
  ngOnInit() {

    this.activityService.getAchievement().subscribe((res) =>  {
      // console.log(res);
      this.apiData = res;
      
      var ids = [['Username', 1], ['Role', 2], ['today', 3], ['weekly', 4], ['monthly', 5], ['yearly', 6]],
      result = Object.keys(res).map(o => ids.map(([key, id]) => ({ id, content: res[o][key] })));
      this.tablePresetData = result;
    })

    this.tablePresetColumns = [
      {
        id: 1,
        content: 'Username'
      },
      {
        id: 2,
        content: 'Job Role'
      },
      {
        id: 3,
        content: 'Today'
      },
      {
        id: 4,
        content: 'This Week'
      },
      {
        id: 5,
        content: 'This Month'
      },
      {
        id: 6,
        content: 'This Year'
      }
    ];

    // Javascript Pagination

  }

}
