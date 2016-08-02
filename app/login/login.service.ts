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
        this.endpoint = SETTINGS.apiConnection.url + SETTINGS.apiConnection.account;
    }
    validateLogin(user: string, pass: string) : Observable<boolean>{
        let body = JSON.stringify({Email : user, Password : pass,ConfirmPassword : pass  });
        console.log(this.endpoint + SETTINGS.apiConnection.register);
        console.log("Body being sent: " + body);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers});
        return this.http.post(this.endpoint + SETTINGS.apiConnection.register, body, options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    private extractData(res: Response) {
        if(res.status == 200)
            return true;
        else return false;
    }
    private handleError (error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.log(error);
        let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}