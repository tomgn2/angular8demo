import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { MainComponent } from './main.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            //localhost:4200/main/user
            { path: 'home', component: HomeComponent }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }