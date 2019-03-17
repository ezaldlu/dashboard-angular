import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExamplePageComponent } from './pages/example-page/example-page.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ActivityComponent } from './pages/activity-dashboard/activity-dashboard.component';
import { QueueComponent } from './pages/queue-dashboard/queue-dashboard.component';

const appRoutes: Routes = [
  // {
  //   path: '',
  //   component: ExamplePageComponent,
  //   data: {
  //     title: 'Example page',
  //     subtitle: 'Page subtitle'
  //   }
  // },
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
      subtitle: 'Example'
    }
  },
  {
    path: 'login',
    component: ExamplePageComponent,
    data: {
      title: 'Login',
      subtitle: 'Login'
    }
  },
  {
    path: 'activity-dashboard',
    component: ActivityComponent,
    data: {
      title: 'Activity Dashboard',
      subtitle: 'Activity Dashboard'
    }
  },
  {
    path: 'queue-dashboard',
    component: QueueComponent,
    data: {
      title: 'Queue Dashboard',
      subtitle: 'Queue Dashboard'
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
