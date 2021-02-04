import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import { ClientUpdateComponent } from './components/client/client-update/client-update.component';

import { ClientsCrudComponent } from './views/clients-crud/clients-crud.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "clients",
        component: ClientsCrudComponent
    },
    {
        path: "clients/create",
        component: ClientCreateComponent
    },
    {
        path: "clients/update/:id",
        component: ClientUpdateComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
