import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDeleteComponent } from '../../template/modal-delete/modal-delete.component';
import { Client } from '../client.mode';
import { ClientService } from '../client.service';

@Component({
    selector: 'app-client-read',
    templateUrl: './client-read.component.html',
    styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {
    clients: Client[];
    displayedColumns = ['id', 'name', 'action'];

    constructor(private clientService: ClientService, public dialog: MatDialog) {
        this.clients = []
    }

    ngOnInit(): void {
        this.clientService.read().subscribe((resp) => this.clients = resp)
    }

    openModalDelete(id: string): void {
        this.dialog.open(ModalDeleteComponent, {
          width: '300px',
          data: {id}
        });
      }

}
