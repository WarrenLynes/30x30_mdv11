import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputersComponent } from './computers.component';
import { RouterModule } from '@angular/router';
import { ListComponent, UiModule } from '@mdv11/ui';
import { MaterialModule } from '@mdv11/material';

@NgModule({
  declarations: [ComputersComponent],
  imports: [CommonModule,
    RouterModule.forChild([{
      path: '',
      component: ComputersComponent,
      children: [ { path: '', component: ListComponent } ]
    }]),
    MaterialModule,
    UiModule
  ],
  exports: [ComputersComponent]
})
export class ComputersModule { }
