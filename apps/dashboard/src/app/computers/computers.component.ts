import { Component, OnDestroy, OnInit } from '@angular/core';
import { Computer } from '@mdv11/core-data';
import { ComputersFacade } from '@mdv11/core-state';
import { Observable, Subject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { DialogFormComponent } from '@mdv11/ui';

@Component({
  selector: 'mdv11-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject();
  dialogRef: MatDialogRef<any>;

  constructor(
    private facade: ComputersFacade,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.facade.selectedComputer$.pipe(takeUntil(this.destroy$)).subscribe((selected) => {
      if(selected) {
        this.onEdit(selected);
      } else if(this.dialogRef){
        this.dialogRef.close();
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  onEdit(entity: Computer) {
    this.dialogRef = this.dialog.open(DialogFormComponent, { data: entity });

    this.dialogRef.afterClosed().subscribe((action) => {
      if(action) {
        if (action.action === 'SUBMIT') {
          this.facade.updateComputer(action.update);
        } else if ( action.action === 'DELETE') {
          this.facade.deleteComputer(action.update);
        }
      }
      this.facade.selectComputer(null);
    });
  }

  onCreate() {
    this.dialogRef = this.dialog.open(DialogFormComponent, { data: null });

    this.dialogRef.afterClosed().subscribe((action) => {
      if(action) {
        if (action.action === 'SUBMIT') { this.facade.createComputer(action.update); }
      }
      this.facade.selectComputer(null);
    });
  }
}
