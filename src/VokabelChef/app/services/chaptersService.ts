import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {Chapter} from "../models/chapter";

@Injectable()
export class ChaptersService {
    private _apiUrl = "https://vokabelchefapitest.azurewebsites.net/Api/Chapter/";

    constructor(private _http: Http) {
    }

    public getAll(): Observable<Chapter[]> {
        return this._http.get(this._apiUrl + 'GetChapters?userId=70865d38-9ea9-4b5a-90a9-bf00737832b9')
            .map(response => (<Chapter[]>response.json()));
    }
}