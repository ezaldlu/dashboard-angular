import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplePageComponent } from './pages/example-page/example-page.component';

const appRoutes: Routes = [
  {
    path: '',
    component: ExamplePageComponent,
    data: {
      title: 'Example page',
      subtitle: 'Page subtitle'
    }
  },
  {
    path: '**',
    redirectTo: '/',
    data: { title: '404' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
