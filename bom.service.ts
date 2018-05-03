import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

import { Bom } from './../models/bom.model';



@Injectable()
export class BomService {
  bom: Bom;
  baseUrl = '';

  constructor(private http: Http) {
    this.baseUrl = environment.serviceBaseUrl + 'bom/';
  }

  postBOMFile(filedata: any) {
    return this.http.post(this.baseUrl + 'upload/', filedata).map(res => res.json());
  }

}
