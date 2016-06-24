import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Chapter} from "../models/chapter";
import {AppConfiguration} from "../appConfig";

@Injectable()
export class ChaptersService {
    constructor(private _http: Http, private _appConfig: AppConfiguration) {
    }

    public getAll(): Observable<Chapter[]> {
        return this._http.get(this._appConfig.apiEndpoint + 'Chapter/GetChapters?userId=70865d38-9ea9-4b5a-90a9-bf00737832b9')
            .map(response => (<Chapter[]>response.json()));
    }
}