import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../model/api.response';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../model/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/api/empleados/';

  getEmpleados() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getEmpleadoById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + id);
  }

  crearEmpleado(empleado: Empleado): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, empleado);
  }

  actualizarEmpleado(id: number, empleado: Empleado): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + empleado.id, empleado);
  }

  eliminarEmpleado(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }

}
