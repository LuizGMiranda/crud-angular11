import { Component, OnInit } from '@angular/core';
import { Client } from '../client.mode';
import { ClientService } from '../client.service';

@Component({
    selector: 'app-client-read',
    templateUrl: './client-read.component.html',
    styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {
    clients: Client[];

    constructor(private clientService: ClientService) {
        this.clients = []
    }

    ngOnInit(): void {
        this.clientService.read().subscribe((resp) => this.clients = resp)
    }

}
