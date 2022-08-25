import { Injectable } from '@angular/core';
import { catchError,Observable,observable,throwError } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiServer='  http://localhost:3000/userLogins';

  constructor(private httpClient:HttpClient){}

  errorhandler(error:any){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message;

    }
    else{
      errorMessage=`Error code: ${error.status} \n Message : ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getAll(): Observable<[]>{
    return this.httpClient.get<[]>(this.apiServer).pipe(catchError(this.errorhandler));
  }
  createUser(user:any): Observable<any> {
    return this.httpClient.post(this.apiServer, user)
    .pipe(catchError(this.errorhandler));
  }
}
