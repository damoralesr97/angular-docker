import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from 'src/app/model/empleado.model';
import { EmpleadoService } from 'src/app/service/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  empleado: Empleado = new Empleado();
  submitted=false;

  constructor(private empleadoSrv: EmpleadoService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.submitted=true;
    this.empleadoSrv.crearEmpleado(this.empleado).subscribe(
      data=>console.log(data),error=>console.error(error)
    );
    this.empleado = new Empleado();
    this.router.navigate(['/empleados']);
  }

}
