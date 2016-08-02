import {Injectable} from '@angular/core';
import {LoginComponent} from './login.component';
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {SETTINGS} from '../app.constant'
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class LoginService{
    endpoint : string;
    user   : LoginComponent;
    constructor(private http: Http){
        this.endpoint = SETTINGS.apiConnection.url ;//+ SETTINGS.apiConnection.account;
    }
    validateLogin(user: string, pass: string) : Observable<boolean>{
        let body = "Username=" + user + "&Password=" + pass + "&grant_type=password";
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers});
        return this.http.post(this.endpoint + SETTINGS.apiConnection.login, body, options)
                        .map(response => {return response;})
                        .catch(this.handleError);
    }
    public isAuthenticated(){
        return localStorage.getItem("authBearer")!=null;
    }

    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(errMsg);
    }
}