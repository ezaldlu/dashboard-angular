import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Map } from './map/Map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  gaugeScore;
  tablePreset;

  constructor() { }

  ngOnInit() {
    this.gaugeScore = {
      value: 85,
      min: 0,
      max: 100,
      units: '%',
      limits: [
        { from: 50, to: 75, color: 'orange', label: 'Warning' },
        { from: 0, to: 50, color: 'red', label: 'Critical' }
      ]
    };

    this.tablePreset = {
      columns: {
        data: 'Preset',
        status: 'Status'
      },
      data: [
        {
          data: 'Data preset A',
          status: 'Failed',
        },
        {
          data: 'Data preset E',
          status: 'Passed',
        },
        {
          data: 'Data preset B',
          status: 'Passed',
        },
        {
          data: 'Data preset C',
          status: 'Failed',
        },
        {
          data: 'Data preset D',
          status: 'Passed',
        }
      ]
    };

    const m = new Map();
    m.init();
  }

}
