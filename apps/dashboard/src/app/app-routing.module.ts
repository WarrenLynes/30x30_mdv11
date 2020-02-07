import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TokenInterceptor } from './auth.interceptor';
import { LoginComponent, UiModule } from '@mdv11/ui';
import { MaterialModule } from '@mdv11/material';

const routes: Routes = [
  { path: '', canActivate: [AuthGuard], loadChildren: () => import('./computers/computers.module').then(m => m.ComputersModule)},
  { path: 'login', component: LoginComponent },
  { path: 'lostnfound', component: NotFoundComponent },
  { path: '**', redirectTo: 'lostnfound', pathMatch: 'full' }
];

@NgModule({
  declarations: [ DashboardComponent, NotFoundComponent ],
  imports: [
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CommonModule,
    MaterialModule,
    UiModule
  ],
  exports: [RouterModule],
  providers: [TokenInterceptor]
})
export class AppRoutingModule { }
