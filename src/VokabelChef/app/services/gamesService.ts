import {Injectable} from 'angular2/core';
import {Headers, Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';

import {AuthenticatedHttp} from './authenticatedHttp';
import {Game} from '../models/game';
import {Chapter} from "../models/chapter";

@Injectable()
export class GamesService {
    private _apiUrl = "https://vokabelchefapitest.azurewebsites.net/Api/Chapter/";

    constructor(private _http: Http) {
    }

    private getRequestOptions() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Accept', 'text/plain');
        headers.append('Accept', '*/*');
        headers.append('Content-Type', 'application/json;charset=UTF-8');

        return { headers: headers };
    }

    public getAll(): Observable<Chapter[]> {
        return this._http.get(this._apiUrl + 'GetChapters?userId=70865d38-9ea9-4b5a-90a9-bf00737832b9')
            .map(response => (<Chapter[]>response.json()));
    }

    public deepClone(game: Game): Game {
        return <Game>JSON.parse(JSON.stringify(game));
    }

    public getGameCount(): Observable<number> {
        return this.getAll().map(games => games.length);
    }

    public getById(id: string): Observable<Game> {
        return this._http.get(`api/boardgames/single?id=${id}`)
            .map(response => <Game>response.json());
    }

    public addGame(game: Game): Observable<string> {
        return this._http.post(`api/boardgames/add`, JSON.stringify(game), this.getRequestOptions())
            .map(response => <string>response.json());
    }

    public updateGame(game: Game): Observable<string> {
        return this._http.put(`api/boardgames/update`, JSON.stringify(game), this.getRequestOptions())
            .map(response => game.id);
    }

    public deleteGame(id: string): Observable<string> {
        return this._http.delete(`api/boardgames/remove?id=${id}`)
            .map(response => <string>response.text());
    }
}