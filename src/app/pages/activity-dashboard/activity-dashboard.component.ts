import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { ActivityService } from '../../activity.service';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// import { Chart } from 'chart.js';
import { element } from '@angular/core/src/render3/instructions';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { ThemeService, TableModule } from '@eds/angular';
import { NgxPaginationModule } from "ngx-pagination";

@Component({
  selector: 'app-dashboard',
  templateUrl: './activity-dashboard.component.html',
  styleUrls: ['./activity-dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActivityComponent implements OnInit {

  p: number = 1;
  chart = [];
  chart2 = [];
  tablePresetColumns;
  tablePresetData;

  constructor(private activityService: ActivityService, private router: Router) { }
  public apiData;

  ngOnInit() {
    
    this.activityService.getAchievement().subscribe((res) =>  {
      interval(250).subscribe(val => this.apiData = val);
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
