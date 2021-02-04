import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from '../../client/client.service';

interface DialogData {
    id: string
}

@Component({
    selector: 'app-modal-delete',
    templateUrl: './modal-delete.component.html',
    styleUrls: ['./modal-delete.component.css']
})
export class ModalDeleteComponent implements OnInit {

    constructor(
        private clientService: ClientService,
        public dialogRef: MatDialogRef<ModalDeleteComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData
    ) { }

    onNoClick(): void {
        this.dialogRef.close();
    }

    deleteClient(): void {
        this.clientService.delete(this.data.id).subscribe(() =>
            window.location.reload()
        )
    }

    ngOnInit(): void { }
}
