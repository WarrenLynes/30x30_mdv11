import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataPersistence } from '@nrwl/angular';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RootStoreConfig, StoreModule } from '@ngrx/store';

import { CoreDataModule } from '@mdv11/core-data';
import { reducers } from '.';
import { ComputersEffects } from './computers.effects';
import { AuthEffects } from './auth.effects';

const storeConfig: RootStoreConfig<any> = {
  runtimeChecks: {
    strictActionImmutability: true,
    strictStateImmutability: true
  }
};

@NgModule({
  imports: [
    CommonModule,
    CoreDataModule,
    StoreModule.forRoot(reducers, storeConfig),
    EffectsModule.forRoot([
      AuthEffects,
      ComputersEffects
    ]),
    StoreDevtoolsModule.instrument({ name: 'mdv11 Store' })
  ],
  providers: [DataPersistence]
})
export class CoreStateModule {}
