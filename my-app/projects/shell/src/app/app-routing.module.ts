import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

const routes: Routes = [ {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'flights',
    loadChildren: () => loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe1',
        exposedModule: './Module'
      })
      .then(m => m.FlightsModule)
  },
  {
    path: 'mfe2',
    loadChildren: () => loadRemoteModule({
        type: 'manifest',
        remoteName: 'mfe2',
        exposedModule: './Module'
      })
      .then(m => m.FlightsModule2)
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
