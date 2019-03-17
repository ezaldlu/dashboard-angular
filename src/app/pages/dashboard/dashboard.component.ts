declare var require: any
import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { TicketService } from '../../ticket.service';
import { ScheduleService } from '../../schedule.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
// import { map } from 'lodash';
import { UnshiftService } from 'src/app/unshift.service';
import { IndicatorService } from 'src/app/indicator.service';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { ThemeService, TableModule } from '@eds/angular';
import { TableComponent } from '@eds/angular/lib/components/table/table.component';
import { UpperqueueService } from 'src/app/upperqueue.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  public indicator;
  public dashqueue;
  public colorVal;
  chart = [];
  chart2 = [];
  tablePresetColumns;
  tablePresetData;
  tablePresetQueueColumns;
  tablePresetQueueData;
  tableRule;
  gaugeScore;
  result;
  temp_queue;
  Highcharts = require('highcharts');

  chartTheme = {  
    colors: [
      "#ffff00",   //yellow
      "#008000",   //green
      "#ff0000"   //red
    ],
    
    chart: {
      backgroundColor: "transparent"
    }
  };

  constructor(private upperqueueservice: UpperqueueService, private ticketService: TicketService, private scheduleService: ScheduleService, private unshiftService: UnshiftService, private indicatorservice: IndicatorService) {
    // const theme = this.chartTheme;

    // this.Highcharts.theme = theme;
    // this.Highcharts.setOptions(theme);
  }

  public apiData;
  public api;
  public unshift;
  // public tablePresetColumns;

  ngOnInit() {

    this.upperqueueservice.getValueUpperQueue().subscribe((res)=>{
      this.dashqueue = res;
      var ids = [['customer', 1], ['in_queue', 2], ['on_going', 3]],
      temp_queue = Object.keys(res).map(o => ids.map(([key, id]) => ({ id, content: res[o][key] })));
      this.tablePresetQueueData = temp_queue;
      

      this.tablePresetQueueColumns = [
        {
          id: 1,
          content: 'Customer'
        },
        {
          id: 2,
          content: 'In Queue'
        },
        {
          id: 3,
          content: 'On Going'
        }
      ];
    })

    this.indicatorservice.getIndicator().subscribe((res)=>{
      this.indicator = res;
      let op = this.indicator.map(e=>{
        let key = Object.keys(e)[0]
        return { name: key, y: +e[key] }
      })
      
      op.forEach(element => {
        if (element.name == 'Busy') {
          element.color = '#ffff00';
        }
        if (element.name == 'Idle') {
          element.color = '#008000';
        }
        if (element.name == 'Overload') {
          element.color = '#ff0000';
        }
      });
      // this.Highcharts.setOptions({
      //   colors: this.colorVal
      // })
      this.Highcharts.setOptions({
        chart: {
          backgroundColor: "transparent"
        }
      })
      setTimeout( ()=>{
        this.Highcharts.chart({
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            renderTo:'container'
          },
          title: {
            text: 'Todays Shift Indicator'
          },
          tooltip: {
              pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: 'white'
                    }
                }
            }
          },
          series: [{
            name: 'Brands',
            colorByPoint: true,
            data: op
          }]
      })},300);
    })

    this.ticketService.getTicket().subscribe((res)=>{
      this.apiData = res;
    })

    this.unshiftService.getUserOff().subscribe((res)=>{
      this.unshift = res;
    })
    
    this.scheduleService.getShiftSchedule().subscribe((temp)=>{
      this.api = temp;

      var ids = [['Name', 1], ['test', 2]],
      result = Object.keys(temp).map(o => ids.map(([key, id]) => ({ id, content: temp[o][key] })));
      this.tablePresetData = result;
      // console.log(result);
      
    })

    this.tablePresetColumns = [
      {
        id: 1,
        content: 'Username'
      }
      // {
      //   id: 2,
      //   content: 'Status'
      // }
    ];
  }
}
