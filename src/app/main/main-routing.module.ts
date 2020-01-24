import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            //localhost:4200/main/user
            {path:'user',loadChildren: () => import('./user/user.module').then(m => m.UserModule)}
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MainRoutingModule { }