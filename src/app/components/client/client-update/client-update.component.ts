import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Client } from '../client.mode';
import { ClientService } from '../client.service';

@Component({
    selector: 'app-client-update',
    templateUrl: './client-update.component.html',
    styleUrls: ['./client-update.component.css']
})
export class ClientUpdateComponent implements OnInit {

    id = ''
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
        },
        itens: []
    }

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

    newItens: any = {};
    showListItens = 0;


    constructor(
        private clientService: ClientService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.clientService.getSates().subscribe((resp) => {
            this.states = resp;
        });
        this.id = this.activatedRoute.snapshot.paramMap.get('id') || '';
        this.clientService.readById(this.id).subscribe(client => {
            this.client = client;
            this.selectedState = client.address.state;
            this.selectedCity = client.address.city;
            this.showListItens = this.client.itens?.length || 0
        });
    }

    updateClient(): void {
        this.clientService.update(this.client).subscribe(
            () => {
                this.clientService.showMessage('Alterado com sucesso!')
                this.router.navigate(['/clients'])
            }
        )
    }

    cancel(): void {
        this.router.navigate(['/clients'])
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

    addProduct(): void {
        const item = {
            code: Math.random(),
            name: this.newItens.name,
            price: this.newItens.price
        };
        this.client.itens?.push(item);
        this.newItens.name = '';
        this.newItens.price = 0;
        this.showListItens = this.client.itens?.length || 0
    }

    removeProduct(code: number): void {
        this.client.itens = this.client.itens?.filter((item) => {
            return item.code !== code
        })
        this.showListItens = this.showListItens -1
    }
}
