import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError,Observable,throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiServer='https://fakestoreapi.com/products/';

  constructor(private httpClient:HttpClient) { }

  errorhandler(error:any){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message;
    }
    else{
      errorMessage=`Error code: ${error.status} \n Message: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  getAllData(): Observable<[]>{
    return this.httpClient.get<[]>(this.apiServer).pipe(catchError(this.errorhandler));
  }

  
}
