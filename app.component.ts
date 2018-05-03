import { Component, OnInit } from '@angular/core';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isSideBarExpanded: Boolean;

  constructor(private http: Http) {
    this.isSideBarExpanded = true;
  }

  onSideBarToggle(isExpanded): void {
    this.isSideBarExpanded = isExpanded;
  }

  ngOnInit() {}
}
