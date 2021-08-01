import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: 'home', loadChildren: () =>
    import('./presentation/components/home/home.module').then(m => m.HomeModule)
},
  {path: 'subbreeds', loadChildren: () => import('./presentation/components/subbreeds/subbreeds.module').then(m => m.SubbreedsModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
