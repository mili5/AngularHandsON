import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { catchError,Observable,throwError } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiServer= 'http://localhost:3000/employees';

  constructor(private httpClient:HttpClient) { }

  errorhandler(error:any){
    let errorMessage='';
    if(error.error instanceof ErrorEvent){
      errorMessage=error.error.message;
    }
    else{
      errorMessage=`Error code: ${error.status} \n Message:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  getAll():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.apiServer)
    .pipe(catchError(this.errorhandler));
  }
  createEmployee(emp:Employee): Observable<any> {
    return this.httpClient.post<Employee>(this.apiServer,emp).pipe(catchError(this.errorhandler));
  }
  
}
