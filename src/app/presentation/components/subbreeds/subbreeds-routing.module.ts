import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubbreedsComponent } from './subbreeds.component';

const routes: Routes = [{ path: '', component: SubbreedsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubbreedsRoutingModule { }
