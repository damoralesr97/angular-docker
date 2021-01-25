import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-listar-empleados',
  templateUrl: './listar-empleados.component.html',
  styleUrls: ['./listar-empleados.component.css']
})
export class ListarEmpleadosComponent implements OnInit {
  empleados: Observable<ApiResponse>;

  constructor(private empleadoSrv: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
    this.empleados = this.empleadoSrv.getEmpleados();
    $(function(){
      $('dt-empleados').DataTable();
    });
  }

  eliminarEmplead(id: number){
    this.empleadoSrv.eliminarEmpleado(id).subscribe(
      data=>{console.log(data);
      this.empleados=this.empleadoSrv.getEmpleados();
      },
      error=>console.error(error)
      );
  }

  editarEmpleado(id: number){
    this.router.navigate(['editar',id]);
  }

}
