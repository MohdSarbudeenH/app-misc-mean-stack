import { Injectable, Inject, Optional } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

const appConfig: string = environment.apiUrl;

@Injectable()
export class ApiService {
    
    headers: HttpHeaders = new HttpHeaders({  });
    postHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            // console.error(`Response Error Code ${error.status}`);
            // console.error(`body was: ${error.error}`);
        }
        return throwError(error.error);
    }

    get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${appConfig}${path}`, { params, headers: this.headers })
            .pipe(catchError(this.handleError));
    }

    getWithModule(path: string, moduleName: string, params: HttpParams = new HttpParams()): Observable<any> {
        let newHeaders: HttpHeaders = this.headers.append('Module', moduleName);
        return this.http.get(`${appConfig}${path}`, { params, headers: newHeaders })
            .pipe(catchError(this.handleError));
    }

    getTemplate(path: string, responseType?: any, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${appConfig}${path}`, {
            headers: this.headers,
            observe: 'response',
            params: params,
            responseType: responseType == 'arraybuffer' ? 'arraybuffer' as 'json' : responseType
        })
            .pipe(catchError(this.handleError));
    }

    put(path: string, body: Object = {}): Observable<any> {
        return this.http.put(
            `${appConfig}${path}`,
            JSON.stringify(body),
            { headers: this.headers }
        ).pipe(catchError(this.handleError));
    }

    post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(
            `${appConfig}${path}`,
            JSON.stringify(body),
            { headers: this.postHeaders }
        ).pipe(catchError(this.handleError));
    }

    postFile(path: string, file: File): Observable<any> {
        var formData = new FormData();
        formData.append("file", file);
        return this.http.post(
            `${appConfig}${path}`, formData,
            {
                withCredentials: true, headers: this.headers, observe: 'response', responseType: 'arraybuffer' as 'json'
            }
        ).pipe(catchError(this.handleError));
    }

    postImage(path: string, file: File): Observable<any> {
        var formData = new FormData();
        formData.append("file", file);
        return this.http.post(
            `${appConfig}${path}`, formData,
            {
                withCredentials: true, headers: this.headers, observe: 'response', responseType: 'json'
            }
        ).pipe(catchError(this.handleError));
    }

    postWithModule(path: string, moduleName: string, body: Object = {}): Observable<any> {

        let newHeaders: HttpHeaders = this.postHeaders.append('Module', moduleName);

        return this.http.post(
            `${appConfig}${path}`,
            JSON.stringify(body),
            { headers: newHeaders }
        ).pipe(catchError(this.handleError));
    }


    delete(path): Observable<any> {
        return this.http.delete(
            `${appConfig}${path}`
        ).pipe(catchError(this.handleError));
    }

}
