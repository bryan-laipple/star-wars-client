import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {ErrorObservable} from 'rxjs/observable/ErrorObservable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {
  baseUrl: string;

  constructor(private http: Http) {
    this.baseUrl = 'http://localhost:8080';
  }

  getDetails(type: string, id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${type}/${id}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  getList(type: string, page?: number): Observable<any> {
    page = page || 1;
    // TODO pagination
    return this.http.get(`${this.baseUrl}/${type}?page=${page}`)
      .map((res: Response) => res.json())
      .catch(this.handleError);
  }

  private handleError(error: Response | any): Observable<any> {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    // console.error(errMsg);
    return ErrorObservable.create(errMsg);
  }

}
