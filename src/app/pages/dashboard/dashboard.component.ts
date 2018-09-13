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
  tablePresetColumns;
  tablePresetData;

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

    this.tablePresetColumns = [
      {
        id: 1,
        content: 'Preset'
      },
      {
        id: 2,
        content: 'Status'
      }
    ];

    this.tablePresetData = [
      [
        {
          id: 1,
          content: 'Data preset A'
        },
        {
          id: 2,
          content: 'Failed'
        }
      ],
      [
        {
          id: 1,
          content: 'Data preset A'
        },
        {
          id: 2,
          content: 'Failed'
        }
      ],
      [
        {
          id: 1,
          content: 'Data preset A'
        },
        {
          id: 2,
          content: 'Failed'
        }
      ],
      [
        {
          id: 1,
          content: 'Data preset A'
        },
        {
          id: 2,
          content: 'Failed'
        }
      ],
      [
        {
          id: 1,
          content: 'Data preset A'
        },
        {
          id: 2,
          content: 'Failed'
        }
      ]
    ];

    const m = new Map();
    m.init();
  }

}
