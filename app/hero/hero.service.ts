import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {Http, Response, Headers} from '@angular/http'
import {SETTINGS} from '../app.constant'
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class HeroService{
    endpoint : string;
    heroes   : Hero[];
    constructor(private http: Http){
        this.heroes = [];
        this.endpoint = SETTINGS.connectionInfo.url + SETTINGS.connectionInfo.people;
    }
    getHeroes(): Observable<Hero[]>{
        let headers = new Headers();
        headers.append("Authorization", "Bearer " + localStorage.getItem("authBearer"));
        return this.http.get(this.endpoint, {
            headers: headers
            })
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        console.log(res.json());
        let body = res.json();
        return body || { };
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}