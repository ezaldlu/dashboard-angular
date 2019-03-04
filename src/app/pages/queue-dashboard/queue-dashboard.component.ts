declare var require: any
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CountryunitService } from '../../countryunit.service';
import { CustomerService } from '../../customer.service';
import { CategoryService } from '../../category.service';
import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { CategoryincService } from 'src/app/categoryinc.service';
import { CategorynewService } from 'src/app/categorynew.service';
import { CategoryqueueService } from 'src/app/categoryqueue.service';
import { ProjectService } from 'src/app/project.service';
import { take } from 'rxjs/operators';
import { switchMap } from 'rxjs/operators'; 
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { style } from '@angular/animations';


@Component({
  selector: 'app-dashboard',
  templateUrl: './queue-dashboard.component.html',
  styleUrls: ['./queue-dashboard.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class QueueComponent implements OnInit {

  Highcharts = require('highcharts');
  public apiData;
  public api;
  public project;
  public queue;
  public done;
  public inc;
  public new;
  gaugeScore;
  tablePresetColumns;
  tablePresetData;
  temp;
  event;
  
  
  chartTheme = {
    colors: [
      "#177ac1",
      "#683ab2",
      "#ED561B",
      "#558000",
      "#24CBE5",
      "#64E572",
      "#FF9655",
      "#FFF263",
      "#6AF9C4"
    ],
    chart: {
      backgroundColor: "transparent"
    },
    // title: {
    //   style: {
    //     color: "white",
    //     font: '10px "Trebuchet MS", Verdana, sans-serif'
    //   }
    // },
    // subtitle: {
    //   style: {
    //     color: "white",
    //     font: '10px "Trebuchet MS", Verdana, sans-serif'
    //   }
    // }
  };

  constructor(private countryunitservice: CountryunitService, private customerservice: CustomerService, private categoryservice: CategoryService, private categoryserviceinc: CategoryincService, private categoryservicenew: CategorynewService, private projectservice: ProjectService, private categoryservicequeue: CategoryqueueService) { 
    const theme = this.chartTheme;

    this.Highcharts.theme = theme;
    this.Highcharts.setOptions(theme);
  }
  
  ngOnInit() {

    this.countryunitservice.getTicketCountryUnit().subscribe((res)=>{
      this.temp = Object.values(res).map(val => +val);
      this.Highcharts.chart({
        chart: {
           type: 'column',
           renderTo:'chartContainer',
       },
 
       title: {
           text: 'CU ID'
       },
     
       subtitle: {
           text: 'Indonesia'
       },
     
       xAxis: {
           categories: ['In Queue', 'On Progress', 'Finished', 'Failed']
       },
       
       series: [{
           type: 'column',
           colorByPoint: true,
           data: this.temp,
           showInLegend: false
       }]
     });
    })

    this.customerservice.getTotalCustomer().subscribe((res)=>{
       this.apiData = res;
       let op = this.apiData.map(e=>{
        let key = Object.keys(e)[0]
        return { name: key, y: +e[key] }
      })
   
      this.Highcharts.chart({
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          renderTo:'projectContainer'
        },
        title: {
            text: 'Project'
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
                        color: 'white',
                        font: '20px'
                    }
                }
            }
        },
        series: [{
            name: 'Customer',
            colorByPoint: true,
            data: op
        }]
      });
      
    })

    this.categoryservice.getRole().subscribe((res)=>{
        this.done = Object.values(res).map(val => +val);
            this.categoryserviceinc.getRoleInc().subscribe((res)=>{
                this.inc = Object.values(res).map(val => +val);
                    this.categoryservicenew.getRoleNew().subscribe((res)=>{
                        this.new = Object.values(res).map(val => +val);
                            this.categoryservicequeue.getRoleQueue().subscribe((res)=>{
                                this.queue = Object.values(res).map(val => +val);

                                this.Highcharts.chart({
                                    chart: {
                                    type: 'column',
                                    renderTo: 'dashContainer'
                                },
                                title: {
                                    text: 'Project Average Ticket'
                                },
                                // subtitle: {
                                //     text: 'Source: WorldClimate.com'
                                // },
                                xAxis: {
                                    categories: [
                                        'ISAT Jabo',
                                        'TSEL Kalimantan',
                                        'TSEL Sumbagut',
                                        'TSEL Sumbagteng',
                                        'XL Central',
                                        'XL Jabo 1',
                                        'XL Jabo 2' 
                                    ],
                                    crosshair: true
                                },
                                yAxis: {
                                    min: 0,
                                    title: {
                                        text: 'Total (tickets)'
                                    }
                                },
                                tooltip: {
                                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                        '<td style="padding:0"><b>{point.y:.1f} tickets</b></td></tr>',
                                    footerFormat: '</table>',
                                    shared: true,
                                    useHTML: true
                                },
                                plotOptions: {
                                    column: {
                                        pointPadding: 0.2,
                                        borderWidth: 0
                                    }
                                },
                                series: [{
                                    name: 'Done',
                                    data: this.done
                            
                                }, {
                                    name: 'On Going',
                                    data: this.new
                            
                                }, {
                                    name: 'In Queue',
                                    data: this.queue
                                    
                                }, {
                                    name: 'Not Done',
                                    data: this.inc
                                }
                                ]
                            })

                            })
                    })
            })
    })

                            
    this.projectservice.getEventActivity().subscribe((res)=>{
        this.event = res;
        let op = this.event.map(({Activity,Total})=> [Activity,parseInt(Total)])

        setTimeout( ()=>{
            this.Highcharts.chart({
              chart: {
                type: 'column',
                renderTo:'eventContainer'
              },
              title: {
                text: 'User Role'
              },
              
              xAxis: {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '20px',
                        fontFamily: 'Ericsson Hilda, Helvetica, sans-serif'
                    }
                }
              },
              yAxis: {
                  min: 0,
                  title: {
                      text: 'Total Ticket Closed'
                  }
              },
              legend: {
                  enabled: false
              },
              tooltip: {
                  pointFormat: 'Todays achievement for Request Integration: <b>{point.y:.1f} Tickets</b>'
              },
              series: [{
                name: 'Population',
                data: op,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Ericsson Hilda, Helvetica, sans-serif'
                },
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:.1f}', // one decimal
                    y: 10, // 10 pixels down from the top
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Ericsson Hilda, Helvetica, sans-serif'
                    }
                }
             }]
            })},200);
    })
  }
}
