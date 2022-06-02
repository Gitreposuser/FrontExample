import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IManga } from '../mangaelement/manga';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MangaelementService {
    private baseUrl = 'http://localhost:7047/';
    private homeController = 'Home/';
    private mangaUrl = 'http://localhost:7047/';

    constructor(private http: HttpClient){}

    getMangas(): Observable<IManga[]>{
        return this.http.get<IManga[]>(this.mangaUrl).pipe(
            tap(data => console.log('All', JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
        let errorMessage = '';
        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occurred: ${ err.error.message }`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is:
            ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}