import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from '../client.mode';
import { ClientService } from "../client.service";

@Component({
    selector: 'app-client-create',
    templateUrl: './client-create.component.html',
    styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
    states = [{
        id: '',
        nome: '',
        sigla: '',

    }];
    citys = [{
        id: '',
        nome: ''

    }];
    selectedState = '';
    selectedCity = '';

    client: Client = {
        name: '',
        cpf: '',
        phone: '',
        address: {
            state: '',
            city: '',
            postalCode: null,
            street: '',
            complement: ''
        }
    }

    constructor(private clientService: ClientService, private router: Router) { }

    ngOnInit(): void {
        this.clientService.getSates().subscribe((resp) => {
            this.states = resp;
        });
    }

    createClient(): void {
        this.client.address.state = this.selectedState
        this.client.address.city = this.selectedCity
        this.clientService.create(this.client).subscribe(() => {
            this.clientService.showMessage('Cliente criado com sucesso');
            this.router.navigate(["clients"]);
        })
    }

    cancel(): void {
        this.router.navigate(["clients"]);
    }

    onChangeState(): void {
        this.selectedCity = '';
        this.clientService.getCitys(this.selectedState).subscribe((resp) => this.citys = resp)
    }

    onChangePostalCode(): void {
        const postalCode = this.client.address?.postalCode;

        if (!postalCode) return

        this.clientService.getCep(postalCode).subscribe((resp) => {
            this.selectedState = resp.uf
            this.onChangeState()
            this.selectedCity = resp.localidade
            this.client.address.street = resp.logradouro
        })
    }
}
