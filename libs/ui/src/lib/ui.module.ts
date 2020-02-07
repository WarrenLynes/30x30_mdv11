import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from '@mdv11/material';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
import { ListComponent } from './list/list.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [MaterialModule, CommonModule],
  declarations: [LoginComponent, ToolbarComponent, DialogFormComponent, ListComponent, LoadingComponent],
  exports: [LoginComponent, ToolbarComponent, DialogFormComponent, ListComponent, LoadingComponent],
  entryComponents: [DialogFormComponent]
})
export class UiModule {}
