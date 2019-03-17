import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { element } from '@angular/core/src/render3/instructions';
import { timer, Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';
import { ThemeService, TableModule } from '@eds/angular';
import { NgxPaginationModule } from "ngx-pagination";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-example-page',
  templateUrl: './example-page.component.html',
  styleUrls: ['./example-page.component.less']
})
export class ExamplePageComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit() {
  }

  loginUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const password = target.querySelector('#password').value;

    this.authservice.getUserDetails(username, password);
    console.log(username, password);
  }

}
