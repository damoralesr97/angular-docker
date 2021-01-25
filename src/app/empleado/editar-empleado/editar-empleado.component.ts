import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { Empleado } from 'src/app/model/empleado.model';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {
  id: number;
  empleado: Empleado;
  apiResponse: ApiResponse;

  constructor(private ruter: Router, private empleadoSrv: EmpleadoService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.empleado = new Empleado();
    this.id = this.route.snapshot.params['id'];
    this.empleadoSrv.getEmpleadoById(this.id).subscribe(
      data=>{console.log(data)
      this.empleado=data;
      },
      error=>console.error(error)
    );
  }

  onSubmit(){
    this.empleadoSrv.actualizarEmpleado(this.id, this.empleado).subscribe(
      data=>console.log(data), error=>console.error(error));
      this.empleado = new Empleado();
      this.ruter.navigate(['/empleados']);
  }

}
