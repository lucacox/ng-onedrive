import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';

import { Subject } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';

import { OneDriveAuth } from './ng-onedrive';
import { Drive, Item } from './resources';

@Injectable()
export class OneDriveApi {

  private static API_URL = "https://api.onedrive.com/v1.0";

  constructor(private _http: Http, private _auth: OneDriveAuth) {

  }

  drives(): Observable<Array<Drive>> {
    return this._http.get(this.constructUrl("drives"))
      .map((res: Response) => res.json().value)
      .map((res: Array<any>) => res.reduce((list: Array<Drive>, obj) => {
        list.push(new Drive(obj));
        return list;
      }, []));
  }

  root(drive: Drive) {
    return this._http.get(this.constructUrl(drive.root))
      .map((res) => res.json())
      .map(res => new Item(res));
  }

  children(item: Item) {
    return this._http.get(this.constructUrl(item.children))
      .map((res) => res.json().value)
      .map((res: Array<any>) => res.reduce((list: Array<Item>, obj) => {
        list.push(new Item(obj));
        return list;
      }, []));
  }

  // private:

  private constructUrl(path: string) {
    return OneDriveApi.API_URL + "/" + path + "?access_token=" + this._auth.token;
  }


}
