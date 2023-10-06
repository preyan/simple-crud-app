import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../types/common.types';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor(private _http: HttpClient) {}

  addEmployee(data: Employee): Observable<Employee> {
    return this._http.post<Employee>('http://localhost:3000/employees', data);
  }

  updateEmployee(id: number, data: Employee): Observable<Employee> {
    return this._http.put<Employee>(
      `http://localhost:3000/employees/${id}`,
      data
    );
  }

  getEmployeeList(): Observable<Employee[]> {
    return this._http.get<Employee[]>('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this._http.delete<Employee>(`http://localhost:3000/employees/${id}`);
  }
}
