import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './empleado/crear-empleado/crear-empleado.component';
import { EditarEmpleadoComponent } from './empleado/editar-empleado/editar-empleado.component';
import { ListarEmpleadosComponent } from './empleado/listar-empleados/listar-empleados.component';

const routes: Routes = [
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path:'add',component:CrearEmpleadoComponent},
  {path:'empleados',component:ListarEmpleadosComponent},
  {path:'editar/:id',component:EditarEmpleadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
